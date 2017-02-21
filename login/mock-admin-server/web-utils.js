"use strict";
var g = require('./g');
var extend = require('extend');
var pinyin = require('pinyin');
var log = g.logger;

var internalKeyRegx = /__\w+__/;
var reserved = {
	properties: '__properties__',
	context: '__context__',
	isArray: '__isArray__'
};
function _eval(thisArg, propStr) {
	if (!propStr) return '';
	var splitting = propStr.split('.');
	var v = thisArg;
	splitting.forEach(function(key) {
		if (!v) return;
		v = v[key];
	});
	return v;
}

// ["a", {
//	"b": function(src) {
//	},
//	"c": {
//		__context__:"", // if context hasn't been set, use src as the default
//		__properties__: [],
//		__isArray__: false
//	},
//	"d": [],
//	"e": ""
// }]
// Caution:
//	key beginning & ending with __ is preserved, they won't be exported to destination
//
function objMap(src, inclusion, defaults) {
	var result = Object.create(null);
	if (!inclusion) return result;
	src = extend({}, defaults, src);
	function _setValue(obj, key, value) {
        obj[toCamelCase(key)] = (('number' == (typeof value)) && isNaN(value)) ? 
                                0 : (value === undefined ? null : value);
	}
	function _setIfUndefined(obj, key, value) {
		key = toCamelCase(key);
		if (!obj[key]) obj[key] = value;
	}
	function _getValue(obj, key) {
		key = toCamelCase(key);
		return obj[key];
	}
	function _handleArray(from, to, inclusion) {
		inclusion.forEach(function(prop) {
			_handleArrayElem(from, to, prop);
		});
	}
	function _handleArrayElem(from, to, prop) {
		if (Object.isString(prop)) {
			_setValue(to, prop, _eval(from, prop));
		} else if (Object.isFunction(prop)) {
			_setValue(to, prop, prop(from));
		} else if (Object.isObject(prop)) {
			_handleObj(from, to, prop);
		} else {
			throw ('no recognized array elem:' + prop);
		}
	}
	function _handleObj(from, to, prop) {
		Object.getOwnPropertyNames(prop).forEach(function(key) {
			_handleObjElem(from, to, key, prop);
		});
	}
	function _handleObjElem(from, to, k, prop) {
		var v = prop[k];
		if (internalKeyRegx.test(k)) {
			if (k == reserved.properties) {
				if (!Object.isArray(v)) throw ('unexpected value for key:'+k);
				var ctx = from[prop[reserved.context]] || from;
				if (prop[reserved.isArray] !== true) {
					_setIfUndefined(to, k, {});
					var toK = _getValue(to, k);
					_handleArray(ctx, toK, v);
				} else {
					_setIfUndefined(to, k, []);
					var toK = _getValue(to, k);
					ctx.forEach(function(item) {
						toK.push({});
						_handleArray(item, toK[toK.length - 1], v);
					});
				}
			} else {
				log.debug('ignore property:'+k);
			}
			return;
		}
		if (Object.isString(v)) {
			_setValue(to, k, _eval(from, v));
		} else if (Object.isFunction(v)) {
			_setValue(to, k, v(from));
		} else if (Object.isArray(v)) {
			_setIfUndefined(to, k, {});
			var toK = _getValue(to, k);
			_handleArray(k in from ? from[k] : from, toK, v);
		} else if (Object.isObject(v)) {
			_setIfUndefined(to, k, {});
			var toK = _getValue(to, k);
			_handleObj( k in from ? from[k] : from, toK, v);
			var propertiesV = _getValue(toK, reserved.properties);
			if (propertiesV) _setValue(to, k, propertiesV);
		} else {
			throw ('no recognized key:'+k);
		}
	}
	_handleArray(src, result, inclusion);
	return result;
};

module.exports.objMap = function(src, inclusion, defaults) {
	if (Object.isArray(src)) {
		var result = [];
		src.forEach(function(item) {
			result.push(objMap(item, inclusion, defaults));
		});
		return result;
	} else {
		return objMap(src, inclusion, defaults);
	}
};

var toCamelCase = module.exports.toCamelCase = function toCamelCase(str) {
	if (!str) return str;
	return str.replace(/^([A-Z]+)(\w*)$/g, function(match, m1, m2) {
		return m1.toLowerCase() + m2;
	});
};

var mapSelf = module.exports.mapSelf = function mapSelf(arr) {
	var result = {};
	arr.forEach(function(k) {
		result[k] = k;
	});
	return result;
};

//
// @description filter next page
//
// @param {Pagination} {
//	hasMore: boolean,
//	pageSize: integer,
//	endInOrder: any, // the last item's sorted column
//	endIdentifier: any // the last item's unique key
// }
//
// @return next page after pagination.endInOrder
// and pagination's hasMore, endInOrder, endIdentifier will be updated
//
var page = module.exports.page = function page(list, pagination, sortFieldGetter, identifierGetter, comparer) {
	var start = 0;
	var end = list.length - 1;
	var mid;
	var found = false;
	var prev;
	var key;
	var result;
	list = list.sort(function(a,b) {
					var aKey = sortFieldGetter(a);
					var bKey = sortFieldGetter(b);
                    return comparer(aKey, bKey);
				});
	while (start < end) {
		mid = Math.floor((start+end)/2);
		key = sortFieldGetter(list[mid]);
		if (comparer(key, pagination.endInOrder) < 0) start = mid;
		else if (key == pagination.endInOrder) {
			var iter = mid;
			var firstGreater = null;
            // forward
            while(sortFieldGetter(list[iter]) == key) {
                if (!list[iter]) {
                    break;
                }
                if (identifierGetter(list[iter]) == pagination.endIdentifier) {
                    mid = iter + 1;
                    found = true;
                    break;
                }
			    iter = iter + 1;
            }
            if (list[iter] && sortFieldGetter(list[iter]) != key) firstGreater = iter;
            iter = mid;
            if (!found) {
                // backward
                while (sortFieldGetter(list[iter]) == key) {
                    if (!list[iter]) {
                        break;
                    }
                    if (identifierGetter(list[iter]) == pagination.endIdentifier) {
                        mid = iter + 1;
                        found = true;
                        break;
                    }
                    iter = iter - 1;
                }
            }
            if (!found && firstGreater) {
                found = true;
                mid = firstGreater;
            }

			break;
		}
		else {
			prev = list[mid-1];
			if (!prev || (comparer(sortFieldGetter(prev), pagination.endInOrder) < 0)) {
					found = true;
					break;
			} else if (prev && sortFieldGetter(prev) == pagination.endInOrder) {
				while (list[mid - 1] && ((sortFieldGetter(list[mid - 1]) == pagination.endInOrder) && 
						(identifierGetter(list[mid - 1]) != pagination.endIdentifier))) {
					mid--;
				}
				found = true;
				break;
			}
			else {
				end = mid;
			}
		}
	}
	if (!found) {
		pagination.hasMore = false;
		return [];
	}
	result = list.slice(mid, mid + pagination.pageSize);
	pagination.hasMore = (mid+pagination.pageSize) < list.length;
	pagination.endInOrder = sortFieldGetter(result[result.length - 1]);
	pagination.endIdentifier = identifierGetter(result[result.length - 1]);
	return result;
}
//
// asc order
//
module.exports.stringComparer = function CompareString(a, b) {
    function getPinyin(str) {
        return pinyin(str, {
            style: pinyin.STYLE_NORMAL
        });
    }
    if (!a && !b) return 0;
    else if (!a) return -1;
    else if (!b) return 1;
    else {
        var aPin = getPinyin(a);
        var bPin = getPinyin(b);
        var len = Math.max(aPin.length, bPin.length);
        var v;
        for(var i = 0; i < len; i++) {
            v = generalComparer(aPin[i], bPin[i]);
            if (v != 0) break;
        }
        return v;
    }
};
//
// asc order
//
var generalComparer = module.exports.generalComparer = function compareNumber(a, b) {
    if (!a && !b) return 0;
    else if (!a) return -1;
    else if (!b) return 1;
    else {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }
};
