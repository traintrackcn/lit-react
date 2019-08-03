"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = _interopRequireDefault(require("./_utils"));

var _Node = _interopRequireDefault(require("./Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    this.map = {};
    this.cache = {};
  }

  _createClass(_default, [{
    key: "parse",
    value: function parse(data) {
      this.map = _utils["default"].getTreeMap(data);
    }
  }, {
    key: "get",
    value: function get(key, ctx) {
      var node = this.get_node(key);
      return node.get(ctx);
    }
  }, {
    key: "get_raw_node",
    value: function get_raw_node(key) {
      return this.map[key.value];
    }
  }, {
    key: "get_node",
    value: function get_node(key) {
      // var key = K.key;
      var cached = this.cache[key.value];
      if (cached) return cached;
      if (!this.map) return;
      var node = this.map[key.value];
      console.log('key ->', key.value, node);
      cached = new _Node["default"](node); //set to cache

      this.cache[key.value] = cached;
      return cached;
    }
  }]);

  return _default;
}();

exports["default"] = _default;
