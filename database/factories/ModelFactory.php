<?php
use Faker\Provider\Address;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;
    return [
        'first_name' => $faker->firstname,
        'last_name' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'address' => $faker->streetAddress,
        'city' => $faker->city,
        'country' => $faker->country,
        'zip_code' => Address::postcode(),
        'remember_token' => str_random(10),
    ];
});
