"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _Handler = _interopRequireDefault(require("./_state/Handler"));

var _LITBaseHandler2 = _interopRequireDefault(require("../LITBaseHandler"));

var LITStateHandlerV2 =
/*#__PURE__*/
function (_LITBaseHandler) {
  (0, _inherits2["default"])(LITStateHandlerV2, _LITBaseHandler);

  function LITStateHandlerV2(path, ctx) {
    (0, _classCallCheck2["default"])(this, LITStateHandlerV2);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LITStateHandlerV2).call(this, path, ctx));
  }

  (0, _createClass2["default"])(LITStateHandlerV2, [{
    key: "get",
    value: function get() {
      var h = this.getStateHandler();
      return h.get();
    }
  }, {
    key: "set",
    value: function set(value) {
      var h = this.getStateHandler();
      h.set(value);
    }
  }, {
    key: "del",
    value: function del() {
      var h = this.getStateHandler();
      h.del();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var h = this.getStateHandler();
      return h.get_value();
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var h = this.getStateHandler();
      h.set_value(value);
    }
  }, {
    key: "delValue",
    value: function delValue() {
      var h = this.getStateHandler();
      h.del_value();
    }
  }, {
    key: "getKey",
    value: function getKey(key) {
      var h = this.getStateHandler();
      var state = h.get();
      return state.get(key);
    }
  }, {
    key: "setKey",
    value: function setKey(key, value) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state.set(key, value);
      this.set(state);
    }
  }, {
    key: "delKey",
    value: function delKey(key) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state["delete"](key);
      this.set(state);
    }
  }, {
    key: "getCollection",
    value: function getCollection() {
      var h = this.getStateHandler();
      return h.get_collection();
    }
  }, {
    key: "setCollection",
    value: function setCollection(value) {
      var h = this.getStateHandler();
      h.set_collection(value);
    }
  }, {
    key: "select",
    value: function select(index) {
      var h = this.getStateHandler();
      h.select(index);
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      var h = this.getStateHandler();
      return h.get_selected_index();
    }
  }, {
    key: "getStateHandler",
    value: function getStateHandler() {
      if (!this._state) {
        var path = this.getPath();
        this._state = new _Handler["default"](path);
        this._state.s = this.getStateStore();
      }

      return this._state;
    }
  }]);
  return LITStateHandlerV2;
}(_LITBaseHandler2["default"]);

exports["default"] = LITStateHandlerV2;
