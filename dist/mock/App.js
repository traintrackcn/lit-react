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

var _LITPureComponent2 = _interopRequireDefault(require("../LITPureComponent"));

var _reactRedux = require("react-redux");

var _s = require("../s");

var _Root = _interopRequireDefault(require("./Root"));

var _react = _interopRequireDefault(require("react"));

var _default =
/*#__PURE__*/
function (_LITPureComponent) {
  (0, _inherits2["default"])(_default, _LITPureComponent);

  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactRedux.Provider, {
        store: _s.store
      }, _react["default"].createElement(_Root["default"], null));
    }
  }]);
  return _default;
}(_LITPureComponent2["default"]);

exports["default"] = _default;
