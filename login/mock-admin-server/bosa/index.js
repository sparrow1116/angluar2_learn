/**
 * Created by zhangyj on 2017/2/20.
 */

console.log('>>>>>>>>>>>> come in boas index>>>>>>>>>>>>');
var Q = require('q');
var extend = require('extend');
var utils = require('../web-utils');

var routerCommon = require('../routerCommon');
var g = require('../g');
var loginService = require('./login');

var logger = g.logger;
var config = g.settings;



function actions(router) {
  loginService(router);
}

module.exports = routerCommon(actions);
