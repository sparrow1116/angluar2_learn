var express = require('express');

module.exports = function(actions) {
	var func = function(middlewares) {
		var router = express.Router();
		middlewares && router.use(middlewares);
		actions(router);
		return router;
	}

	func.redirect = function(user,state) {
		// override it if you want to control the direct target determination.
	};

	return func;
};
