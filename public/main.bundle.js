webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n  background-color: darkolivegreen;\n  color: #FFF;\n}\n\n.main-toolbar {\n  position: relative;\n  z-index: 2;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"main-toolbar\">\n  <span>{{title}}</span>\n</mat-toolbar>\n\n<mat-card>\n  <router-outlet></router-outlet>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function AppComponent() {
        this.title = 'Design a check list';
    }
    ;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__audit_type_list_audit_type_list_component__ = __webpack_require__("./src/app/audit-type-list/audit-type-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__audit_type_detail_audit_type_detail_component__ = __webpack_require__("./src/app/audit-type-detail/audit-type-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__available_components_available_components_component__ = __webpack_require__("./src/app/available-components/available-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jsonapi__ = __webpack_require__("./node_modules/angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_datastore__ = __webpack_require__("./src/services/datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__audit_type_edit_audit_type_edit_component__ = __webpack_require__("./src/app/audit-type-edit/audit-type-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'audit_type/:id', component: __WEBPACK_IMPORTED_MODULE_9__audit_type_detail_audit_type_detail_component__["a" /* AuditTypeDetailComponent */] },
    {
        path: 'audit_types',
        component: __WEBPACK_IMPORTED_MODULE_8__audit_type_list_audit_type_list_component__["a" /* AuditTypeListComponent */],
        data: { title: 'List of Audit Types' }
    },
    { path: '',
        redirectTo: '/audit_types',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__audit_type_list_audit_type_list_component__["a" /* AuditTypeListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__audit_type_detail_audit_type_detail_component__["a" /* AuditTypeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__available_components_available_components_component__["a" /* AvailableComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__audit_type_edit_audit_type_edit_component__["a" /* AuditTypeEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__audit_type_edit_audit_type_edit_component__["a" /* AuditTypeEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_jsonapi__["JsonApiModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes // ,
                // { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_datastore__["a" /* Datastore */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audit-type-detail/audit-type-detail.component.css":
/***/ (function(module, exports) {

module.exports = "\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\nul.container {\n  margin: 0;\n  padding: 0;\n}\n.ex-moved {\n  border-right: 3px solid orangered;\n}\n.ex-over {\n  color: dodgerblue;\n}\n.available_component_types {\n  text-align: left;\n  padding-left: 2em;\n}\n.dragthing {\n  list-style: none;\n}\n.dragthing mat-icon {\n}\n.dragthing p {\n  display: inline;\n  padding-left: 0.25em;\n  color: dodgerblue;\n}\np {\n  color: dodgerblue;\n  text-align: left;\n  padding-top: 0;\n  margin-top: 0;\n}\nmat-grid-tile > figure.mat-figure {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n  color: purple;\n}\nul.destination {\n  border-left: 1px dotted dodgerblue;\n}\n.mat-grid-tile .mat-figure {\n  color: orange;\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n}\n.check_list_title  {\n  text-align: left;\n  position: absolute;\n  left: 5px;\n  color: dodgerblue;\n}\n"

/***/ }),

/***/ "./src/app/audit-type-detail/audit-type-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"100px\" class=\"dom\">\n  <mat-grid-tile>\n    <div *ngIf=\"audit_type\" class=\"check_list_title\">\n      <h2>{{ audit_type.title }}</h2>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"accent\" routerLink=\"/audit_types\">Add</button>\n      <button mat-raised-button color=\"primary\" routerLink=\"/audit_types\">Back</button>\n      <button mat-raised-button color=\"primary\" (click)=\"saveChanges()\">Save</button>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list>\n\n\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n\n  <div fxFlex=\"20%\">\n    <p>Drag items from this list over to the report on the right</p>\n    <ul class='container available_component_types ' dragula='basket' [dragulaModel]=\"available_component_types\">\n      <li *ngFor=\"let available_component_type of available_component_types\" class=\"dragthing\">\n        <p>\n          <mat-icon class=\"component-icon\">{{datastore.iconName(available_component_type.title)}}</mat-icon>\n        </p>\n        <p>{{available_component_type.title}}</p>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"audit_type\" fxFlex=\"80%\">\n    <ul class='container destination'  dragula='basket' [dragulaModel]=\"audit_type.audit_type_components\" >\n      <li *ngFor=\"let component of audit_type.audit_type_components\" class=\"dragthing\">\n        <app-audit-type-edit [audit_type_component]=component></app-audit-type-edit>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/audit-type-detail/audit-type-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTypeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_audit_type_model__ = __webpack_require__("./src/models/audit_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datastore__ = __webpack_require__("./src/services/datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_available_component_type_model__ = __webpack_require__("./src/models/available_component_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_audit_type_component_model__ = __webpack_require__("./src/models/audit_type_component.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuditTypeDetailComponent = (function () {
    function AuditTypeDetailComponent(datastore, route, dragulaService) {
        this.datastore = datastore;
        this.dragulaService = dragulaService;
        this.audit_type_id = route.snapshot.params['id'];
        this.route = route;
        this.dragularService = dragulaService;
        this.dragulaService.setOptions('basket', {
            accepts: function (el, target, source, sibling) {
                return (target.className.includes('destination'));
            }
        });
        // Get the id from the route, fetch the info about this audit_type
        this.getAuditType(this.audit_type_id);
        this.getAvailableComponents();
    }
    AuditTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        this.dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        this.dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        this.dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    };
    AuditTypeDetailComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('basket');
    };
    AuditTypeDetailComponent.prototype.getAuditType = function (id) {
        var _this = this;
        this.datastore.findRecord(__WEBPACK_IMPORTED_MODULE_0__models_audit_type_model__["a" /* AuditType */], id, { include: 'audit_type_components', sort: 'position' }).subscribe(function (audit_type) {
            _this.audit_type = audit_type;
            _this.sortByPosition();
        });
    };
    AuditTypeDetailComponent.prototype.sortByPosition = function () {
        this.audit_type.audit_type_components = this.audit_type.audit_type_components.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    AuditTypeDetailComponent.prototype.getAvailableComponents = function () {
        var _this = this;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_5__models_available_component_type_model__["a" /* AvailableComponentTypes */], {}).subscribe(function (available_component_types) {
            var newOnes = [];
            for (var _i = 0, _a = available_component_types.getModels(); _i < _a.length; _i++) {
                var type = _a[_i];
                var newType = _this.datastore.createRecord(__WEBPACK_IMPORTED_MODULE_6__models_audit_type_component_model__["a" /* AuditTypeComponent */], {
                    title: type.title,
                    help_text: 'know only this',
                    position: 999,
                    audit_type: _this.audit_type,
                    available_component_type: type,
                    name_of_component_type: type.title
                });
                /* this.audit_type is not in scope */
                newOnes.push(newType);
            }
            _this.available_component_types = newOnes;
        });
    };
    /* Update the positions of backing objects and store the changes */
    AuditTypeDetailComponent.prototype.saveChanges = function () {
        this.reorderComponents();
    };
    AuditTypeDetailComponent.prototype.reorderComponents = function () {
        for (var item in this.audit_type.audit_type_components) {
            this.audit_type.audit_type_components[item].position = item;
            this.audit_type.audit_type_components[item].audit_type = this.audit_type;
            this.audit_type.audit_type_components[item].save().subscribe(function (result) {
            }, function (result) {
                console.log('Failed to save a position');
            });
        }
    };
    // Dragular functions to show which element has moved
    AuditTypeDetailComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    AuditTypeDetailComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    AuditTypeDetailComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    AuditTypeDetailComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        this.removeClass(e, 'ex-moved');
    };
    AuditTypeDetailComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        /* Add the audit_type here ? */
        /* Get the object first */
        this.addClass(e, 'ex-moved');
    };
    AuditTypeDetailComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.addClass(el, 'ex-over');
    };
    AuditTypeDetailComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.removeClass(el, 'ex-over');
    };
    AuditTypeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-audit-type-detail',
            template: __webpack_require__("./src/app/audit-type-detail/audit-type-detail.component.html"),
            styles: [__webpack_require__("./src/app/audit-type-detail/audit-type-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_datastore__["a" /* Datastore */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"]])
    ], AuditTypeDetailComponent);
    return AuditTypeDetailComponent;
}());



/***/ }),

/***/ "./src/app/audit-type-edit/audit-type-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".audit_type_component_edit {\n  text-align: left;\n  padding: 0.5em;\n  color: dodgerblue;\n}\n\nform.component-form div {\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.button-row {\n}\n\nfigure.mat-figure  {\n  margin: 0;\n  padding: 0;\n}\n\n.mat-grid-tile {\n  margin: 0;\n  padding: 0;\n}\n\n/* A clunky way to left align contents of the grid */\n\n.text-inside-grid {\n  position: absolute;\n  left: 1em;\n}\n\n.alert {\n  color: red;\n}\n\n.in-edit-mode {\n  background-color: #E3F2FD;\n  padding: 1em;\n}\n"

/***/ }),

/***/ "./src/app/audit-type-edit/audit-type-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"audit_type_component_edit\" >\n\n  <mat-grid-list *ngIf=\"!inEditMode\" cols=\"10\" rowHeight=\"1.2em\">\n    <mat-grid-tile colspan=\"1\">\n      <mat-icon class=\"component-icon\">{{iconName(audit_type_component.name_of_component_type)}}</mat-icon>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"6\">\n      <div class=\"text-inside-grid\">\n        <p>{{audit_type_component.title}}</p>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <button mat-icon-button *ngIf=\"!inEditMode\" (click)=\"startEditing()\">\n        <mat-icon aria-label=\"Edit this component\">edit</mat-icon>\n      </button>\n      <button mat-icon-button *ngIf=\"!inEditMode\" (click)=\"deleteComponent()\" class=\"alert\">\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n      </button>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <form class=\"componentForm\"  #componentForm=\"ngForm\" *ngIf=\"inEditMode\" name=\"componentForm\" class=\"component-form in-edit-mode example-container\" novalidate (ngSubmit)=\"saveComponentChanges(audit_type_component)\">\n\n    <mat-form-field>\n      <input matInput placeholder=\"Title\" value=\"{{audit_type_component.title}}\" name=\"title\" [(ngModel)]=\"audit_type_component.title\" required #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"alert alert-danger\">\n        Title is required\n      </div>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"showChoices()\">\n      <input matInput placeholder=\"Choices\" value=\"{{audit_type_component.choices}}\" name=\"choices\" [(ngModel)]=\"audit_type_component.choices\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Help text\" value=\"{{audit_type_component.help_text}}\"  name=\"help_text\" [(ngModel)]=\"audit_type_component.help_text\" required></textarea>\n    </mat-form-field>\n\n    <section>\n      <label>Is mandatory ? </label>\n      <mat-checkbox  name=\"is_mandatory\" [(ngModel)]=\"audit_type_component.is_mandatory\"></mat-checkbox>\n\n      <div class=\"button-row\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!componentForm.form.valid\">Save</button>\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n      </div>\n\n    </section>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/audit-type-edit/audit-type-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTypeEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_audit_type_component_model__ = __webpack_require__("./src/models/audit_type_component.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditTypeEditComponent = (function () {
    function AuditTypeEditComponent() {
    }
    AuditTypeEditComponent.prototype.ngOnInit = function () {
        if (typeof (this.audit_type_component.help_text) === 'undefined') {
            this.inEditMode = true;
        }
        else {
            this.inEditMode = false;
        }
    };
    AuditTypeEditComponent.prototype.startEditing = function () {
        this.inEditMode = true;
    };
    AuditTypeEditComponent.prototype.cancel = function () {
        this.inEditMode = false;
    };
    AuditTypeEditComponent.prototype.deleteComponent = function () {
        console.log('Would delete component');
    };
    AuditTypeEditComponent.prototype.iconName = function (name) {
        switch (name) {
            case 'Title':
                return 'payment';
            case 'Choices':
                return 'list';
            case 'Text':
                return 'subject';
            case 'Date':
                return 'today';
            case 'Signature':
                return 'gesture';
            case 'Photo':
                return 'camera';
            case 'Address':
                return 'place';
            case 'Yes / No':
                return 'hdr-strong';
            default:
                return 'payment';
        }
    };
    AuditTypeEditComponent.prototype.showChoices = function () {
        if (this.audit_type_component.name_of_component_type === 'Choices') {
            return true;
        }
        else {
            return false;
        }
    };
    AuditTypeEditComponent.prototype.saveComponentChanges = function (component) {
        var _this = this;
        component.save().subscribe(function (result) {
            _this.inEditMode = false;
        }, function (result) {
            alert('Failed to save an AuditType');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__models_audit_type_component_model__["a" /* AuditTypeComponent */])
    ], AuditTypeEditComponent.prototype, "audit_type_component", void 0);
    AuditTypeEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-audit-type-edit',
            template: __webpack_require__("./src/app/audit-type-edit/audit-type-edit.component.html"),
            styles: [__webpack_require__("./src/app/audit-type-edit/audit-type-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuditTypeEditComponent);
    return AuditTypeEditComponent;
}());



/***/ }),

/***/ "./src/app/audit-type-list/audit-type-list.component.css":
/***/ (function(module, exports) {

module.exports = "ul, ul li {\n  font-size: 100%;\n  color: red;\n}\n\nh2 {\n  text-align: left;\n}\n"

/***/ }),

/***/ "./src/app/audit-type-list/audit-type-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Check List designs\n</h2>\n\n<mat-list>\n  <mat-list-item *ngFor=\"let audit_type of audit_types\" >\n    <button mat-button routerLink=\"/audit_type/{{audit_type.id}}\">{{audit_type.title}}</button>\n  </mat-list-item>\n</mat-list>\n\n<router-outlet></router-outlet>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/audit-type-list/audit-type-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTypeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datastore__ = __webpack_require__("./src/services/datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_audit_type_model__ = __webpack_require__("./src/models/audit_type.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuditTypeListComponent = (function () {
    function AuditTypeListComponent(datastore) {
        this.datastore = datastore;
    }
    AuditTypeListComponent.prototype.ngOnInit = function () {
        this.getAuditTypes();
    };
    AuditTypeListComponent.prototype.onSelect = function (audit_type) {
        this.selectedAuditType = audit_type;
    };
    AuditTypeListComponent.prototype.getAuditTypes = function () {
        var _this = this;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_2__models_audit_type_model__["a" /* AuditType */], {
            include: 'audit_type_components'
        }).subscribe(function (audit_types) {
            _this.audit_types = audit_types.getModels();
        });
    };
    AuditTypeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audit-type-list',
            template: __webpack_require__("./src/app/audit-type-list/audit-type-list.component.html"),
            styles: [__webpack_require__("./src/app/audit-type-list/audit-type-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_datastore__["a" /* Datastore */]])
    ], AuditTypeListComponent);
    return AuditTypeListComponent;
}());



/***/ }),

/***/ "./src/app/available-components/available-components.component.css":
/***/ (function(module, exports) {

module.exports = ".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.available_component_types {\n  text-align: left;\n  height: 3em;\n}\n"

/***/ }),

/***/ "./src/app/available-components/available-components.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class='wrapper'>\n    <div class='container available_component_types' dragula='\"basket\"'>\n      <div *ngFor=\"let available_component_type of available_component_types\">\n        <h3>{{available_component_type.title}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/available-components/available-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_available_component_type_model__ = __webpack_require__("./src/models/available_component_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datastore__ = __webpack_require__("./src/services/datastore.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailableComponentsComponent = (function () {
    function AvailableComponentsComponent(datastore) {
        this.datastore = datastore;
    }
    AvailableComponentsComponent.prototype.ngOnInit = function () {
        this.getAvailableComponents();
    };
    AvailableComponentsComponent.prototype.getAvailableComponents = function () {
        var _this = this;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_1__models_available_component_type_model__["a" /* AvailableComponentTypes */], {}).subscribe(function (available_component_types) {
            _this.available_component_types = available_component_types.getModels();
        });
    };
    AvailableComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-available-component-types',
            template: __webpack_require__("./src/app/available-components/available-components.component.html"),
            styles: [__webpack_require__("./src/app/available-components/available-components.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_datastore__["a" /* Datastore */]])
    ], AvailableComponentsComponent);
    return AvailableComponentsComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./src/models/audit_type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("./node_modules/angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditType = (function (_super) {
    __extends(AuditType, _super);
    function AuditType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AuditType.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["HasMany"])(),
        __metadata("design:type", Array)
    ], AuditType.prototype, "audit_type_components", void 0);
    AuditType = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
            type: 'audit_types'
        })
    ], AuditType);
    return AuditType;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));



/***/ }),

/***/ "./src/models/audit_type_component.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("./node_modules/angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audit_type_model__ = __webpack_require__("./src/models/audit_type.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditTypeComponent = (function (_super) {
    __extends(AuditTypeComponent, _super);
    function AuditTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AuditTypeComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AuditTypeComponent.prototype, "help_text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AuditTypeComponent.prototype, "choices", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", Boolean)
    ], AuditTypeComponent.prototype, "has_image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", Boolean)
    ], AuditTypeComponent.prototype, "is_mandatory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AuditTypeComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["BelongsTo"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__audit_type_model__["a" /* AuditType */])
    ], AuditTypeComponent.prototype, "audit_type", void 0);
    AuditTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
            type: 'audit_type_components'
        })
    ], AuditTypeComponent);
    return AuditTypeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));



/***/ }),

/***/ "./src/models/available_component_type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableComponentTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("./node_modules/angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailableComponentTypes = (function (_super) {
    __extends(AvailableComponentTypes, _super);
    function AvailableComponentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", String)
    ], AvailableComponentTypes.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
        __metadata("design:type", Boolean)
    ], AvailableComponentTypes.prototype, "has_photo", void 0);
    AvailableComponentTypes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
            type: 'available_component_types'
        })
    ], AvailableComponentTypes);
    return AvailableComponentTypes;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));



/***/ }),

/***/ "./src/services/datastore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datastore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_audit_type_model__ = __webpack_require__("./src/models/audit_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_audit_type_component_model__ = __webpack_require__("./src/models/audit_type_component.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_available_component_type_model__ = __webpack_require__("./src/models/available_component_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jsonapi__ = __webpack_require__("./node_modules/angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jsonapi__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    baseUrl: 'http://localhost:3000/check_list_engine/api/',
    models: {
        audit_type: __WEBPACK_IMPORTED_MODULE_2__models_audit_type_model__["a" /* AuditType */],
        audit_type_components: __WEBPACK_IMPORTED_MODULE_3__models_audit_type_component_model__["a" /* AuditTypeComponent */],
        available_component_types: __WEBPACK_IMPORTED_MODULE_4__models_available_component_type_model__["a" /* AvailableComponentTypes */]
    }
};
var Datastore = (function (_super) {
    __extends(Datastore, _super);
    function Datastore(http) {
        return _super.call(this, http) || this;
    }
    Datastore.prototype.iconName = function (name) {
        switch (name) {
            case 'Title':
                return 'payment';
            case 'Choices':
                return 'list';
            case 'Text':
                return 'subject';
            case 'Date':
                return 'today';
            case 'Signature':
                return 'gesture';
            case 'Photo':
                return 'camera';
            case 'Address':
                return 'place';
            case 'Yes / No':
                return 'hdr-strong';
            default:
                return 'payment';
        }
    };
    Datastore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_5_angular2_jsonapi__["JsonApiDatastoreConfig"])(config),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], Datastore);
    return Datastore;
}(__WEBPACK_IMPORTED_MODULE_5_angular2_jsonapi__["JsonApiDatastore"]));



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map