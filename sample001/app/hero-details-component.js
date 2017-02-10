"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhangyj on 2017/2/7.
 */
var core_1 = require("angular2/core");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent() {
    }
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-details',
        inputs: ['hero']
    }),
    core_1.View({
        template: "\n        <h2>{{hero.name}}</h2>\n        <div><label>name:</label><input [(ngModel)]=\"hero.name\" placeholder=\"name\"></div>\n        <div><label>id:</label>{{hero.id}}</div>\n    "
    })
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details-component.js.map