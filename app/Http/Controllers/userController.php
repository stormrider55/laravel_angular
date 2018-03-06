<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\categories;
use App\companies;
use App\roles;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    public function create_user(Request $request)
    {
      $data =  $request->all();
      $status = User::insert(
      ['name' => $data["name"], 'email' => $data["email"],'password' => $data["password"]]
      );
      if ($status) {
        return response()->json([
        'status' => 'Success',
        'code' => '200'
        ]);
      }
    }

    public function get_users()
    {
      try {
        $query = "SELECT users.user_id, users.first_name, users.last_name, users.email, users.address, users.city, users.country,users.zip_code,roles.role_name,categories.category_name,companies.company_name
                  FROM users
                  INNER JOIN roles
                  ON users.role_id=roles.role_id
                  INNER JOIN categories
                  ON users.category_id=categories.category_id
                  INNER JOIN companies
                  ON users.company_id=companies.company_id";
        $data = DB::select($query);
        return response()->json($data);
      }
      catch (Exception $e) {
      echo 'Caught exception: ',  $e->getMessage();
      }
    }
    public function update_user(Request $request)
    {
      $data =  $request->all();
      $status = User::where('user_id', $data["user_id"])
            ->update(['first_name' => $data["first_name"],"email" =>$data["email"]]);
      if ($status) {
        return response()->json([
        'status' => 'Success',
        'code' => '200'
        ]);
      }
      else {
        return response()->json([
        'status' => 'Server error',
        'code' => '500'
        ]);
      }
    }
    public function delete_user(Request $request)
    {
      $data =  $request->all();
      $status = User::where('user_id',$data["user_id"])->delete();
      if ($status) {
        return response()->json([
        'status' => 'Success',
        'code' => '200'
        ]);
      }
      else {
        return response()->json([
        'status' => 'Server error',
        'code' => '500'
        ]);
      }
    }

    public function cron()
    {
        // $data = User::all('user_id')->random(1);
        // return $data[0]->user_id;

        DB::beginTransaction();
        try {
            for ($i=1; $i < 70001; $i++) {
              $role = roles::all('role_id')->random(1);
              $role_id = $role[0]->role_id;
              $company = companies::all('company_id')->random(1);
              $company_id = $company[0]->company_id;
              $category = categories::all('category_id')->random(1);
              $category_id = $category[0]->category_id;
              set_time_limit(0);
              User::where('user_id', $i)->update(['category_id' => $category_id,'role_id' => $role_id,'company_id' => $company_id]);
            }
            DB::commit();
            return response()->json([
            'status' => 'Success',
            'code' => '200'
            ]);
            // all good
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
            'status' => 'Server error',
            'code' => '500',
            'msg' => $e
            ]);
            // something went wrong
        }
    }

    public function getUsersPagination(Request $request)
    {
      $data =  $request->all();
      $limit = $data["limit"];
      $offset = $data["offset"];
      $query = User::select('users.user_id', 'users.first_name', 'users.last_name', 'users.email', 'users.address', 'users.city', 'users.country','users.zip_code','roles.role_name','roles.role_id','categories.category_name','companies.company_name')
                   ->join('roles', 'users.role_id', '=', 'roles.role_id')
                   ->join('categories', 'users.category_id', '=', 'categories.category_id')
                   ->join('companies', 'users.company_id', '=', 'companies.company_id');
      $count = $query->count();
      $users =  $query->skip($offset)->take($limit)->get();

      return response()->json(["users"=>$users,"count"=>$count]);
    }

    public function getUserDetails($user_id)
    {
      $data = User::select('users.user_id', 'users.first_name', 'users.last_name', 'users.email', 'users.address', 'users.city', 'users.country','users.zip_code','roles.role_name','categories.category_name','companies.company_name')
                   ->join('roles', 'users.role_id', '=', 'roles.role_id')
                   ->join('categories', 'users.category_id', '=', 'categories.category_id')
                   ->join('companies', 'users.company_id', '=', 'companies.company_id')
                   ->where('users.user_id',$user_id)
                   ->first();
      return response()->json($data);
    }

    public function login(Request $request)
    {
      $data =  $request->all();
      $request->session()->put('isLogged', 1);
      return response()->json(["msg"=>"success"]);
    }
}
