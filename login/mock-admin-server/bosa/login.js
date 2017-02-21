/**
 * Created by zhangyj on 2017/2/20.
 */

function actions(router) {
  router.get('/login/check-user', function (req, res) {

    console.log('got in check-user');
    res.json({
      status:0,
      msg:'',
      data:{}
    });

  });
  router.get('/login/check-captcha', function (req, res) {

    console.log('/login/check-captcha');
    res.json({
      status:0,
      msg:'',
      data:{}
    });

  });

  router.get('/login', function (req, res) {

    console.log('/login');
    res.json({
      status:0,
      msg:'',
      data:{}
    });

  });




}

module.exports = actions;
