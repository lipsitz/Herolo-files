(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/video.actions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/video.actions.ts ***!
  \******************************************/
/*! exports provided: ADD_VIDEO, REMOVE_VIDEO, UPDATE_VIDEO, AddVideo, UpdateVideo, RemoveVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_VIDEO", function() { return ADD_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_VIDEO", function() { return REMOVE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_VIDEO", function() { return UPDATE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideo", function() { return AddVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVideo", function() { return UpdateVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveVideo", function() { return RemoveVideo; });
var ADD_VIDEO = '[VIDEO] Add';
var REMOVE_VIDEO = '[VIDEO] Remove';
var UPDATE_VIDEO = '[VIDEO] Update';
var AddVideo = /** @class */ (function () {
    function AddVideo(payload) {
        this.payload = payload;
        this.type = ADD_VIDEO;
    }
    return AddVideo;
}());

var UpdateVideo = /** @class */ (function () {
    function UpdateVideo(payload) {
        this.payload = payload;
        this.type = UPDATE_VIDEO;
    }
    return UpdateVideo;
}());

var RemoveVideo = /** @class */ (function () {
    function RemoveVideo(payload) {
        this.payload = payload;
        this.type = REMOVE_VIDEO;
    }
    return RemoveVideo;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_3__["VideosComponent"] },
    { path: '', redirectTo: '/videos', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'herolo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _videos_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos/video-thumbnail/video-thumbnail.component */ "./src/app/videos/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_omdb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/omdb.service */ "./src/app/services/omdb.service.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _videos_video_edit_modal_video_edit_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videos/video-edit-modal/video-edit-modal.component */ "./src/app/videos/video-edit-modal/video-edit-modal.component.ts");
/* harmony import */ var _videos_video_delete_modal_video_delete_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videos/video-delete-modal/video-delete-modal.component */ "./src/app/videos/video-delete-modal/video-delete-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _videos_video_add_modal_video_add_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./videos/video-add-modal/video-add-modal.component */ "./src/app/videos/video-add-modal/video-add-modal.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_video_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reducers/video.reducer */ "./src/app/reducers/video.reducer.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_4__["VideosComponent"],
                _videos_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["VideoThumbnailComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _videos_video_edit_modal_video_edit_modal_component__WEBPACK_IMPORTED_MODULE_10__["VideoEditModalComponent"],
                _videos_video_delete_modal_video_delete_modal_component__WEBPACK_IMPORTED_MODULE_11__["VideoDeleteModalComponent"],
                _videos_video_add_modal_video_add_modal_component__WEBPACK_IMPORTED_MODULE_13__["VideoAddModalComponent"]
            ],
            imports: [
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot({
                    video: _reducers_video_reducer__WEBPACK_IMPORTED_MODULE_16__["reducer"]
                })
            ],
            providers: [_services_omdb_service__WEBPACK_IMPORTED_MODULE_8__["OmdbService"], _services_time_service__WEBPACK_IMPORTED_MODULE_9__["TimeService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li > a.active { color: #F97924;}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Herolo Cinema</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a [routerLink]=\"['/videos']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">All Videos</a>\n        </li>\n      </ul>\n      <div class=\"navbar-header navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a>By Nir lipsitz</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/reducers/video.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/video.reducer.ts ***!
  \*******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_video_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/video.actions */ "./src/app/actions/video.actions.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_video_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_VIDEO"]:
            return state.concat(action.payload);
        case _actions_video_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_VIDEO"]:
            for (var i = 0; i < state.length; i++) {
                if (state[i].imdbID === action.payload.imdbID) {
                    state.splice(i, 1);
                }
            }
            return state;
        case _actions_video_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_VIDEO"]:
            for (var i = 0; i < state.length; i++) {
                if (state[i].imdbID === action.payload.imdbID) {
                    state[i] = action.payload;
                }
            }
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/omdb.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/omdb.service.ts ***!
  \******************************************/
/*! exports provided: OmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbService", function() { return OmdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.service */ "./src/app/services/store/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OmdbService = /** @class */ (function () {
    function OmdbService(http, store) {
        this.http = http;
        this.store = store;
        this.videos = [];
        this.movieNamesArray = ['The Sum of All Fears', 'Run All Night', 'Frozen', 'The Lion King', 'The Last Samurai', 'The Kids Are All Right', 'Inception', 'All About Eve'];
    }
    OmdbService.prototype.fromApiToStore = function () {
        var _this = this;
        var url = 'https://www.omdbapi.com/?apikey=2b17fbae&t=';
        this.movieNamesArray.forEach(function (title) {
            _this.http.get(url + title).subscribe(function (res) {
                _this.store.addVideoToStore(res);
            });
        });
    };
    OmdbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], OmdbService);
    return OmdbService;
}());



/***/ }),

/***/ "./src/app/services/store/store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_video_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/video.actions */ "./src/app/actions/video.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreService = /** @class */ (function () {
    function StoreService(store) {
        this.store = store;
        this.videos = this.store.select('video');
    }
    StoreService.prototype.updateVideo = function (obj) {
        this.store.dispatch(new _actions_video_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateVideo"](obj));
    };
    StoreService.prototype.removeVideo = function (id) {
        this.store.dispatch(new _actions_video_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveVideo"](id));
    };
    StoreService.prototype.addVideoToStore = function (video) {
        this.store.dispatch(new _actions_video_actions__WEBPACK_IMPORTED_MODULE_2__["AddVideo"](video));
    };
    StoreService.prototype.getAllVideosFromStore = function () { return this.videos; };
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/services/time.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeService = /** @class */ (function () {
    function TimeService(datePipe) {
        this.datePipe = datePipe;
        this.yearsArray = [];
    }
    TimeService.prototype.getYearsArray = function () {
        this.time = this.datePipe.transform(new Date());
        this.yearTime = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.time, 'y');
        this.yearTimeNumber = Number(this.yearTime);
        for (var i = 1900; i <= this.yearTimeNumber; i++) {
            this.yearsArray.unshift(i);
        }
        return this.yearsArray;
    };
    TimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "./src/app/services/title-auth.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/services/title-auth.validator.ts ***!
  \**************************************************/
/*! exports provided: restrictedTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedTitles", function() { return restrictedTitles; });
function restrictedTitles(titleList) {
    return function (control) {
        if (!titleList)
            return null;
        var invalidWords = titleList
            .map(function (title) { return control.value && control.value.includes(title) ? title : null; }).filter(function (title) { return title != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedTitles': invalidWords.join(',') }
            : null;
    };
}


/***/ }),

/***/ "./src/app/videos/video-add-modal/video-add-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/videos/video-add-modal/video-add-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\r\n    float:right;\r\n    color: #E05C65;\r\n    padding-left: 10px;\r\n}\r\n.error input {background-color: #E3C3C5;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-moz-placeholder {color: #999;}\r\n.error :-moz-placeholder {color: #999;}\r\n.error :-ms-input-placeholder {color: #999;}"

/***/ }),

/***/ "./src/app/videos/video-add-modal/video-add-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/videos/video-add-modal/video-add-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <h4 class=\"modal-title\">Add movie to list</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"addVideo(addForm.value)\" autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'error':title.invalid && title.touched}\">\n          <label for=\"title\">Title:</label>\n          <em *ngIf=\"title.invalid && title.dirty && title.errors.restrictedTitles\">\n            this title alerdy exist : {{title.errors.restrictedTitles }}</em>\n          <em *ngIf=\"title.invalid && (title.dirty || mouseOverSubmit)\">required</em>\n          <em *ngIf=\"title.invalid && title.dirty && title.errors.pattern\">Only a-z small letters</em>\n          <input formControlName=\"title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" placeholder=\"title...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':year.invalid && year.dirty}\">\n          <label for=\"year\">Year:</label>\n          <em *ngIf=\"year.invalid && year.dirty \">required</em>\n          <select formControlName=\"year\" name=\"year\" type=\"number\" class=\"form-control\" required placeholder=\"year...\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let year of yearsArray\" value=\"{{year}}\">{{year}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':runtime.invalid && runtime.dirty}\">\n          <label for=\"runtime\">Runtime:</label>\n          <em *ngIf=\"runtime.invalid && (runtime.dirty ||mouseOverSubmit)\">required</em>\n          <input formControlName=\"runtime\" name=\"runtime\" id=\"runtime\" type=\"text\" class=\"form-control\" placeholder=\"runtime...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':genre.invalid && genre.dirty}\">\n          <label for=\"genre\">Genre:</label>\n          <em *ngIf=\"genre.invalid && (genre.dirty ||mouseOverSubmit)\">required</em>\n          <input formControlName=\"genre\" name=\"genre\" id=\"genre\" type=\"text\" class=\"form-control\" placeholder=\"genre...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':director.invalid && director.dirty}\">\n          <label for=\"director\">Director:</label>\n          <em *ngIf=\"director.invalid && (director.dirty || mouseOverSubmit)\">required</em>\n          <input formControlName=\"director\" name=\"director\" id=\"director\" type=\"text\" class=\"form-control\" placeholder=\"director...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':poster.invalid && poster.dirty}\">\n          <label for=\"poster\">Img src:</label>\n          <em *ngIf=\"poster.invalid && poster.dirty  && poster.errors.pattern\">(Must be a png or jpg url)</em>\n          <em *ngIf=\"poster.invalid && poster.dirty\">Required</em>\n          <input formControlName=\"poster\" required pattern=\".*\\/.*.(png|jpg)\" name=\"poster\" id=\"poster\" type=\"text\"\n            class=\"form-control\" placeholder=\"img src...\" />\n        </div>\n        <span (mouseenter)=\"mouseOverSubmit=true\" (mouseleave)=\"mouseOverSubmit=false\">\n          <button type=\"submit\" (click)=\"addVideo(addForm.value)\" [disabled]=\"addForm.invalid\" data-dismiss=\"modal\"\n            class=\"btn btn-success\">Save</button>\n        </span>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      </form>\n\n    </div>"

/***/ }),

/***/ "./src/app/videos/video-add-modal/video-add-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/videos/video-add-modal/video-add-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoAddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAddModalComponent", function() { return VideoAddModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_title_auth_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/title-auth.validator */ "./src/app/services/title-auth.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoAddModalComponent = /** @class */ (function () {
    function VideoAddModalComponent(storeService, timeService) {
        this.storeService = storeService;
        this.timeService = timeService;
        this.titleList = [];
        this.counter = 0;
        this.yearsArray = this.timeService.getYearsArray();
        this.initForm();
    }
    VideoAddModalComponent.prototype.ngOnInit = function () {
        this.getTitlesFormStore();
    };
    VideoAddModalComponent.prototype.initForm = function () {
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z ]*'), Object(_services_title_auth_validator__WEBPACK_IMPORTED_MODULE_4__["restrictedTitles"])(this.titleList)]);
        this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.runtime = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.genre = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.director = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.poster = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: this.title,
            year: this.year,
            runtime: this.runtime,
            director: this.director,
            genre: this.genre,
            poster: this.poster
        });
    };
    VideoAddModalComponent.prototype.getTitlesFormStore = function () {
        var _this = this;
        this.storeService.getAllVideosFromStore().subscribe(function (res) {
            if (res.length) {
                _this.titleList.push(res[_this.counter].Title.toLowerCase());
                ++_this.counter;
            }
        });
    };
    VideoAddModalComponent.prototype.addVideo = function (formValue) {
        var _this = this;
        var video = {
            imdbID: 'tt' + new Date().getTime(),
            Title: formValue.title,
            Year: formValue.year,
            Runtime: formValue.runtime,
            Director: formValue.director,
            Genre: formValue.genre,
            Type: 'movie',
            Poster: formValue.poster
        };
        this.storeService.addVideoToStore(video);
        setTimeout(function () {
            _this.addForm.reset();
            _this.titleList.push(formValue.Title);
        });
    };
    VideoAddModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-add-modal',
            template: __webpack_require__(/*! ./video-add-modal.component.html */ "./src/app/videos/video-add-modal/video-add-modal.component.html"),
            styles: [__webpack_require__(/*! ./video-add-modal.component.css */ "./src/app/videos/video-add-modal/video-add-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]])
    ], VideoAddModalComponent);
    return VideoAddModalComponent;
}());



/***/ }),

/***/ "./src/app/videos/video-delete-modal/video-delete-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/videos/video-delete-modal/video-delete-modal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/videos/video-delete-modal/video-delete-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/videos/video-delete-modal/video-delete-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <h4 class=\"modal-title\">Delete Video</h4>\n    </div>\n    <div class=\"modal-body\">\n      <h5> Delete {{video.Title}} ? </h5>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" (click)=\"deleteVideo(video)\" class=\"btn btn-danger\" data-dismiss=\"modal\">Delete</button>\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\n    </div>"

/***/ }),

/***/ "./src/app/videos/video-delete-modal/video-delete-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/videos/video-delete-modal/video-delete-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: VideoDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDeleteModalComponent", function() { return VideoDeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoDeleteModalComponent = /** @class */ (function () {
    function VideoDeleteModalComponent(storeService) {
        this.storeService = storeService;
    }
    VideoDeleteModalComponent.prototype.ngOnInit = function () { };
    VideoDeleteModalComponent.prototype.deleteVideo = function (video) {
        this.storeService.removeVideo(video);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoDeleteModalComponent.prototype, "video", void 0);
    VideoDeleteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-delete-modal',
            template: __webpack_require__(/*! ./video-delete-modal.component.html */ "./src/app/videos/video-delete-modal/video-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./video-delete-modal.component.css */ "./src/app/videos/video-delete-modal/video-delete-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]])
    ], VideoDeleteModalComponent);
    return VideoDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/videos/video-edit-modal/video-edit-modal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/videos/video-edit-modal/video-edit-modal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\r\n    float:right;\r\n    color: #E05C65;\r\n    padding-left: 10px;\r\n}\r\n.error input {background-color: #E3C3C5;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-moz-placeholder {color: #999;}\r\n.error :-moz-placeholder {color: #999;}\r\n.error :-ms-input-placeholder {color: #999;}\r\n"

/***/ }),

/***/ "./src/app/videos/video-edit-modal/video-edit-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/videos/video-edit-modal/video-edit-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <!-- Modal content-->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <h4 class=\"modal-title\">Edit : {{video.Title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <span class=\"pull-right\">ID :{{video.imdbID}}</span>\n      <p>Name :{{video.Title | titlecase}}</p>\n      <p>Year :{{video.Year}} </p>\n      <p>Runtime :{{video.Runtime | titlecase}}</p>\n      <p>Genre :{{video.Genre | titlecase}}</p>\n      <p>Director :{{video.Director | titlecase}}</p>\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"editVideo(editForm.value)\" autocomplete=\"off\">\n        <div class=\"form-group \" [ngClass]=\"{'error':title.invalid && title.dirty}\">\n          <label for=\"title\">Title:</label>\n          <em *ngIf=\"title.invalid && title.dirty && title.errors.restrictedTitles\">\n            this title alerdy exist : {{title.errors.restrictedTitles }}</em>\n          <em *ngIf=\"title.invalid && (title.dirty || mouseOverSubmit)\">Required</em>\n          <em *ngIf=\"title.invalid && title.dirty && title.errors.pattern\">Only a-z small letters</em>\n          <input formControlName=\"title\" id=\"title\" type=\"text\" class=\"form-control\" placeholder=\"title...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':year.invalid && year.dirty}\">\n          <label for=\"year\">Year:</label>\n          <em *ngIf=\"year.invalid && year.dirty\">Required</em>\n          <select formControlName=\"year\" name=\"year\" class=\"form-control\" required placeholder=\"year...\">\n            <option *ngFor=\"let year of yearsArray\" value=\"{{year}}\">{{year}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':runtime.invalid && runtime.dirty}\">\n          <label for=\"runtime\">Runtime:</label>\n          <em *ngIf=\"runtime.invalid && runtime.dirty\">Required</em>\n          <input formControlName=\"runtime\" id=\"runtime\" type=\"text\" class=\"form-control\" placeholder=\"runtime...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':director.invalid && director.dirty}\">\n          <label for=\"director\">Director:</label>\n          <em *ngIf=\"director.invalid && director.dirty\">Required</em>\n          <input formControlName=\"director\" id=\"director\" type=\"text\" class=\"form-control\" placeholder=\"director...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':genre.invalid && genre.dirty}\">\n          <label for=\"genre\">Genre:</label>\n          <em *ngIf=\"genre.invalid && genre.dirty\">Required</em>\n          <input formControlName=\"genre\" id=\"genre\" type=\"text\" class=\"form-control\" placeholder=\"genre...\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'error':poster.invalid && poster.dirty}\">\n          <label for=\"poster\">Poster:</label>\n          <em *ngIf=\"poster.invalid && poster.dirty  && poster.errors.pattern\">(Must be a png or jpg url)</em>\n          <em *ngIf=\"poster.invalid && poster.dirty\">Required</em>\n          <input formControlName=\"poster\" required pattern=\".*\\/.*.(png|jpg)\" id=\"poster\" type=\"text\" class=\"form-control\"\n            placeholder=\"poster...\" />\n        </div>\n        <span (mouseenter)=\"mouseOverSubmit=true\" (mouseleave)=\"mouseOverSubmit=false\">\n          <button type=\"submit\" (click)=\"editVideo(editForm.value)\" [disabled]=\"editForm.invalid\" class=\"btn btn-primary\"\n            data-dismiss=\"modal\">Save</button>\n        </span>\n\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      </form>\n\n    </div>"

/***/ }),

/***/ "./src/app/videos/video-edit-modal/video-edit-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/videos/video-edit-modal/video-edit-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: VideoEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditModalComponent", function() { return VideoEditModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _services_title_auth_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/title-auth.validator */ "./src/app/services/title-auth.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoEditModalComponent = /** @class */ (function () {
    function VideoEditModalComponent(timeService, storeService) {
        this.timeService = timeService;
        this.storeService = storeService;
        this.titleList = [];
        this.counter = 0;
        this.yearsArray = this.timeService.getYearsArray();
        this.initForm();
    }
    VideoEditModalComponent.prototype.ngOnInit = function () {
        this.getTitlesFormStore();
    };
    VideoEditModalComponent.prototype.initForm = function () {
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z ]*'), Object(_services_title_auth_validator__WEBPACK_IMPORTED_MODULE_4__["restrictedTitles"])(this.titleList)]);
        this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.runtime = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.genre = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.director = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.poster = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: this.title,
            year: this.year,
            runtime: this.runtime,
            director: this.director,
            genre: this.genre,
            poster: this.poster
        });
    };
    VideoEditModalComponent.prototype.getTitlesFormStore = function () {
        var _this = this;
        this.storeService.getAllVideosFromStore().subscribe(function (res) {
            if (res.length) {
                _this.titleList.push(res[_this.counter].Title.toLowerCase());
                ++_this.counter;
            }
        });
    };
    VideoEditModalComponent.prototype.editVideo = function (formValue) {
        var _this = this;
        var video = {
            imdbID: this.video.imdbID,
            Title: formValue.title,
            Year: formValue.year,
            Runtime: formValue.runtime,
            Director: formValue.director,
            Genre: formValue.genre,
            Type: this.video.Type,
            Poster: formValue.poster
        };
        this.storeService.updateVideo(video);
        setTimeout(function () {
            _this.editForm.reset();
            _this.titleList.push(formValue.Title);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoEditModalComponent.prototype, "video", void 0);
    VideoEditModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-edit-modal',
            template: __webpack_require__(/*! ./video-edit-modal.component.html */ "./src/app/videos/video-edit-modal/video-edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./video-edit-modal.component.css */ "./src/app/videos/video-edit-modal/video-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"], _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]])
    ], VideoEditModalComponent);
    return VideoEditModalComponent;
}());



/***/ }),

/***/ "./src/app/videos/video-thumbnail/video-thumbnail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/videos/video-thumbnail/video-thumbnail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/videos/video-thumbnail/video-thumbnail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/videos/video-thumbnail/video-thumbnail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4>{{video.Title | titlecase}}</h4>\n</div>\n<img style=\"width: 215px; height: 280px;\" src=\"{{video.Poster}}\" alt=\"{{video.Poster}}\">\n<div>\n    {{video.Type | titlecase}}<br>\n    {{video.Year}}<br>\n</div>"

/***/ }),

/***/ "./src/app/videos/video-thumbnail/video-thumbnail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/videos/video-thumbnail/video-thumbnail.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoThumbnailComponent", function() { return VideoThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoThumbnailComponent = /** @class */ (function () {
    function VideoThumbnailComponent() {
    }
    VideoThumbnailComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoThumbnailComponent.prototype, "video", void 0);
    VideoThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-thumbnail',
            template: __webpack_require__(/*! ./video-thumbnail.component.html */ "./src/app/videos/video-thumbnail/video-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./video-thumbnail.component.css */ "./src/app/videos/video-thumbnail/video-thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoThumbnailComponent);
    return VideoThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.css":
/*!*********************************************!*\
  !*** ./src/app/videos/videos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .thumbnail {\r\n        min-height: 300px; max-width: 280px;\r\n    }\r\n    .pad-left {\r\n        margin-left: 10px;\r\n    }\r\n    .well div {\r\n       color: #bbb\r\n    };\r\n    img {\r\n        border: 0;\r\n        width: 215px;\r\n        height: 280px;\r\n        display: inline-block;\r\n        position: relative;\r\n    }\r\n    .fixthebug {\r\n        float: left;\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <h1>HEROLO Cinema Videos\n            <button data-toggle=\"modal\" data-target=\"#addModal\" class=\"btn btn-success pull-right\">Add Movie To list</button>\n        </h1>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div *ngFor=\"let video of videos\" class=\"fixthebug\">\n            <div class=\"well hoverwell thumbnail \">\n                <app-video-thumbnail [video]=video></app-video-thumbnail>\n                <button data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"modalDataFunc(video)\" class=\"btn btn-primary\">\n                    Edit</button>\n                <button data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"modalDataFunc(video)\" class=\"btn btn-danger pull-right\">\n                    Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"editModal\" class=\"modal fade\" role=\"dialog\">\n    <app-video-edit-modal [video]=modalData></app-video-edit-modal>\n</div>\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n    <app-video-delete-modal [video]=modalData></app-video-delete-modal>\n</div>\n<div id=\"addModal\" class=\"modal fade\" role=\"dialog\">\n    <app-video-add-modal></app-video-add-modal>\n</div>"

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _services_omdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/omdb.service */ "./src/app/services/omdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosComponent = /** @class */ (function () {
    function VideosComponent(storeService, omdbService) {
        this.storeService = storeService;
        this.omdbService = omdbService;
        this.videos = [];
        this.modalData = {
            Title: '',
            Year: '',
            imdbID: '',
            Poster: '',
            Type: 'movie',
            Genre: '',
            Director: '',
            Runtime: ''
        };
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.omdbService.fromApiToStore();
        this.storeService.getAllVideosFromStore().subscribe(function (res) {
            _this.videos = res;
        });
    };
    VideosComponent.prototype.modalDataFunc = function (video) {
        this.modalData = video;
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"], _services_omdb_service__WEBPACK_IMPORTED_MODULE_2__["OmdbService"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\herolo1\herolo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map