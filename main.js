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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-images-module></app-images-module>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular7';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/images.module */ "./src/app/images/images.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"].forRoot({ tag: 'kitten' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/images/images.module.ts":
/*!*****************************************!*\
  !*** ./src/app/images/images.module.ts ***!
  \*****************************************/
/*! exports provided: ImagesModuleComponent, ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModuleComponent", function() { return ImagesModuleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images/images.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _images_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/image-details/image-details.component */ "./src/app/images/images/image-details/image-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");












var ImagesModuleComponent = /** @class */ (function () {
    function ImagesModuleComponent() {
    }
    ImagesModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images-module',
            template: '<router-outlet></router-outlet>'
        })
    ], ImagesModuleComponent);
    return ImagesModuleComponent;
}());

var routes = [
    {
        path: '',
        component: ImagesModuleComponent,
        children: [
            { path: '', component: _images_images_component__WEBPACK_IMPORTED_MODULE_3__["ImagesComponent"] },
            { path: ':id', component: _images_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_5__["ImageDetailsComponent"] }
        ]
    }
];
var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule_1 = ImagesModule;
    ImagesModule.forRoot = function (config) {
        return {
            ngModule: ImagesModule_1,
            providers: [
                _images_service__WEBPACK_IMPORTED_MODULE_8__["ImagesService"],
                {
                    provide: 'config',
                    useValue: config
                }
            ]
        };
    };
    var ImagesModule_1;
    ImagesModule = ImagesModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ImagesModuleComponent,
                _images_images_component__WEBPACK_IMPORTED_MODULE_3__["ImagesComponent"],
                _images_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_5__["ImageDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientJsonpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ImagesModuleComponent]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ }),

/***/ "./src/app/images/images.service.ts":
/*!******************************************!*\
  !*** ./src/app/images/images.service.ts ***!
  \******************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ImagesService = /** @class */ (function () {
    function ImagesService(http, config) {
        this.http = http;
        this.config = config;
    }
    ImagesService.prototype.getList = function (tag) {
        var _this = this;
        if (tag === void 0) { tag = this.config.tag; }
        if (!this.imagesList || tag !== this.tag) {
            this.tag = tag;
            return this.http.jsonp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "?tags=" + tag + "&format=json", 'jsoncallback')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
                return _this.imagesList = data.items.map(function (item) {
                    return Object.assign(item, { id: item.media.m.split('/').pop() });
                });
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.imagesList);
        }
    };
    ImagesService.prototype.getImage = function (id, tag) {
        if (!this.imagesList) {
            return this.getList(tag)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.find(function (item) { return item.id === id; }); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.imagesList.find(function (item) { return item.id === id; }));
        }
    };
    ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('config')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/images/images/image-details/image-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/images/images/image-details/image-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  width: 500px;\n}\n\n.mat-card-content {\n  margin-top: 20px;\n}\n\n.mat-chip {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2VzL2ltYWdlcy9pbWFnZS1kZXRhaWxzL2ltYWdlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9pbWFnZXMvaW1hZ2VzL2ltYWdlLWRldGFpbHMvaW1hZ2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtY2hpcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/images/images/image-details/image-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/images/images/image-details/image-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\"\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"0.5%\"\n     fxLayoutAlign=\"center\">\n\n  <mat-card class=\"mat-card\"\n            *ngIf=\"image\">\n    <mat-card-header>\n      <mat-card-title>Title: {{image.title}}</mat-card-title>\n      <mat-card-subtitle>Author: {{image.author}}</mat-card-subtitle>\n      <mat-card-subtitle>Published: {{image.published | date}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"mat-card-content\">\n      <img alt=\"{{image.title}}\"\n           title=\"{{image.title}}\"\n           mat-card-image\n           [src]=\"image.media.m\">\n    </mat-card-content>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tag of image.tags.split(' ')\"\n                class=\"mat-chip\"\n                [routerLink]=\"['/']\"\n                [queryParams]=\"{tag: tag}\">{{tag}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/images/images/image-details/image-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/images/images/image-details/image-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImageDetailsComponent = /** @class */ (function () {
    function ImageDetailsComponent(route, imagesService) {
        this.route = route;
        this.imagesService = imagesService;
    }
    ImageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.route.params.subscribe(function (params) {
                _this.imagesService.getImage(params.id, queryParams.tag)
                    .subscribe(function (image) { return _this.image = image; });
            });
        });
    };
    ImageDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-details',
            template: __webpack_require__(/*! ./image-details.component.html */ "./src/app/images/images/image-details/image-details.component.html"),
            styles: [__webpack_require__(/*! ./image-details.component.css */ "./src/app/images/images/image-details/image-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]])
    ], ImageDetailsComponent);
    return ImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/images/images/images.component.css":
/*!****************************************************!*\
  !*** ./src/app/images/images/images.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/images/images/images.component.html":
/*!*****************************************************!*\
  !*** ./src/app/images/images/images.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search-form\">\n  <input matInput\n         #searchTag\n         (keyup.enter)=\"getImages(searchTag.value)\"\n         placeholder=\"Search Tag\"\n         type=\"text\">\n</mat-form-field>\n<button mat-raised-button\n        (click)=\"getImages(searchTag.value)\"\n        color=\"primary\">Search\n</button>\n<br>\n\n<div fxLayout=\"row wrap\"\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"0.5%\"\n     fxLayoutAlign=\"center\">\n  <mat-card class=\"card-picture\"\n            *ngFor=\"let image of imagesList\">\n    <a [routerLink]=\"[image.id]\"\n       [queryParams]=\"{tag: tag}\">\n      <img alt=\"{{image.title}}\"\n           mat-card-image\n           title=\"{{image.author}}: {{image.title}}\"\n           [src]=\"image.media.m\">\n    </a>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/images/images/images.component.ts":
/*!***************************************************!*\
  !*** ./src/app/images/images/images.component.ts ***!
  \***************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(route, router, imagesService) {
        this.route = route;
        this.router = router;
        this.imagesService = imagesService;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.tag = params.tag;
            _this.imagesService.getList(_this.tag)
                .subscribe(function (data) { return _this.imagesList = data; });
        });
    };
    ImagesComponent.prototype.getImages = function (tag) {
        this.router.navigate([''], { queryParams: { tag: tag } });
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images/images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]])
    ], ImagesComponent);
    return ImagesComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'https://api.flickr.com/services/feeds/photos_public.gne'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Projects/angular-flickr/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map