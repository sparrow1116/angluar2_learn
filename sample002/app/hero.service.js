var mock_heros_1 = require('./mock.heros');
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeros = function () {
        return Promise.resolve(mock_heros_1.HEROS);
    };
    HeroService.prototype.getHerosSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heros_1.HEROS); }, 2000);
        });
    };
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map