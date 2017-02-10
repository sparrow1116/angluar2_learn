System.register([], function(exports_1) {
    var Mobile, MobileService, MobileArray, mobilesPromise;
    return {
        setters:[],
        execute: function() {
            Mobile = (function () {
                function Mobile(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Mobile;
            })();
            exports_1("Mobile", Mobile);
            MobileService = (function () {
                function MobileService() {
                }
                MobileService.prototype.getMobiles = function () {
                    return mobilesPromise;
                };
                MobileService.prototype.getMobile = function (id) {
                    return mobilesPromise
                        .then(function (mobiles) { return mobiles.filter(function (h) { return h.id === id; })[0]; });
                };
                return MobileService;
            })();
            exports_1("MobileService", MobileService);
            MobileArray = [
                new Mobile(11, '苹果'),
                new Mobile(12, '三星'),
                new Mobile(13, '小米'),
                new Mobile(14, '华为'),
                new Mobile(15, '乐视'),
                new Mobile(16, '魅族')
            ];
            mobilesPromise = Promise.resolve(MobileArray);
        }
    }
});
//# sourceMappingURL=mobile.service.js.map