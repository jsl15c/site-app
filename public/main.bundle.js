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

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row about-section\">\n  <p>\n    When I was 11 years old, my mother passed away from breast cancer.\n    Nearly a decade later, a psychologist diagnosed me with Post Traumatic Stress Disorder and generalized anxiety.\n    The new way of life that I adapted to was symptomatic of these disorders, rather than something I viewed as normal.\n  </p>\n  <p>\n    The healing I experienced from even one session of EMDR therapy changed my life.  The lack of access to this\n    therapy frusturates me, so I have taken it into my own hands to make it accessible to everyone who suffers from PTSD\n    and anxiety disorders.\n  </p>\n  <p>\n    Please feel free to reach out to me. I would love to talk, collaborate, or potentially work together.<br />\n    Best wishes,<br />\n    Jarrod Luca\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-section{padding:40px 0;margin:auto}.about-section p{line-height:30px;font-size:14px}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"scroll-table\">\n    <h3>All subscribers: {{userService.allUsers.length}}</h3>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">First Name</th>\n          <th scope=\"col\">Last Name</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Verified</th>\n          <th scope=\"col\">Type</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of userService.allUsers\">\n          <td>{{user.firstName}}</td>\n          <td>{{user.lastName}}</td>\n          <td>{{user.email}}</td>\n          <td class=\"verify\" [ngClass]=\"{verified:user.verified}\">{{user.verified}}</td>\n          <td>{{user.userType}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll-table{overflow-x:scroll}.verify{background:#960000}.verified{background:#009600}tr th{text-align:left;padding:10px}tr td{padding:10px}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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



var AdminComponent = (function () {
    function AdminComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.checkLogin();
        this.list();
    };
    AdminComponent.prototype.checkLogin = function () {
        var _this = this;
        this.userService.checklogin()
            .then(function (resultFromApi) {
            // this.isLoggedOut = false;
            console.log(resultFromApi);
            if (resultFromApi.userType === "admin") {
                _this.router.navigate(['/admin']);
                _this.userService.currentUser = resultFromApi;
                return;
            }
        })
            .catch(function (err) {
            if (err) {
                _this.router.navigate(['/']);
                return;
            }
        });
    };
    AdminComponent.prototype.list = function () {
        var _this = this;
        this.userService.list()
            .then(function (resultFromApi) {
            console.log('result ' + resultFromApi);
            _this.userService.allUsers = resultFromApi;
        })
            .catch(function (err) {
            if (err) {
                console.log(err);
                return;
            }
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_3__blog_blog_component__["a" /* BlogComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:left;padding:40px\">\n  News and updates are coming soon!<br />\n  Click <a href=\"/contact\"style=\"border-bottom:3px solid rgb(239, 241, 122)\">here</a> if you have questions, comments, or feedback.<br /><br />\n</div> -->\n<div class=\"row\">\n  <h2>news</h2>\n  <div class=\"head-line\"></div>\n  <div class=\"col col-1-3 post\">\n    <h3>EMDR VR Receives Honors/Funding at Global Wellness Summit</h3>\n    <a href=\"http://www.globalwellnesssummit.com/press/press-releases/press-release-global-wellness-summit-names-winner-shark-tank-wellness-student-competition-finalists-present-technology-solutions/\">\n      press release\n    </a><br />\n    <img src=\"../../assets/images/win.jpg\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{width:80%;margin:auto}.row h2{text-align:center;margin-bottom:-5px}.row .post h3{letter-spacing:0}.row .post a{border-bottom:2px solid #ddd86d;display:inline-block;margin-bottom:10px}.row .post img{max-width:400px;width:100%}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
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

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section contact-section\">\n  <div class=\"col-1-2 left\">\n    <h3>Contact</h3>\n    <p>\n      Jarrod Luca<br />\n      <a href=\"mailto:jarrod@emdrvr.com\">jarrod@emdrvr.com</a><br />\n      <a href=\"twitter.com/jarrod_luca\">Twitter</a> |\n      <a href=\"http://linkedin.com/in/jarrodluca\">LinkedIn</a>\n    </p>\n  </div>\n  <div class=\"col-1-2 left\">\n    <img src=\"../../assets/images/speak.jpg\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-section{line-height:40px;margin:40px auto 80px auto;width:90%;overflow:hidden}.contact-section div{overflow:hidden;position:relative;max-height:275px}.contact-section div:nth-child(1){box-shadow:15px 0px 5px -5px rgba(0,0,0,0.5);padding:10px 20px;z-index:3}.contact-section div:nth-child(2){z-index:2;display:block;-webkit-transform:translate(0, 0) !important;transform:translate(0, 0) !important}.contact-section img{width:100%;height:auto;display:block}@media screen and (max-width: 600px){.contact-section div:nth-child(1){box-shadow:0px 15px 5px -5px rgba(0,0,0,0.5) !important}.contact-section div:nth-child(2){-webkit-transform:translate(0, 0) !important;transform:translate(0, 0) !important}}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\n<div class=\"footer\">\n  <div class=\"col-1-2 left\">\n    <p>\n    Copyright © 2017 EMDR VR\n  </p>\n</div>\n<div class=\"col-1-2 right\">\n  <ul>\n    <li><a routerLink=\"/signup\">signup</a></li>\n    <li><a routerLink=\"/news\">news</a></li>\n    <li><a routerLink=\"/about\">about</a></li>\n    <li><a routerLink=\"/contact\">contact</a></li>\n  </ul>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{margin-top:50px;padding:20px;text-align:center;border-top:1px solid #fff;clear:both;width:100%}.footer p{line-height:40px;font-size:12px}.footer li{display:inline;margin-left:40px}.footer a{font-size:12px}@media screen and (max-width: 600px){li{display:block !important;margin-left:0 !important}}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\">\n    <a routerLink=\"/\">\n      <img src=\"../assets/images/logo.png\" />\n    </a>\n  </div>\n  <div class=\"menu\">\n    <ul>\n      <li><a routerLink=\"/\">home</a></li>\n      <li><a routerLink=\"/news\">news</a></li>\n      <li><a routerLink=\"/about\">about</a></li>\n      <li><a routerLink=\"/signup\">sign up</a></li>\n      <li><a routerLink=\"/contact\">contact</a></li>\n    </ul>\n  </div>\n  <div class=\"menu-btn\" (click)=\"toggleMenu()\" [ngClass]=\"{active:isOpen}\">\n    <div class=\"line\"></div>\n    <div class=\"line\"></div>\n  </div>\n</header>\n<div class=\"mobile-menu\" [ngClass]=\"{open:isOpen}\">\n  <ul>\n    <li><a routerLink=\"/\" (click)=\"toggleMenu()\">home</a></li>\n    <li><a routerLink=\"/news\" (click)=\"toggleMenu()\">news</a></li>\n    <li><a routerLink=\"/about\" (click)=\"toggleMenu()\">about</a></li>\n    <li><a routerLink=\"/signup\" (click)=\"toggleMenu()\">sign up</a></li>\n    <li><a routerLink=\"/contact\" (click)=\"toggleMenu()\">contact</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{padding:20px;overflow-y:hidden}header div{height:70px}header .logo{float:left}header .logo a{line-height:70px}header .logo img{max-width:100px;height:auto}header .menu{float:right}header .menu ul li{display:inline;margin-left:40px}header .menu-btn{cursor:pointer;margin-top:10px;float:right;position:relative;display:none;z-index:15}header .menu-btn .line{width:40px;height:5px;padding:0;margin-top:7px;border:1px solid #fff;border-radius:25px;transition:0.1s ease-in}.mobile-menu{width:0;height:0;position:absolute;overflow:hidden;background:#fff;top:0;bottom:0;left:0;right:0;margin:auto;z-index:10;display:none}.mobile-menu ul{padding:0;position:absolute;top:20vh;text-align:center;width:100%;left:0;right:0;margin:auto;display:table}.mobile-menu ul li{padding:20px 0;font-size:24px;letter-spacing:2px}.mobile-menu ul li a{color:#000}.mobile-menu ul li:hover{background:#000}.mobile-menu ul li:hover a{color:#fff}.active{display:block !important}.active .line{border:1px solid #000 !important}.active .line:nth-child(1){-webkit-transform:rotate(45deg);transform:rotate(45deg)}.active .line:nth-child(2){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.open{display:block;-webkit-animation:expand 1s ease-in-out;animation:expand 1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media screen and (max-width: 600px){img{max-width:80px}.menu{display:none}.menu-btn{display:block !important}}@-webkit-keyframes expand{0%{width:0;height:0}5%{width:0;height:5%}50%{width:100%;height:5%}100%{width:100%;height:100%}}@keyframes expand{0%{width:0;height:0}5%{width:0;height:5%}50%{width:100%;height:5%}100%{width:100%;height:100%}}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.isOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isOpen = !this.isOpen;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row land-container\">\n  <div class=\"heading\" [ngClass]=\"{fadeIn:isLoaded}\">\n    <h2>ONE STEP CLOSER TO A BETTER REALITY</h2>\n  </div>\n  <div class=\"headset\" [ngClass]=\"{scale:isLoaded}\">\n    <img src=\"../assets/images/vr.png\" />\n    <h3>\n      Limited waitlist ({{2000 - userService.allUsers.length}} spots left)\n    </h3>\n    <a routerLink=\"/signup\">sign up</a>\n  </div>\n</div>\n<app-blog></app-blog>\n<app-signup id=\"signup\"></app-signup>\n<div class=\"row content\">\n  <div class=\"col col-1-2 left\">\n    <h4>What is EMDR?</h4>\n    <p>\n      emdr uses a combination of eye movement and voice\n      guidance to treat PTSD, anxiety disorders, and chronic pain.\n    </p>\n  </div>\n  <div class=\"col col-1-2 left\">\n    <img src=\"../assets/images/brain.svg\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{text-align:center}.land-container{min-height:80vh;padding:0 0 50px 0}.land-container div{opacity:0}.land-container .heading{max-width:750px;margin:auto}.land-container .heading h2{font-size:36px}.land-container .headset{text-align:center}.land-container .headset img{max-width:25%;margin:auto;display:block}.land-container .headset a{display:inline;margin:auto;font-size:24px;border:3px solid #11dbff;margin-top:20px;padding:10px 20px}.land-container .headset a:hover{transition:0.3s ease-in;background:#11dbff}.content div{line-height:40px;text-align:left}.content div:nth-child(2){text-align:center}.content img{width:50%}@media screen and (min-width: 600px){.heading{width:70% !important}.heading h2{font-size:48px !important}}@media screen and (max-width: 600px){.headset img{max-width:50% !important}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes scale{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}50%{opacity:1}75%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes scale{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}50%{opacity:1}75%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.fadeIn{-webkit-animation:fadeIn 0.7s ease-in;animation:fadeIn 0.7s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.scale{-webkit-animation:scale 0.7s ease-in;animation:scale 0.7s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:1s;animation-delay:1s}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function HomeComponent(userService) {
        this.userService = userService;
        this.isLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoaded = true;
        this.list();
    };
    HomeComponent.prototype.list = function () {
        var _this = this;
        this.userService.list()
            .then(function (result) {
            _this.userService.allUsers = result;
        })
            .catch(function (err) {
            var parsedError = err.json();
            _this.errorMsg = parsedError;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <label for=\"email-input\">Email</label>\n  <input id=\"email-input\" type=\"email\"\n  [(ngModel)]=\"email\" name=\"email\"/>\n  <br />\n  <label for=\"pwd-input\">Password</label>\n  <input id=\"pwd-input\" type=\"password\"\n  [(ngModel)]=\"password\" name=\"password\"/>\n  <br />\n\n  <button (click)=\"login()\">login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.email, this.password)
            .then(function (resultFromApi) {
            _this.email = "",
                _this.password = "",
                _this.errorMsg = "";
            // routing
            _this.userService.currentUser = resultFromApi;
            _this.userService.isLoggedOut = false;
            if (_this.userService.currentUser.userType == 'admin') {
                _this.router.navigate(['/admin']);
            }
            else {
                _this.router.navigate(['/']);
            }
        })
            .catch(function (err) {
            var parsedError = err.json();
            console.log(parsedError + '🛑');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// methods for AJAX for Http



var UserService = (function () {
    function UserService(myHttp) {
        this.myHttp = myHttp;
        this.currentUser = {};
        this.allUsers = [];
    }
    // POST signup
    //  an argument for each req.body in API route
    UserService.prototype.signup = function (firstName, lastName, email, userType, password) {
        return this.myHttp
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBase + '/user-api/signup', 
        // form body info to send to backend (req.body)
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userType: userType
        }, 
        // send cookies across domains
        { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    UserService.prototype.verify = function (emailCode) {
        return this.myHttp
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBase + '/user-api/verify', {
            emailCode: emailCode
        }, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // POST login
    UserService.prototype.login = function (email, password) {
        return this.myHttp.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBase + '/user-api/login', {
            email: email,
            password: password
        }, { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // GET checklogin
    UserService.prototype.checklogin = function () {
        return this.myHttp.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBase + '/user-api/checklogin', 
        // send cookies across domains
        { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    UserService.prototype.list = function () {
        return this.myHttp.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiBase + '/user-api/list', 
        // send cookies across domains
        { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2>Join the wait list!</h2>\n  <span>{{2000 - userService.allUsers.length}} spots left!</span>\n  <div class=\"head-line\"></div>\n  <div class=\"signup\">\n    <form *ngIf=\"showForm\" [ngClass]=\"{fadeIn:isLoaded}\">\n\n<div class=\"inline-input\">\n      <label for=\"first-input\">First Name</label>\n      <input id=\"first-input\"\n      [(ngModel)]=\"firstName\" name=\"firstName\"/>\n</div>\n<div class=\"inline-input\">\n      <label for=\"last-input\">Last Name</label>\n      <input id=\"last-input\"\n      [(ngModel)]=\"lastName\" name=\"lastName\"/>\n</div>\n      <label for=\"email-input\">Email</label><br />\n      <input id=\"email-input\" type=\"email\"\n      [(ngModel)]=\"email\" name=\"email\"/>\n\n      <h4>Which best describes you?</h4>\n      <select [(ngModel)]=\"userType\" id=\"userType\" name=\"userType\">\n        <option value=\"patient\">Patient</option>\n        <option value=\"doctor\">Doctor</option>\n        <option value=\"practice\">Wellness Professional</option>\n        <option value=\"investor\">Investor</option>\n        <option value=\"other\">Other</option>\n      </select>\n\n      <div *ngIf=\"!(types.indexOf(userType) > -1)\">\n        <label>If other, please specify:</label>\n        <input id=\"otherType\"\n        [(ngModel)]=\"otherType\" name=\"otherType\"/>\n      </div>\n\n      <!-- <div [ngClass]=\"{selected:isPatient}\"\n      (click)=\"selectUser()\" class=\"box p\">\n        Patient\n      </div>\n      <div [ngClass]=\"{selected:!isPatient}\"\n            (click)=\"selectUser()\" class=\"box\">\n          Professional\n      </div> -->\n      <p *ngIf=\"errorMsg\" class=\"error\">\n        {{errorMsg}}\n      </p>\n      <button (click)=\"signup()\">Sign Up</button>\n    </form>\n\n\n    <form *ngIf=\"enterCode\" [ngClass]=\"{fadeIn:isLoaded}\">\n      <h4>A verification code has been sent to your email</h4>\n      <label for=\"code-input\">Verification code:</label>\n      <input id=\"code-input\"\n      [(ngModel)]=\"emailCode\" name=\"emailCode\"/>\n      <p *ngIf=\"errorMsg\" class=\"error\">\n        {{errorMsg}}\n      </p>\n      <button (click)=\"verify()\">Verify</button>\n    </form>\n    <h4 *ngIf=\"verified\" class=\"success\">Your email has successfully been verified</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row .signup{max-width:400px;margin:auto;padding-top:40px}.row .signup form{position:relative;overflow:hidden;min-height:65vh}.row .signup form input{color:#000;width:100%}.row .signup form option{color:#000}.row .signup form .inline-input{float:left;overflow:hidden;width:50%;padding-bottom:10px}.row .signup form .inline-input:nth-child(1){padding-right:5px}.row .signup form .inline-input:nth-child(2){padding-left:5px}.row .signup form #email-input{width:100%}.row .signup form select{color:#000;width:100%}.row .signup form select option{background:#fff;border:1px solid #000}.row .signup form button{display:block;position:relative;top:10px;width:100%;background:transparent;padding:20px;display:block;border:3px solid #fff}.row .signup form button:hover{background:green}.row .signup form .selected{background:green;transition:0.3s ease-in}.row .signup form .box{padding:20px;width:49%;float:left;text-align:center;cursor:pointer;border:3px solid #fff;overflow:hidden}.row .signup form .box.p{margin-right:2%}.row .signup form h2{text-align:center}.row .signup form h4{margin-bottom:0}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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



var SignupComponent = (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userType = 'patient';
        this.isPatient = true;
        this.showForm = true;
        this.enterCode = false;
        this.verified = false;
        this.types = ['doctor', 'patient', 'practice', 'investor'];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.list();
    };
    SignupComponent.prototype.selectUser = function () {
        this.isPatient = !this.isPatient;
        if (this.isPatient) {
            this.userType = "patient";
        }
        else {
            this.userType = "professional";
        }
        console.log(this.userType);
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.userService.signup(this.firstName, this.lastName, this.email, this.userType, this.password)
            .then(function (resultFromApi) {
            _this.firstName = "";
            _this.lastName = "";
            _this.email = "";
            _this.userType = "";
            _this.password = "";
            _this.errorMsg = "";
            _this.enterCode = true;
            _this.showForm = false;
        })
            .catch(function (err) {
            var parsedError = err.json();
            _this.errorMsg = parsedError.message;
        });
    };
    SignupComponent.prototype.verify = function () {
        var _this = this;
        this.userService.verify(this.emailCode)
            .then(function (resultFromApi) {
            _this.emailCode = "";
            _this.errorMsg = "";
            _this.enterCode = false;
            _this.verified = true;
            setTimeout(function () {
                _this.showForm = true;
                _this.verified = false;
            }, 5000);
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            var parsedError = err.json();
            _this.errorMsg = parsedError.message;
        });
    };
    SignupComponent.prototype.list = function () {
        var _this = this;
        this.userService.list()
            .then(function (result) {
            _this.userService.allUsers = result;
        })
            .catch(function (err) {
            var parsedError = err.json();
            _this.errorMsg = parsedError;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

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
    production: false,
    apiBase: 'http://localhost:3000'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map