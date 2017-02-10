System.register(['angular2/core', './hero-details-component', './student-form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_details_component_1, student_form_component_1;
    var AppComponent, HEROS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_details_component_1_1) {
                hero_details_component_1 = hero_details_component_1_1;
            },
            function (student_form_component_1_1) {
                student_form_component_1 = student_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'war crarft';
                    this.heros = HEROS;
                    this.selectHero = { name: 'archmage', id: 1 };
                }
                AppComponent.prototype.chooseHero = function (hero) {
                    this.selectHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [hero_details_component_1.HeroDetailsComponent, student_form_component_1.StudentFormComponent],
                        template: "\n        <h1>{{title}}</h1>\n        <my-hero-details [hero]=\"selectHero\"></my-hero-details>\n        <h1>hero list:</h1>\n        <ul class=\"hero_block\">\n            <li *ngFor=\"#hero of heros #i=index\" (click)=\"chooseHero(hero)\">\n                <div>{{i+1}}</div>\n                <div><label>name:</label>{{hero.name}}</div>\n                <div><label>id:</label>{{hero.id}}</div>\n            </li>\n        </ul>\n        <student-form></student-form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            HEROS = [
                { "id": 1, "name": "archmage" },
                { "id": 2, "name": "Mountain King" },
                { "id": 3, "name": "paladin" },
                { "id": 4, "name": "Blood mage" },
                { "id": 5, "name": "blademaster" },
                { "id": 6, "name": "foresight" },
                { "id": 7, "name": "Tauren chieftain" },
                { "id": 8, "name": "shadow hunter " }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map