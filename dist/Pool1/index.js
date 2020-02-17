"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Pool =
/*#__PURE__*/
function () {
  function Pool() {
    (0, _classCallCheck2["default"])(this, Pool);
  }

  (0, _createClass2["default"])(Pool, [{
    key: "get",
    value: function get(Class, param1, param2, param3) {
      if (!Class) throw new Error('Cannot getHandler, invalid Class');
      var className = Class.name;
      var key = "".concat(className);

      var cached = this._get(key);

      if (cached) return cached;
      var obj = new Class(param1, param2, param3);

      this._set(key, obj);

      return obj;
    }
  }, {
    key: "_get",
    value: function _get(key) {
      var cache = this._getCache();

      return cache[key];
    }
  }, {
    key: "_set",
    value: function _set(key, value) {
      var cache = this._getCache();

      cache[key] = value;
    }
  }, {
    key: "_getCache",
    value: function _getCache() {
      if (!this._cache) {
        this._cache = {};
      }

      return this._cache;
    }
  }]);
  return Pool;
}();

exports["default"] = Pool;
