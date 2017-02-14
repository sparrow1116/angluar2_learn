System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyTreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
            MyTreeComponent = (function () {
                function MyTreeComponent() {
                    this.activeRouter = null;
                    this.myTreeJson = [{
                            icon: 'icon/wxb-user.png',
                            title: '人员管理',
                            children: [{
                                    icon: 'icon/register-user.png',
                                    title: 'S人员管理',
                                    children: [
                                        { title: 'S1人员', tag: '20' },
                                        { title: 'S2人员' },
                                        { title: 'S3人员' },
                                        { title: 'S4人员' }
                                    ]
                                }, {
                                    icon: 'icon/account.png',
                                    title: '测试',
                                    tag: '10'
                                }]
                        }];
                }
                MyTreeComponent.prototype.choseLevel = function (header, selectedTree) {
                    this.activeRouter = selectedTree;
                    header.open = !header.open;
                    setTimeout(function () {
                        if (header.open) {
                            header.timeout = true;
                        }
                        else {
                            header.timeout = false;
                        }
                    }, 700);
                };
                MyTreeComponent = __decorate([
                    core_1.Component({
                        //directives:[ROUTER_DIRECTIVES],
                        selector: 'my-tree',
                        styleUrls: ['./app/tree.css'],
                        templateUrl: '/app/my-tree.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyTreeComponent);
                return MyTreeComponent;
            })();
            exports_1("MyTreeComponent", MyTreeComponent);
        }
    }
});
//# sourceMappingURL=my.tree.component.js.map