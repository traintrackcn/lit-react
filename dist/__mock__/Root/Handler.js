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

var _LITComponentHandler2 = _interopRequireDefault(require("../../LITComponentHandler"));

var _StateHandler = _interopRequireDefault(require("./StateHandler"));

var _p = _interopRequireDefault(require("../p"));

var RootHandler =
/*#__PURE__*/
function (_LITComponentHandler) {
  (0, _inherits2["default"])(RootHandler, _LITComponentHandler);

  function RootHandler() {
    (0, _classCallCheck2["default"])(this, RootHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RootHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(RootHandler, [{
    key: "getStateListenerTarget",
    value: function getStateListenerTarget() {
      return this.getProperty1();
    }
  }, {
    key: "setProperty1",
    value: function setProperty1(value) {
      var h = this.getStateHandler();
      return h.setProperty1(value);
    }
  }, {
    key: "getProperty1",
    value: function getProperty1() {
      var h = this.getStateHandler();
      return h.getProperty1();
    }
  }, {
    key: "getStateHandler",
    value: function getStateHandler() {
      if (!this._state) {
        this._state = new _StateHandler["default"](_p["default"], this);
      }

      return this._state;
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      return this;
    }
  }]);
  return RootHandler;
}(_LITComponentHandler2["default"]);

exports["default"] = RootHandler;
