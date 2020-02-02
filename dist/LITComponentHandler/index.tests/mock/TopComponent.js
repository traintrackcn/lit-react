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

var _BaseComponent2 = _interopRequireDefault(require("./BaseComponent"));

var _react = _interopRequireDefault(require("react"));

var _TopHandler = _interopRequireDefault(require("./TopHandler"));

var TopComponent =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2["default"])(TopComponent, _BaseComponent);

  function TopComponent() {
    (0, _classCallCheck2["default"])(this, TopComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(TopComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, "top component");
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      if (!this._handler) {
        this._handler = new _TopHandler["default"](this);
      }

      return this._handler;
    }
  }]);
  return TopComponent;
}(_BaseComponent2["default"]);

exports["default"] = TopComponent;
