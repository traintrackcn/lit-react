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

var _LITPath2 = _interopRequireDefault(require("./LITPath"));

var LITCommonPath =
/*#__PURE__*/
function (_LITPath) {
  (0, _inherits2["default"])(LITCommonPath, _LITPath);

  function LITCommonPath(path) {
    var _this;

    (0, _classCallCheck2["default"])(this, LITCommonPath);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LITCommonPath).call(this, path)); // console.log('path -> '+this.path+' '+this.constructor.name); 

    _this.value = path.concat(['value']);
    _this.index = path.concat(['index']);
    _this.collection = path.concat(['collection']);
    return _this;
  }

  return LITCommonPath;
}(_LITPath2["default"]);

exports["default"] = LITCommonPath;
