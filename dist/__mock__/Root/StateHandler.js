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

var _LITStateHandler2 = _interopRequireDefault(require("../../LITStateHandler"));

var _s = _interopRequireDefault(require("../../s"));

var RootStateHandler =
/*#__PURE__*/
function (_LITStateHandler) {
  (0, _inherits2["default"])(RootStateHandler, _LITStateHandler);

  function RootStateHandler(ctx, extraCtx) {
    var _this;

    (0, _classCallCheck2["default"])(this, RootStateHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RootStateHandler).call(this, ctx, extraCtx));
    _this.s = _s["default"];
    return _this;
  }

  (0, _createClass2["default"])(RootStateHandler, [{
    key: "setProperty1",
    value: function setProperty1(value) {
      this.setKey(this.p.property1, value);
    }
  }, {
    key: "getProperty1",
    value: function getProperty1() {
      return this.getKey(this.p.property1);
    }
  }]);
  return RootStateHandler;
}(_LITStateHandler2["default"]);

exports["default"] = RootStateHandler;
