"use strict";
var fs = require('fs');
//var wxAuthMiddleware = require('./shared/wxAuth');
//var authentication = require('./shared/authentication');
//var consts = require('./shared/consts');
//var responseExt = require('./response-extension');
//var serverError = require('./serverError');
var g = require('./g');
var logger = g.logger;
var config = g.settings;

//var tt = require('./bosa');


function loadArea(router) {
	try {

		return require(router);
	} catch(err) {
    console.log('>>>>error>>>');
		//throw ('failed to load {0}: {1}'.format(router, err));
	}
}

module.exports = function(app) {
    var area = loadArea('./bosa');

    //app.use('/pages/', function(req, res) {
	//	wxAuthMiddleware(req)
	//	.then(function(result) {
	//		if (!result) return;
	//		var state = req.query.state;
	//		var target = area.redirect(result.user, state) || consts.pages[state];
	//		res.redirect(config.staticRoot + target + '?' + config.authentication.tokenKeyword + '=' + result.token);
	//	});
	//});
	//app.use('/common/', area([function (req, res, next) {
	//	console.log(req.originalUrl);
	//	next();
	//}]));
    app.all('*',function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

      if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
      }
      else {
        next();
      }
    });

    app.use('/api/', area([function (req, res, next) {
		console.log(req.originalUrl);
		next();
    }]));
};
