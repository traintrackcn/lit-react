"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _LITPath2 = _interopRequireDefault(require("../LITPath"));

//for test purpose
var C =
/*#__PURE__*/
function (_LITPath) {
  (0, _inherits2["default"])(C, _LITPath);

  function C(path) {
    var _this;

    (0, _classCallCheck2["default"])(this, C);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(C).call(this, path));
    _this.t = _this.path.concat(['t']);
    _this.a = _this.path.concat(['a']);
    return _this;
  }

  return C;
}(_LITPath2["default"]);

var _default = new C(['r']);

exports["default"] = _default;
