var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhangyj on 2017/2/3.
 */
var core_1 = require('angular2/core');
var hero_details_component_1 = require('./hero-details-component');
var hero_service_1 = require('./hero.service');
var key_up_blur_component_1 = require('./key-up-blur.component');
var AppComponent = (function () {
    function AppComponent(_heroService) {
        this._heroService = _heroService;
        this.title = 'war crarft';
        this.selectHero = { name: 'archmage', id: 1 };
    }
    AppComponent.prototype.getHeros = function () {
        var _this = this;
        this._heroService.getHerosSlowly().then(function (heros) { return _this.heros = heros; });
    };
    AppComponent.prototype.chooseHero = function (hero) {
        this.selectHero = hero;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeros();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [hero_details_component_1.HeroDetailsComponent, key_up_blur_component_1.KeyupEnterComponent],
            providers: [hero_service_1.HeroService],
            template: "\n        <h1>{{title}}</h1>\n        <my-hero-details [hero]=\"selectHero\"></my-hero-details>\n        <h1>hero list:</h1>\n        <ul class=\"hero_block\">\n            <li *ngFor=\"#hero of heros #i=index\" (click)=\"chooseHero(hero)\">\n                <div>{{i+1}}</div>\n                <div><label>name:</label>{{hero.name}}</div>\n                <div><label>id:</label>{{hero.id}}</div>\n            </li>\n        </ul>\n        <key-up></key-up>\n    "
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map