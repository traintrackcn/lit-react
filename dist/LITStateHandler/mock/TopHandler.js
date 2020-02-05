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

var _index_v = _interopRequireDefault(require("../index_v2"));

var _p = _interopRequireDefault(require("./p"));

var _s = _interopRequireDefault(require("../../s"));

var TopHandler =
/*#__PURE__*/
function (_LITStateHandlerV) {
  (0, _inherits2["default"])(TopHandler, _LITStateHandlerV);

  function TopHandler(ctx) {
    var _this;

    (0, _classCallCheck2["default"])(this, TopHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandler).call(this, ctx));

    _this.setStateStore(_s["default"]);

    return _this;
  } // getStateStore() {
  //     return s;
  // }


  (0, _createClass2["default"])(TopHandler, [{
    key: "getH",
    value: function getH() {
      if (!this._h) {
        this._h = new _index_v["default"](_p["default"].t, this);
      }

      return this._h;
    }
  }]);
  return TopHandler;
}(_index_v["default"]);

exports["default"] = TopHandler;
