/**
 * Created by zhangyj on 2017/2/20.
 */
"use strict";
var fs = require('fs');
var path = require('path');
var swig = require('swig');
var express = require('express');

//	算是global setting
var g = require('./g');
// 算是引入了StringUtil
//require('./extension');

var app = express();

var logdir = './log';
var consts;
var middlewares;
var router;
//	加载log4js-config.json
var logger;
//	加载config.json
var config;

function preCheck() {
  var logConfig = './log4js-config.json';
  if (!fs.existsSync(logConfig)) {
    console.error('log4js-config.json is not existing!');
    return false;
  }
  if(!fs.existsSync(logdir)) fs.mkdirSync(logdir);

  // TODO:  configuration validation
  //logger = require('@fenqi/cf-logger');
  //logger.configure(logConfig);
  //config = require('@fenqi/cf-config').get();
  //config.appName = config.base.appName;
  //config.feature = config.base.feature;
  //config.mongoConnStr = config.mongoService.connStr;
  return true;
}

function appInit() {
  app.set('x-powered-by', false);
  g.logger = logger;
  //g.settings = config;

  // 加载常量
  //consts = require('./shared/consts');
  //g.settings.debug = app.get('env') == 'development';
  // config.feature = sales
  //g.settings.commonPath = consts.areas[config.feature].path;
  // FE的意思是？
  //g.settings.staticRoot = 'http://{0}:{1}/'.format(config.FE.host, config.FE.port);

  middlewares = require('./middlewares');
  router = require('./router');
}

app.init = function() {
  if (!preCheck()) return false;
  appInit();

  // 为app加上中间件
  middlewares(this);

  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', path.join(__dirname, 'bosa', '/views'));

  // 任何请求先经过router()
  router(this);
  this.use(function (err, req, res, next) {
    g.logger.warn('Error:' + err);
    res.status(500).send('server error, please check log file.');
  });
  return true;
};

module.exports = app;
