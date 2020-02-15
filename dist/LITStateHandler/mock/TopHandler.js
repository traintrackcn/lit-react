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

var _p = _interopRequireDefault(require("../../__mock__/p"));

var _s = _interopRequireDefault(require("../../s"));

var _index_v = _interopRequireDefault(require("../index_v2"));

var TopHandler =
/*#__PURE__*/
function (_LITStateHandlerV) {
  (0, _inherits2["default"])(TopHandler, _LITStateHandlerV);

  function TopHandler(path, ctx, handlerClass) {
    var _this;

    (0, _classCallCheck2["default"])(this, TopHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandler).call(this, path, ctx));

    _this.setHandlerClass(handlerClass);

    return _this;
  }

  (0, _createClass2["default"])(TopHandler, [{
    key: "setHandlerClass",
    value: function setHandlerClass(value) {
      this._handlerCls = value;
    }
  }, {
    key: "getHandlerClass",
    value: function getHandlerClass() {
      return this._handlerCls;
    }
  }, {
    key: "getStateStore",
    value: function getStateStore() {
      return _s["default"];
    }
  }, {
    key: "getH",
    value: function getH() {
      if (!this._h) {
        var Class = this.getHandlerClass();
        this._h = new Class(_p["default"].t, this);
      }

      return this._h;
    }
  }]);
  return TopHandler;
}(_index_v["default"]);

exports["default"] = TopHandler;
