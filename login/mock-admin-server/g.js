"use strict";
var g = {};
global.__cf_logger__ || (global.__cf_logger__ = {});
global.__cf_settings__ || (global.__cf_settings__ = {});

Object.defineProperties(g, {
	'logger': {
		set: function(value) {
			global.__cf_logger__ = value;
		},
		get: function() {
			return global.__cf_logger__;
		}
	},
	'settings': {
		set: function(value) {
			global.__cf_settings__ = value;
		},
		get: function() {
			return global.__cf_settings__;
		}
	}
});
module.exports = g;
