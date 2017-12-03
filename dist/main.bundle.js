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

module.exports = "<router-outlet></router-outlet>\n"

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subroute_subroute_component__ = __webpack_require__("../../../../../src/app/subroute/subroute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__subroute_subroute_component__["a" /* SubrouteComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subroute_subroute_component__ = __webpack_require__("../../../../../src/app/subroute/subroute.component.ts");


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'subroute', component: __WEBPACK_IMPORTED_MODULE_1__subroute_subroute_component__["a" /* SubrouteComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#timeline {\r\n  margin: 1em auto;\r\n}\r\n\r\nimg {\r\n  border-radius: 50%;\r\n}\r\n\r\n.post {\r\n  padding: 7px;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.post q {\r\n  display: block;\r\n}\r\n\r\n#new_post {\r\n   margin: 1em auto;\r\n  /*padding: 7px;*/\r\n  /*border-bottom: #e8e8e8 solid 1px;*/\r\n}\r\n.default {\r\n  width: 634px;\r\n  height: 914px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.combined-shape-copy {\r\n  width: 91%;\r\n  margin-left: 75px;\r\n  height: 29%;\r\n  border-radius: 7px;\r\n  background-color: #f6f6f6;\r\n}\r\n.combined-shape-reply {\r\n  width: 91%;\r\n  margin-bottom: 15px;\r\n  height: 29%;\r\n  border-radius: 7px;\r\n  float: left;\r\n  background-color: #00c397;\r\n}\r\n\r\n.twitter-comment {\r\n  width: 438px;\r\n  height: 42px;\r\n  font-family: Roboto;\r\n  font-size: 15px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n  color: #092828;\r\n}\r\n\r\n.user-styles {\r\n  width: 143px;\r\n  height: 13px;\r\n  font-family: Roboto;\r\n  font-size: 11px;\r\n  color: #092828;\r\n  display: inline;\r\n}\r\n\r\n.user-avatar {\r\n  width: 48px;\r\n  height: 48px;\r\n  float: left;\r\n  /*margin-left: 15px;*/\r\n  margin-right: 38px;\r\n\r\n}\r\n\r\n.current-user-avatar {\r\n  width: 48px;\r\n  height: 48px;\r\n  background-color: #092828;\r\n  float: right;\r\n  border-radius: 50%;\r\n  margin-bottom: 19;\r\n  /*margin-left: 15px;*/\r\n  /*margin-left: 38px;*/\r\n}\r\n\r\n.user-timestamp {\r\n  font-family: Roboto;\r\n  float: right;\r\n  color: #092828;\r\n  font-size: 11px;\r\n  text-align: right;\r\n}\r\n\r\n.current-user-timestamp {\r\n  font-family: Roboto;\r\n  float: right;\r\n  color: #092828;\r\n  font-size: 11px;\r\n  margin-top: -13px;\r\n  text-align: right;\r\n}\r\n\r\nimg {\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\n.verified-user-copy {\r\n  width: 14px;\r\n  height: 14px;\r\n  font-family: MaterialIcons;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  color: #092828;\r\n}\r\n.line {\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #00c397;\r\n  border: solid 1px #00c397;\r\n}\r\n\r\n.as-type-the-number {\r\n  width: 90%;\r\n  height: 18px;\r\n  font-family: Roboto;\r\n  font-size: 15px;\r\n  text-align: left;\r\n  color: #092828;\r\n}\r\n\r\n/*hr {*/\r\n  /**/\r\n/*}*/\r\n\r\n\r\n.user-reply-bubble {\r\n  width: 100%;\r\n  height: 42px;\r\n  font-family: Roboto;\r\n  font-size: 15px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n  color: #ffffff;\r\n  padding: 5px;\r\n}\r\n\r\n.message-padding {\r\n  padding: 5px;\r\n}\r\n\r\n.fill-13-copy {\r\n  width: 20.7px;\r\n  height: 17.5px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.message-box { width: 100% }\r\n.character-counter { width: 15%; float: left; }\r\n.form-field { width: 70%; float: left; }\r\n.send-section { width: 15%; float: left;}\r\n\r\n#send-button {\r\n  float: right;\r\n  width: auto;\r\n  padding-left: 40px;\r\n  height: 20px;\r\n  font-family: MaterialIcons;\r\n  font-size: 20px;\r\n  text-align: left;\r\n  color: #00c397;\r\n}\r\n\r\n.char-color {\r\n  color: #00c397;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div id=\"timeline\" *ngFor=\"let post of posts; let i = index\">\r\n    \r\n      <template [ngIf]=\"post.user === 1\">\r\n        <div class=\"user-styles\">{{users[1].real_name}} - @{{users[1].real_name}}</div>\r\n      </template>\r\n      <template [ngIf]=\"post.user === 2\">\r\n        <div class=\"user-styles\">{{users[2].real_name}} - @{{users[2].username}}</div>\r\n      </template>\r\n      <template [ngIf]=\"post.user === 3\">\r\n        <div class=\"user-styles\">{{users[3].real_name}} - @{{users[3].username}}</div>\r\n      </template>\r\n      <div class=\"user-timestamp\">{{post.ts | date: shortTime}}</div>\r\n      <template [ngIf]=\"post.user === 1\"><div class=\"user-avatar\"><img [src]=\"marymeeker\"></div></template>\r\n      <template [ngIf]=\"post.user === 2\"><div class=\"user-avatar\"><img class=\"circle\"[src]=\"conanOBrien\"></div></template>\r\n      <template [ngIf]=\"post.user === 3\"><div class=\"user-avatar\"><img [src]=\"baratunde\"></div></template>\r\n    \r\n    \r\n      <div class=\"combined-shape-copy\">\r\n       <p class=\"twitter-comment\">{{post.message}}</p>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <!-- Logged In user-->\r\n    \r\n    <div id=\"new_post\" *ngFor=\"let newPost of newPosts; let i = index\">\r\n      <div class=\"current-user-avatar\"><img [src]=\"better\"></div>\r\n      <div class=\"combined-shape-reply\">\r\n        <div class=\"current-user-timestamp\"><p>{{newPost.ts | date: full}}</p></div>\r\n      <div class=\"message-padding\"><p>\r\n          {{newPost.message}}</p>\r\n      </div>\r\n    \r\n      </div>\r\n    </div>\r\n    \r\n    <!-- This is the input form line -->\r\n    <hr class=\"line\">\r\n    <div class=\"message-box\">\r\n      <div class=\"character-counter\">\r\n        <input class=\"char-color\"\r\n               [(ngModel)]=\"charsRemaining\"\r\n               [ngClass]=\"{red:isNegative()}\" mdInput>\r\n      </div>\r\n      <div class=\"form-field\"> <md-form-field  class=\"as-type-the-number\">\r\n        <input (keyup)=\"onKey($event, comment.value)\"\r\n          #comment mdInput>\r\n        <!--<input #comment required minLength = 1 name=\"new_post_text\" mdInput>-->\r\n      </md-form-field></div>\r\n      <div class=\"send-section\"><span [attr.disabled]=\"disabled? '':null \" id=\"send-button\" (click)=\"add(comment.value); comment.value='' \"><i class=\"material-icons\">send</i></span></div>\r\n      <!--<span class=\"send-button\" (click)=\"add()\"><i class=\"material-icons\">send</i></span>-->\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERS */
/* unused harmony export newMessages */
/* unused harmony export POSTS */
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

var USERS = {
    '1': {
        username: 'marymeeker',
        real_name: 'Mary Meeker',
        verified: true
    },
    '2': {
        username: 'ConanOBrien',
        real_name: 'Conan O\' Brien',
        verified: true
    },
    '3': {
        username: 'baratunde',
        real_name: 'Baratunde',
        verified: false
    }
};
var newMessages = {
    id: 9999999999,
    user: 3,
    reply_to: 9999999999,
    message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
    ts: 1478942943
};
var POSTS = [
    {
        id: 2374237842,
        user: 1,
        message: 'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.',
        ts: 1337774582
    },
    {
        id: 2374272076,
        user: 2,
        message: 'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.',
        ts: 1337968739
    },
    {
        id: 4545435344,
        user: 3,
        message: 'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg',
        ts: 1461607139
    },
    {
        id: 4629293242,
        user: 2,
        reply_to: 4545435344,
        message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
        ts: 1478942943
    }
];
var HomeComponent = (function () {
    function HomeComponent() {
        this.values = '';
        this.newPosts = [];
        this.users = USERS;
        this.posts = POSTS;
        this.baratunde = '/assets/baratunde.jpg';
        this.conanOBrien = '/assets/ConanOBrien.jpg';
        this.marymeeker = '/assets/marymeeker.jpg';
        this.better = '/assets/better-icon.svg';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.newPosts = [];
        this.numberOfInputs = 0;
        this.charLimit = 100;
        this.charsRemaining;
        console.log(this.users);
        // for (var i = 0; i < posts.length; i++) {
        //   var post = posts[i];
        //   var timeline;
        //   var frag = document.createDocumentFragment();
        //   var el = document.createElement('div');
        //   el.classList.add('post');
        //   el.innerHTML = '<div class="post"><q>' + post.message + '</q><cite>' + post.user + '</cite>';
        //   frag.appendChild(el);
        //   timeline.appendChild(frag);
        // }
        // id: 9999999999,
        //   user: 3,
        //   reply_to: 9999999999,
        //   message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
        //   ts: 1478942943
    };
    //   interface UserMessage {
    //   id: number;
    //   user: number;
    //   reply_to: number;
    //   message: string;
    //   ts: number;
    //   current_id;
    // }
    HomeComponent.prototype.add = function (comment) {
        // I know there is a cleaner way of doing this my apologies.
        var newObjectMessage = {
            id: 0,
            user: 0,
            reply_to: 0,
            message: '',
            ts: 0
        };
        var checkMessageString = comment.length;
        console.log(checkMessageString);
        if (checkMessageString !== 0 && checkMessageString < 100) {
            newObjectMessage.id = 51132131231;
            newObjectMessage.user = 7;
            newObjectMessage.reply_to = 3;
            newObjectMessage.message = comment;
            newObjectMessage.ts = Date.now();
            this.newPosts.push(newObjectMessage);
            console.log(this.newPosts);
            console.log(newObjectMessage);
        }
        else {
            console.log("Empty messages or messages over 100 Chars are not allowed!!!");
        }
    };
    HomeComponent.prototype.onKey = function (event, value) {
        // console.log(event);
        // console.log(value.length);
        var numberOfInputs = value.length;
        this.charsRemaining = this.charLimit - numberOfInputs;
        // console.log( this.charsRemaining);
        console.log(this.isNegative());
        this.isNegative();
        return;
    };
    HomeComponent.prototype.isNegative = function () {
        var isNegNum = this.charsRemaining;
        if (isNegNum <= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], HomeComponent.prototype, "charsRemaining", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/subroute/subroute.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subroute/subroute.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>This is a sub route</h1>"

/***/ }),

/***/ "../../../../../src/app/subroute/subroute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubrouteComponent; });
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

var SubrouteComponent = (function () {
    function SubrouteComponent() {
    }
    SubrouteComponent.prototype.ngOnInit = function () {
    };
    return SubrouteComponent;
}());
SubrouteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-subroute',
        template: __webpack_require__("../../../../../src/app/subroute/subroute.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subroute/subroute.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubrouteComponent);

//# sourceMappingURL=subroute.component.js.map

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