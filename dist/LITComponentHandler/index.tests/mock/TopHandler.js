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

var _ = _interopRequireDefault(require("../.."));

var _p = _interopRequireDefault(require("../../../__mock__/p"));

var _StateHandler = _interopRequireDefault(require("./StateHandler"));

var _ComponentHandler = _interopRequireDefault(require("./ComponentHandler"));

var _CommonHandler = _interopRequireDefault(require("./CommonHandler"));

var TopHandler =
/*#__PURE__*/
function (_LITComponentHandler) {
  (0, _inherits2["default"])(TopHandler, _LITComponentHandler);

  function TopHandler() {
    (0, _classCallCheck2["default"])(this, TopHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(TopHandler, [{
    key: "getChildStateHandlerWithArrayPath",
    value: function getChildStateHandlerWithArrayPath() {
      if (!this._state) {
        this._state = new _StateHandler["default"](_p["default"].t, this);
      }

      return this._state;
    }
  }, {
    key: "getChildStateHandlerWithObjectPath",
    value: function getChildStateHandlerWithObjectPath() {
      if (!this._state1) {
        this._state1 = new _StateHandler["default"](_p["default"], this);
      }

      return this._state1;
    }
  }, {
    key: "getChildComponentHandler",
    value: function getChildComponentHandler() {
      if (!this._component) {
        this._component = new _ComponentHandler["default"](this);
      }

      return this._component;
    }
  }, {
    key: "getChildHandler",
    value: function getChildHandler() {
      if (!this._common) {
        this._common = new _CommonHandler["default"](this);
      }

      return this._common;
    }
  }, {
    key: "getCustomHandler",
    value: function getCustomHandler() {
      return 'ok';
    }
  }]);
  return TopHandler;
}(_["default"]);

exports["default"] = TopHandler;
