"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var aboutme_component_1 = require("./aboutme/aboutme.component");
var projects_component_1 = require("./projects/projects.component");
var contactme_component_1 = require("./contactme/contactme.component");
var routes = [
    { path: '', component: aboutme_component_1.AboutmeComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'contactme', component: contactme_component_1.ContactmeComponent },
    // redirect to / if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
