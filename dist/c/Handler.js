"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _util = _interopRequireDefault(require("./_util"));

var _Node = _interopRequireDefault(require("./Node"));

var _Key = _interopRequireDefault(require("./Key"));

var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    this.map = {};
    this.cache = {};
  }

  (0, _createClass2["default"])(_default, [{
    key: "parse",
    value: function parse(data) {
      this.map = _util["default"].getTreeMap(data);
    }
  }, {
    key: "get",
    value: function get(key, ctx) {
      var node = this.get_node(key);
      if (!node) return;
      return node.get(ctx);
    }
  }, {
    key: "get_k",
    value: function get_k(key) {
      var k;

      if (key && key instanceof _Key["default"]) {
        k = key.value;
      } else {
        k = key;
      }

      return k;
    }
  }, {
    key: "get_raw_node",
    value: function get_raw_node(key) {
      var k = this.get_k(key);
      return this.map[k];
    }
  }, {
    key: "get_node",
    value: function get_node(key) {
      var k = this.get_k(key);
      var cached = this.cache[k];
      if (cached) return cached;
      if (!this.map) return;
      var raw = this.map[k];
      if (!raw) return;
      console.log('key ->', k, raw);
      cached = new _Node["default"](raw); //set to cache

      this.cache[k] = cached;
      return cached;
    }
  }]);
  return _default;
}();

exports["default"] = _default;
