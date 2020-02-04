"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RootPath = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _LITPath2 = _interopRequireDefault(require("../LITPath"));

//for test purpose
var RootPath =
/*#__PURE__*/
function (_LITPath) {
  (0, _inherits2["default"])(RootPath, _LITPath);

  function RootPath(path) {
    var _this;

    (0, _classCallCheck2["default"])(this, RootPath);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RootPath).call(this, path));
    _this.property1 = _this.path.concat(['property1']);
    return _this;
  }

  return RootPath;
}(_LITPath2["default"]);

exports.RootPath = RootPath;

var _default = new RootPath(['r']);

exports["default"] = _default;
