webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mylogin_mylogin_component__ = __webpack_require__("../../../../../src/app/mylogin/mylogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__databind_databind_component__ = __webpack_require__("../../../../../src/app/databind/databind.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular4_notify__ = __webpack_require__("../../../../angular4-notify/angular4-notify.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular4_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular4_notify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__formvalidation_formvalidation_component__ = __webpack_require__("../../../../../src/app/formvalidation/formvalidation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__validation_service__ = __webpack_require__("../../../../../src/app/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__userlist_userlist_component__ = __webpack_require__("../../../../../src/app/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__infinitescroll_infinitescroll_component__ = __webpack_require__("../../../../../src/app/infinitescroll/infinitescroll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// export const ROUTES: Routes = [
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__mylogin_mylogin_component__["a" /* MyloginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_14__users_users_component__["a" /* UsersComponent */] },
    { path: 'formvalidation', component: __WEBPACK_IMPORTED_MODULE_19__formvalidation_formvalidation_component__["a" /* FormvalidationComponent */] },
    { path: 'user_list', component: __WEBPACK_IMPORTED_MODULE_26__userlist_userlist_component__["a" /* UserlistComponent */] },
    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_30__infinitescroll_infinitescroll_component__["a" /* InfinitescrollComponent */] }
    // { path: '**', component: NotfoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mylogin_mylogin_component__["a" /* MyloginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__databind_databind_component__["a" /* DatabindComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_14__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_19__formvalidation_formvalidation_component__["a" /* FormvalidationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_26__userlist_userlist_component__["a" /* UserlistComponent */],
            __WEBPACK_IMPORTED_MODULE_30__infinitescroll_infinitescroll_component__["a" /* InfinitescrollComponent */]
        ],
        // ,{useHash: true}
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_13_angular4_notify__["NotificationsModule"],
            __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_22_angular2_ladda__["LaddaModule"],
            __WEBPACK_IMPORTED_MODULE_24_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng4_loading_spinner__["a" /* Ng4LoadingSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_28_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_infinite_scroll__["a" /* InfiniteScrollModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13_angular4_notify__["NotificationsService"], __WEBPACK_IMPORTED_MODULE_17_ngx_smart_modal__["b" /* NgxSmartModalService */], __WEBPACK_IMPORTED_MODULE_20__validation_service__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_31__services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.cars = [
            'Ford', 'Chevrolet', 'Buick'
        ];
    }
    DataService.prototype.myData = function () {
        return 'This is the data from a service';
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/databind/databind.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/databind/databind.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  databind works!\n</p>\n<br>\n<img src=\"{{ imageDisplay }}\" height=\"200\" width=\"200\" />\n<img [src]=\"imageDisplay\" height=\"200\" width=\"200\"/>\n<img bind-src=\"imageDisplay\" height=\"200\" width=\"200\"/>\n\n<br/>\n<input type=\"text\" value=\"{{ sayHello() }}\" />\n<input type=\"text\" [value]=\"sayHello()\" />\n<input type=\"text\" bind-value=\"sayHello()\" />\n\n\n<br/>\n<input type=\"text\" value=\"Magnet Brains\" (click)=\"showvalue($event)\" (keyup)=\"showvalue($event)\" />\n\n<br/>\n<br/>\n<input type=\"text\" value=\"test data for two way binding\" [(ngModel)]=\"showvalueinput\" />\n<br/>\n<p>Show Value Of Input Box: {{ showvalueinput }}</p>\n"

/***/ }),

/***/ "../../../../../src/app/databind/databind.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabindComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabindComponent = (function () {
    function DatabindComponent(http) {
        this.http = http;
        this.hello = "Say Hello";
        this.imageDisplay = "https://angular.io/assets/images/logos/angular/angular.svg";
    }
    DatabindComponent.prototype.ngOnInit = function () {
        // This part is related to getting data from api......
        this.http.get('https://api.github.com/users/seeschweiler').subscribe(function (data) {
            console.log(data);
        });
        //************************ends section******************
        //This part is related to posting data to api.....
        var req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
        //Section ends.............
    };
    DatabindComponent.prototype.sayHello = function () {
        return this.hello = "Say Hi";
    };
    DatabindComponent.prototype.showvalue = function (event) {
        console.log(event.target.value);
    };
    return DatabindComponent;
}());
DatabindComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-databind',
        template: __webpack_require__("../../../../../src/app/databind/databind.component.html"),
        styles: [__webpack_require__("../../../../../src/app/databind/databind.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DatabindComponent);

var _a;
//# sourceMappingURL=databind.component.js.map

/***/ }),

/***/ "../../../../../src/app/formvalidation/formvalidation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Muli:400,700');\r\n\r\nbody {\r\n    background:#e8e8e8;\r\n    font-family: 'Muli';\r\n}\r\n\r\n.form-container {\r\n    display:block;\r\n    width:90%;\r\n    padding:2em;\r\n    margin: 2em auto;\r\n    background:#fff;\r\n}\r\n\r\n.alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/formvalidation/formvalidation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!name; else forminfo\">\r\n  <form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\r\n    <div class=\"form-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>My Reactive Form</h1>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label>Name</label>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <input type=\"text\" formControlName=\"name\">\r\n          <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">{{ titleAlert }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label>Email\r\n          </label>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <input type=\"email\" formControlName=\"email\">\r\n          <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">{{ emailAlert }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label>Description\r\n          </label>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <textarea  formControlName=\"description\"></textarea>\r\n          <div class=\"alert\" *ngIf=\"!rForm.controls['description'].valid && rForm.controls['description'].touched\">You must specify a description that's between 30 and 500 characters.</div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n        <input type=\"checkbox\" name=\"validate\" formControlName=\"validate\" value=\"1\"> On\r\n        <input type=\"submit\" class=\"button expanded\" value=\"Submit Form\" [disabled]=\"!rForm.valid\">\r\n      </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<ng-template #forminfo>\r\n  <div class=\"form-container\">\r\n    <div class=\"row columns\">\r\n        <h1>name : {{ name }}</h1>\r\n        <br>\r\n        <p>desc : {{ description }}</p>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/formvalidation/formvalidation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormvalidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormvalidationComponent = (function () {
    function FormvalidationComponent(fb) {
        this.fb = fb;
        this.description = '';
        this.name = '';
        this.titleAlert = 'This field is required';
        this.emailAlert = 'This field is required';
        this.rForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(500)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'validate': ''
        });
    }
    FormvalidationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('name').setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]);
                _this.rForm.get('email').setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]);
                _this.titleAlert = 'You need to specify at least 3 characters';
                _this.emailAlert = 'You need to specify at least 3 characters email';
            }
            else {
                _this.rForm.get('name').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
            }
            _this.rForm.get('name').updateValueAndValidity();
        });
    };
    FormvalidationComponent.prototype.addPost = function (post) {
        this.description = post.description;
        this.name = post.name;
    };
    return FormvalidationComponent;
}());
FormvalidationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'control-messages',
        template: __webpack_require__("../../../../../src/app/formvalidation/formvalidation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/formvalidation/formvalidation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], FormvalidationComponent);

var _a;
//# sourceMappingURL=formvalidation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h3>This is my dashboard landing page</h3>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/infinitescroll/infinitescroll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-users tbody tr:hover {\r\n\tcursor: pointer;\r\n\tbackground-color: #eee;\r\n}\r\n.nav-user-photo {\r\n     vertical-align: middle;\r\n}\r\n.user_panel {\r\n    width: 50%;\r\n}\r\n.inf-content{\r\n    border:1px solid #DDDDDD;\r\n    border-radius:10px;\r\n    -webkit-box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);\r\n}\t\t\t\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infinitescroll/infinitescroll.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading_list\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n<div class=\"container\">\n\n  <br>\n\n\t<div class=\"row\">\n        <div class=\"panel panel-default user_panel\">\n            <div class=\"panel-heading\">\n                <h6 class=\"panel-title\" *ngIf=\"count \">{{ count }} users found</h6>\n                <select class=\"\" style=\"width:50%;\" [ngModel]=\"selected_data\" (ngModelChange)=\"onFilterChange($event)\">\n                  <option value=\"0\">All</option>\n                    <option value=\"1\">Super Admin</option>\n                  <option value=\"2\">Admin</option>\n                  <option value=\"3\">Client</option>\n                </select>\n            </div>\n            <br>\n            <div class=\"panel-body\">\n\t\t\t\t          <div class=\"table-container\">\n                    <table class=\"table-users table\" border=\"0\">\n                        <tbody *ngIf=\"!filerFlag \" >\n                            <tr *ngFor=\"let user of allUsers\" (click) = \"showUserDetails(user)\">\n                                <td width=\"10\" align=\"center\">\n                                    <i class=\"fa fa-2x fa-user fw\"></i>\n                                </td>\n                                <td>\n                                     {{user.first_name}} {{user.last_name}}<br><i class=\"fa fa-envelope\"></i>\n                                     <small class=\"text-muted\">{{user.email}}</small>\n                                </td>\n                                <td>\n                                    {{user.role_name}}\n                                </td>\n                                <td align=\"center\">\n                                    <small class=\"text-muted\">{{user.company_name}}</small>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"filerFlag\">\n                            <tr *ngFor=\"let user of filteredData\" (click) = \"showUserDetails(user)\">\n                                <td width=\"10\" align=\"center\">\n                                    <i class=\"fa fa-2x fa-user fw\"></i>\n                                </td>\n                                <td>\n                                     {{user.first_name}} {{user.last_name}}<br><i class=\"fa fa-envelope\"></i>\n                                     <small class=\"text-muted\">{{user.email}}</small>\n                                </td>\n                                <td>\n                                    {{user.role_name}}\n                                </td>\n                                <td align=\"center\">\n                                    <small class=\"text-muted\">{{user.company_name}}</small>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <br>\n                    <div style=\"text-align:center;\">\n                    <button class=\"btn btn-primary override_ladda\"(click)=\"loadMore()\" [ladda]=\"load_moreLoading\" data-style=\"zoom-in\" *ngIf=\"count\">Load More</button>\n                  </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default user_panel\" *ngIf=\"show\" style=\" padding-left: 30px;\">\n          <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">&nbsp;</h3>\n\n          </div>\n          <div class=\"panel-body\" style=\"padding-top: 47px;\">\n            <div class=\"card card-body bg-light\" >\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"text-align: right;\" (click) = \"closeDetails()\">\n              <span aria-hidden=\"true\">&times;</span>\n              </button>\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4\">\n                        <img src=\"http://placehold.it/380x500\" alt=\"\" class=\"img-rounded img-responsive\" />\n                    </div>\n                    <div class=\"col-sm-6 col-md-8\">\n                        <h4>\n                            {{userDetails.first_name}} {{userDetails.last_name}}</h4>\n                        <small><cite title=\"San Francisco, USA\">{{userDetails.address}}, {{userDetails.city}},{{userDetails.country}},{{userDetails.zip_code}} <i class=\"glyphicon glyphicon-map-marker\">\n                        </i></cite></small>\n                        <p>\n                            <i class=\"glyphicon glyphicon-envelope\"></i>{{userDetails.email}}\n                            <br />\n                            <i class=\"glyphicon glyphicon-globe\"></i><a href=\"javascript:void(0)\">{{userDetails.company_name}}</a>\n                            <br />\n                            <i class=\"glyphicon glyphicon-gift\"></i>{{userDetails.role_name}}</p>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-primary\">\n                                {{userDetails.category_name}}</button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card card-body bg-light\" >\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"text-align: right;\" (click) = \"closeDetails()\">\n              <span aria-hidden=\"true\">&times;</span>\n              </button>\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4\">\n                        <img src=\"http://placehold.it/380x500\" alt=\"\" class=\"img-rounded img-responsive\" />\n                    </div>\n                    <div class=\"col-sm-6 col-md-8\">\n                        <h4>\n                            {{api_user_details[\"first_name\"]}} {{api_user_details[\"last_name\"]}}</h4>\n                        <small><cite title=\"San Francisco, USA\">{{api_user_details[\"address\"]}}, {{api_user_details[\"city\"]}},{{api_user_details[\"country\"]}},{{api_user_details[\"zip_code\"]}} <i class=\"glyphicon glyphicon-map-marker\">\n                        </i></cite></small>\n                        <p>\n                            <i class=\"glyphicon glyphicon-envelope\"></i>{{api_user_details[\"email\"]}}\n                            <br />\n                            <i class=\"glyphicon glyphicon-globe\"></i><a href=\"javascript:void(0)\">{{api_user_details[\"company_name\"]}}</a>\n                            <br />\n                            <i class=\"glyphicon glyphicon-gift\"></i>{{api_user_details[\"role_name\"]}}</p>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-primary\">\n                                {{api_user_details[\"category_name\"]}}</button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n          </div>\n        </div>\n\n\t</div>\n  <div class=\"row\">&nbsp;</div>\n\n\n\n\n</div>\n\n<!-- <div class=\"search-results\"\n      infiniteScroll\n      [infiniteScrollDistance]=\"2\"\n      [infiniteScrollThrottle]=\"50\"\n      (scrolled)=\"onScroll()\">\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/infinitescroll/infinitescroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfinitescrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfinitescrollComponent = (function () {
    function InfinitescrollComponent(http) {
        this.http = http;
        this.loading_list = false;
        this.allUsers = [];
        this.data = {};
        this.show = false;
        this.userDetails = {};
        this.api_user_details = {};
        this.filerFlag = false;
        this.selected_data = 0;
        this.filter_data = 0;
        this.load_moreLoading = false;
    }
    InfinitescrollComponent.prototype.ngOnInit = function () {
        this.loading_list = true;
        this.limit = 10;
        this.offset = 0;
        var data = { 'limit': this.limit, 'offset': this.offset };
        this.getUsers(data);
    };
    InfinitescrollComponent.prototype.loadMore = function () {
        var _this = this;
        this.load_moreLoading = true;
        this.limit = 10;
        this.offset += this.limit;
        var data = { 'limit': this.limit, 'offset': this.offset };
        this.getUsers(data);
        setTimeout(function () {
            _this.load_moreLoading = false;
        }, 400);
    };
    InfinitescrollComponent.prototype.getUsers = function (param) {
        var _this = this;
        this.http.post('http://localhost:8000/api/getUsersPagination', param).subscribe(function (data) {
            _this.allUsers = _this.allUsers.concat(data["users"]);
            _this.count = data["count"];
            _this.loading_list = false;
            _this.onFilterChange(_this.filter_data);
        });
    };
    InfinitescrollComponent.prototype.showUserDetails = function (user) {
        var _this = this;
        this.show = true;
        this.userDetails = user;
        this.http.get('http://localhost:8000/api/getUserDetails/' + user.user_id).subscribe(function (data) {
            _this.api_user_details = data;
        });
    };
    InfinitescrollComponent.prototype.closeDetails = function () {
        this.show = false;
    };
    InfinitescrollComponent.prototype.onFilterChange = function (role_id) {
        var _this = this;
        this.filter_data = role_id;
        if (this.filter_data != "0") {
            this.filerFlag = true;
            this.filteredData = this.allUsers.filter(function (x) { return x.role_id == _this.filter_data; });
        }
        else {
            this.filerFlag = false;
        }
    };
    return InfinitescrollComponent;
}());
InfinitescrollComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-infinitescroll',
        template: __webpack_require__("../../../../../src/app/infinitescroll/infinitescroll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infinitescroll/infinitescroll.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], InfinitescrollComponent);

var _a;
//# sourceMappingURL=infinitescroll.component.js.map

/***/ }),

/***/ "../../../../../src/app/mylogin/mylogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\r\nborder: 1px solid gray;\r\npadding: 18px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mylogin/mylogin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-2\">&nbsp;</div>\n    <div class=\"col-md-8\">\n      <form class=\"form-horizontal\" role=\"form\">\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <h2>Please Login</h2>\n                  <hr>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group has-danger\">\n                      <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                          <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                 placeholder=\"you@example.com\" required autofocus>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label class=\"sr-only\" for=\"password\">Password</label>\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                          <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                                 placeholder=\"Password\" required>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"form-control-feedback\">\n                      <span class=\"text-danger align-middle\">\n                      <!-- Put password error message here -->\n                      </span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\" style=\"padding-top: .35rem\">\n                  <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\n                      <label class=\"form-check-label\">\n                          <input class=\"form-check-input\" name=\"remember\"\n                                 type=\"checkbox\" >\n                          <span style=\"padding-bottom: .15rem\">Remember me</span>\n                      </label>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\" style=\"padding-top: 1rem\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"login()\"><i class=\"fa fa-sign-in\"></i> Login</button>\n                  <a class=\"btn btn-link\" routerLink=\"/register\">Click here to Register</a>\n              </div>\n          </div>\n      </form>\n    </div>\n    <div class=\"col-md-2\">&nbsp;</div>\n  </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/mylogin/mylogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyloginComponent = (function () {
    function MyloginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    MyloginComponent.prototype.ngOnInit = function () {
        this.auth.setIsLogged(0);
        console.log(this.auth.isLogged);
    };
    MyloginComponent.prototype.login = function () {
        this.auth.setIsLogged(1);
        this.router.navigate(['/home']);
        console.log(this.auth.isLogged);
    };
    return MyloginComponent;
}());
MyloginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mylogin',
        template: __webpack_require__("../../../../../src/app/mylogin/mylogin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mylogin/mylogin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], MyloginComponent);

var _a, _b;
//# sourceMappingURL=mylogin.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"auth.isLogged\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <!-- <a class=\"navbar-brand\" routerLink=\"/home\">user management</a> -->\n        <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img [src]=\"logoImagePath\" width=\"30\" height=\"30\" alt=\"\">\n        </a>\n\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item \" routerLinkActive=\"active-link\">\n                    <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active-link\">\n                    <a class=\"nav-link\" routerLink=\"/users\" >Users(without service) </a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-link\">\n                    <a class=\"nav-link\" routerLink=\"/user_list\" >Users(with service) </a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-link\">\n                    <a class=\"nav-link\" routerLink=\"/scroll\" >Users(with load more) </a>\n                </li>\n\n            </ul>\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\" >\n                  <a class=\"nav-link\" routerLink=\"/\" >Logout </a>\n              </li>\n            </ul>\n        </div>\n        <!--/.nav-collapse -->\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.logoImagePath = '/app/assets/img/logo.png';
        this.auth.setIsLogged(1);
        console.log(this.auth.isLogged);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/app/notfound/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notfound/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\r\nborder: 1px solid gray;\r\npadding: 18px;\r\n}\r\n@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n/* *, ::after, ::before{\r\n  box-sizing: content-box !important;\r\n  } */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-2\">&nbsp;</div>\n    <div class=\"col-md-8\">\n      <form class=\"form-horizontal\" #signupForm=\"ngForm\" (ngSubmit)=\"registerUser(signupForm)\" novalidate>\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <h2>Register New User</h2>\n                  <hr>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"name\">Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                          <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" required minlength=\"4\"\n                                 placeholder=\"John Doe\" autofocus ngModel  >\n\n                      </div>\n\n                  </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"form-control-feedback\">\n                          <span class=\"text-danger align-middle\">\n                          </span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"email\">E-Mail Address</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                          <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                 placeholder=\"you@example.com\" required autofocus ngModel>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"form-control-feedback\">\n                          <span class=\"text-danger align-middle\">\n                              <!-- Put e-mail validation error messages here -->\n                          </span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"password\">Password</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group has-danger\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                          <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                                 placeholder=\"Password\" required ngModel>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"password\">Confirm Password</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                              <i class=\"fa fa-repeat\"></i>\n                          </div>\n                          <input type=\"password\" name=\"password-confirmation\" class=\"form-control\"\n                                 id=\"password-confirm\" placeholder=\"Password\" required ngModel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <button type=\"submit\" [ladda]=\"regLoading\" data-style=\"zoom-in\" class=\"btn btn-success override_ladda\"><i class=\"fa fa-user-plus\"></i> Register</button>\n                  <a class=\"btn btn-link\" routerLink=\"/\">Go back to login</a>\n              </div>\n              <!-- <div class=\"col-md-3\">\n                <a class=\"btn btn-link\" routerLink=\"/login\">Go back to login</a>\n              </div> -->\n          </div>\n      </form>\n    </div>\n    <div class=\"col-md-2\">&nbsp;</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_notify__ = __webpack_require__("../../../../angular4-notify/angular4-notify.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular4_notify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = (function () {
    function RegistrationComponent(dataService, http, notificationsService, toastr, vcr) {
        this.dataService = dataService;
        this.http = http;
        this.notificationsService = notificationsService;
        this.toastr = toastr;
        this.someProperty = '';
        this.regLoading = false;
        this.headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': true
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        console.log(this.dataService);
        this.someProperty = this.dataService.myData();
        console.log(this.someProperty);
    };
    RegistrationComponent.prototype.registerUser = function (form) {
        var _this = this;
        this.regLoading = !this.regLoading;
        this.http.post('http://localhost:8000/api/testApi', form.value).subscribe(function (data) {
            _this.regLoading = !_this.regLoading;
            _this.toastr.success('User created successfully!', 'Success!');
            form.reset();
            // if(data.code == "200")
            // {
            //   this.notificationsService.addInfo('User created successfully');
            // }
            // else
            // {
            //   this.notificationsService.addError('Something happened wrong');
            // }
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular4_notify__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular4_notify__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], RegistrationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
        this.isLogged = false;
    }
    AuthService.prototype.test = function () {
        return 'working';
    };
    AuthService.prototype.setIsLogged = function (flag) {
        if (flag == 0) {
            this.isLogged = false;
        }
        else {
            this.isLogged = true;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/userlist/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this._baseURL = "http://localhost:8000/api";
    }
    ApiService.prototype.getUsers = function () {
        return this.http
            .get(this._baseURL + '/getUsers')
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background:#eee;\r\n}\r\n.main-box.no-header {\r\n    padding-top: 20px;\r\n}\r\n.main-box {\r\n    background: #FFFFFF;\r\n    -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    margin-bottom: 16px;\r\n    -webikt-border-radius: 3px;\r\n    border-radius: 3px;\r\n}\r\n.table a.table-link.danger {\r\n    color: #e74c3c;\r\n}\r\n.label {\r\n    border-radius: 3px;\r\n    font-size: 0.875em;\r\n    font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 0.875em;\r\n    font-style: italic;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\na {\r\n    color: #3498db;\r\n    outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.table thead tr th {\r\n    text-transform: uppercase;\r\n    font-size: 0.875em;\r\n}\r\n.table thead tr th {\r\n    border-bottom: 2px solid #e7ebee;\r\n}\r\n.table tbody tr td:first-child {\r\n    font-size: 1.125em;\r\n    font-weight: 300;\r\n}\r\n.table tbody tr td {\r\n    font-size: 0.875em;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #e7ebee;\r\n    padding: 12px 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\"> -->\n<ngx-loading [show]=\"loading_list\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n<div class=\"container bootstrap snippet\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"main-box no-header clearfix\">\n                <div class=\"main-box-body clearfix\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table user-list\">\n                            <thead>\n                                <tr>\n                                <th><span>User</span></th>\n                                <th><span>Company</span></th>\n                                <th class=\"text-center\"><span>Category</span></th>\n                                <th><span>Email</span></th>\n                                <th>Actions</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let user of allUsers | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                    <td>\n                                        <img [src]=\"profileImagePath\" alt=\"\">\n                                        <a href=\"javascript:void(0)\" class=\"user-link\">{{user.first_name}}  {{user.last_name}}</a>\n                                        <span class=\"user-subhead\">{{user.role_name}}</span>\n                                    </td>\n                                    <td>{{user.company_name}}</td>\n                                    <td class=\"text-center\">\n                                        <span class=\"label label-default\">{{user.category_name}}</span>\n                                    </td>\n                                    <td>\n                                        <a href=\"javascript:void(0)\">{{user.email}}</a>\n                                    </td>\n                                    <td style=\"width: 20%;\">\n                                        <a href=\"javascript:void(0)\" class=\"table-link\">\n                                            <span class=\"fa-stack\">\n                                                <i class=\"fa fa-square fa-stack-2x\"></i>\n                                                <i class=\"fa fa-search-plus fa-stack-1x fa-inverse\"></i>\n                                            </span>\n                                        </a>\n                                        <a href=\"javascript:void(0)\" class=\"table-link\" (click)=\"openEditModal(user)\">\n                                            <span class=\"fa-stack\">\n                                                <i class=\"fa fa-square fa-stack-2x\"></i>\n                                                <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\n                                            </span>\n                                        </a>\n                                        <a href=\"javascript:void(0)\" class=\"table-link danger\" (click)=\"openDeleteModal(user.user_id)\">\n                                            <span class=\"fa-stack\">\n                                                <i class=\"fa fa-square fa-stack-2x\"></i>\n                                                <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\n                                            </span>\n                                        </a>\n                                    </td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ngx-smart-modal #myModal [identifier]=\"'myModal'\">\n  <div class=\"container\">\n      <form class=\"form-horizontal\" #signupForm=\"ngForm\"  novalidate>\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <h2>Edit User</h2>\n                  <hr>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"name\">Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                          <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\"\n                                 required autofocus [(ngModel)]=\"editUserData.first_name\" required >\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"email\">E-Mail</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                          <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                 required autofocus [(ngModel)]=\"editUserData.email\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </form>\n\n  </div>\n  <button class=\"btn btn-default\"(click)=\"myModal.close()\">Close</button>\n    <button  class=\"btn btn-success\" style=\"float:right;\" (click)=\"updateUserData()\"> Update</button>\n\n</ngx-smart-modal>\n\n<ngx-smart-modal #deleteModal [identifier]=\"'deleteModal'\">\n\n  <div class=\"container\">\n        <div class=\"modal-header\">\n          <h3>Delete User</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You are about to delete.</p>\n          <p>Do you want to proceed?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-default\"(click)=\"deleteModal.close()\">No</button>\n          <button  class=\"btn btn-danger\" style=\"float:right;\" (click)=\"deleteUser()\"> Yes</button>\n        </div>\n  </div>\n\n</ngx-smart-modal>\n"

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/userlist/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserlistComponent = (function () {
    function UserlistComponent(http, ngxSmartModalService, toastr, vcr, apiSerivce) {
        this.http = http;
        this.ngxSmartModalService = ngxSmartModalService;
        this.toastr = toastr;
        this.apiSerivce = apiSerivce;
        this.loading_list = false;
        this.parsed = [];
        this.editUserData = {};
        this.data = {};
        this.toastr.setRootViewContainerRef(vcr);
        this.profileImagePath = '/app/assets/img/user.jpg';
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserlistComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading_list = true;
        this.apiSerivce.getUsers()
            .subscribe(function (data) {
            _this.allUsers = data;
            _this.loading_list = false;
        }, function (error) {
            console.log("Error :: " + error);
            _this.loading_list = false;
        });
    };
    UserlistComponent.prototype.openEditModal = function (user) {
        Object.assign(this.editUserData, user);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    UserlistComponent.prototype.updateUserData = function () {
        var _this = this;
        this.http.post('http://localhost:8000/api/updateUser', this.editUserData).subscribe(function (data) {
            _this.refresh();
            _this.ngxSmartModalService.getModal('myModal').close();
            _this.toastr.success('User data updated successfully!', 'Success!');
        });
    };
    UserlistComponent.prototype.openDeleteModal = function (id) {
        this.del_user_id = id;
        this.ngxSmartModalService.getModal('deleteModal').open();
    };
    UserlistComponent.prototype.deleteUser = function () {
        var _this = this;
        var del_data = { 'user_id': this.del_user_id };
        this.http.post('http://localhost:8000/api/deleteUser', del_data).subscribe(function (data) {
            var index = _this.allUsers.findIndex(function (x) { return x.user_id == _this.del_user_id; });
            _this.allUsers.splice(index, 1);
            _this.ngxSmartModalService.getModal('deleteModal').close();
            _this.toastr.error('User deleted successfully!', 'Deleted!');
        });
    };
    UserlistComponent.prototype.refresh = function () {
        var _this = this;
        this.apiSerivce.getUsers()
            .subscribe(function (data) {
            _this.allUsers = data;
        }, function (error) {
            console.log("Error :: " + error);
        });
    };
    return UserlistComponent;
}());
UserlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userlist',
        template: __webpack_require__("../../../../../src/app/userlist/userlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userlist/userlist.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _e || Object])
], UserlistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=userlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-results {\r\n\t\t\theight: 20rem;\r\n\t\t\toverflow: scroll;\r\n\t\t}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spinner> </app-spinner>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n<div class=\"container\">\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive\">\n        <thead>\n            <tr>\n              <th>First name</th>\n              <th>Last name</th>\n              <th>Email</th>\n              <th>Address</th>\n              <th>City</th>\n              <th>Country</th>\n              <th>Zip_code</th>\n              <th>Company</th>\n              <th>Category</th>\n              <th>Role</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of allUsers | paginate: { itemsPerPage: 10, currentPage: p }\">\n              <td>{{user.first_name}}</td>\n              <td>{{user.last_name}}</td>\n              <td>{{user.email}}</td>\n              <td>{{user.address}}</td>\n              <td>{{user.city}}</td>\n              <td>{{user.country}}</td>\n              <td>{{user.zip_code}}</td>\n              <td>{{user.company_name}}</td>\n              <td>{{user.category_name}}</td>\n              <td>{{user.role_name}}</td>\n              <td>\n                <button class=\"btn btn-info\" (click)=\"openEditModal(user)\"><span class=\"fa fa-pencil\"></span></button>\n                <button class=\"btn btn-danger\" (click)=\"openDeleteModal(user.user_id)\"><span class=\"fa fa-close\"></span></button>\n              </td>\n            </tr>\n          </tbody>\n\n      </table>\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<ngx-smart-modal #myModal [identifier]=\"'myModal'\">\n  <div class=\"container\">\n      <form class=\"form-horizontal\" #signupForm=\"ngForm\"  novalidate>\n          <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                  <h2>Edit User</h2>\n                  <hr>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"name\">Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                          <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\"\n                                 required autofocus [(ngModel)]=\"editUserData.first_name\" required >\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-3 field-label-responsive\">\n                  <label for=\"email\">E-Mail</label>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                          <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                 required autofocus [(ngModel)]=\"editUserData.email\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </form>\n\n  </div>\n  <button class=\"btn btn-default\"(click)=\"myModal.close()\">Close</button>\n    <button  class=\"btn btn-success\" style=\"float:right;\" (click)=\"updateUserData()\"> Update</button>\n\n</ngx-smart-modal>\n\n<ngx-smart-modal #deleteModal [identifier]=\"'deleteModal'\">\n\n  <div class=\"container\">\n        <div class=\"modal-header\">\n          <h3>Delete User</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You are about to delete.</p>\n          <p>Do you want to proceed?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-default\"(click)=\"deleteModal.close()\">No</button>\n          <button  class=\"btn btn-danger\" style=\"float:right;\" (click)=\"deleteUser()\"> Yes</button>\n        </div>\n  </div>\n\n</ngx-smart-modal>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(http, ngxSmartModalService, toastr, vcr, Ng4LoadingSpinnerService) {
        this.http = http;
        this.ngxSmartModalService = ngxSmartModalService;
        this.toastr = toastr;
        this.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
        this.loading = false;
        this.editUserData = {};
        this.data = {};
        this.allUsers = [{}];
        this.toastr.setRootViewContainerRef(vcr);
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.Ng4LoadingSpinnerService.show();
        this.loading = true;
        this.http.get('http://localhost:8000/api/getUsers').subscribe(function (data) {
            _this.allUsers = data;
            console.log(data);
            _this.Ng4LoadingSpinnerService.hide();
            _this.loading = false;
            _this.total = Object.keys(data).length;
        });
    };
    UsersComponent.prototype.openEditModal = function (user) {
        this.editUserData = user;
        this.ngxSmartModalService.getModal('myModal').open();
        console.log(this.editUserData);
    };
    UsersComponent.prototype.updateUserData = function () {
        var _this = this;
        console.log(this.editUserData);
        this.http.post('http://localhost:8000/api/updateUser', this.editUserData).subscribe(function (data) {
            _this.ngxSmartModalService.getModal('myModal').close();
            _this.toastr.success('User data updated successfully!', 'Success!');
        });
    };
    UsersComponent.prototype.openDeleteModal = function (id) {
        this.del_user_id = id;
        this.ngxSmartModalService.getModal('deleteModal').open();
    };
    UsersComponent.prototype.deleteUser = function () {
        var _this = this;
        console.log(this.del_user_id);
        var del_data = { 'user_id': this.del_user_id };
        this.http.post('http://localhost:8000/api/deleteUser', del_data).subscribe(function (data) {
            _this.getUsers();
            _this.ngxSmartModalService.getModal('deleteModal').close();
            _this.toastr.error('User deleted successfully!', 'Deleted!');
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _e || Object])
], UsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
ValidationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ValidationService);

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map