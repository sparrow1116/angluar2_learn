"use strict";
var cors = require('cors');
var bodyParser = require('body-parser');
//var g = require('./g');
//var accessLog = require('@fenqi/cf-accesslog');
//var config = g.settings;

module.exports = function(app) {
	// 使用日志
  //app.use(accessLog(config.accessLog));
	app.use(cors({
    "origin":true
  }));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json({
    "strict":false,
    "limit": "10mb"
  }));

};
