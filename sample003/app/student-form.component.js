System.register(['angular2/core', './student'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_1;
    var StudentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            StudentFormComponent = (function () {
                function StudentFormComponent() {
                    this.names = ['archmage', 'Mountain King', 'paladin', 'Blood mage'];
                    this.model = new student_1.Student(1880, 'archmage', 25, "软件大道66号");
                    this.submitted = false;
                }
                StudentFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                StudentFormComponent = __decorate([
                    core_1.Component({
                        selector: 'student-form',
                        templateUrl: 'app/student-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentFormComponent);
                return StudentFormComponent;
            })();
            exports_1("StudentFormComponent", StudentFormComponent);
        }
    }
});
//# sourceMappingURL=student-form.component.js.map