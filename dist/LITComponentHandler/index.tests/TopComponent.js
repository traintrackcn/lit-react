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
      console.log('render');
      return React.createElement("div", null, "test");
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      if (!this._handler) {
        this._handler = new TopHandler(this);
      }

      return this._handler;
    }
  }]);
  return TopComponent;
}(BaseComponent);

exports["default"] = TopComponent;
