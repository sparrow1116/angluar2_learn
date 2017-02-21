/**
 * Created by zhangyj on 2017/2/20.
 */
var app = require('./app');
var g = require('./g');

if (!app.init()) return;
var server = app.listen(8899, function() {
  var address = server.address();
  var host = address.address;
  var port = address.port;
  var logger = g.logger;
  console.log('listen at '+host+':'+port);
  //logger.info('listen at '+host+':'+port);
});
