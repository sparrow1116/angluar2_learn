var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhangyj on 2017/2/9.
 */
var core_1 = require('angular2/core');
var KeyupEnterComponent = (function () {
    function KeyupEnterComponent() {
        this.values = '';
    }
    KeyupEnterComponent = __decorate([
        core_1.Component({
            selector: 'key-up',
            template: "\n        <input #box\n            (keyup.enter)=\"values=box.value\"\n            (blur)=\"values=box.value\">\n        {{values}}\n    "
        })
    ], KeyupEnterComponent);
    return KeyupEnterComponent;
})();
exports.KeyupEnterComponent = KeyupEnterComponent;
//# sourceMappingURL=key-up-blur.component.js.map