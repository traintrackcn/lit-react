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

var _LITPureComponent2 = _interopRequireDefault(require("../../LITPureComponent"));

var _react = _interopRequireDefault(require("react"));

var _Handler = _interopRequireDefault(require("./Handler"));

var _reactRedux = require("react-redux");

var Root =
/*#__PURE__*/
function (_LITPureComponent) {
  (0, _inherits2["default"])(Root, _LITPureComponent);

  function Root() {
    (0, _classCallCheck2["default"])(this, Root);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Root).apply(this, arguments));
  }

  (0, _createClass2["default"])(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var h = this.getHandler();
      h.setProperty1('be cool');
    }
  }, {
    key: "render",
    value: function render() {
      var h = this.getHandler();
      var StateListener = h.getStateListenerClass(); // const target = h.getStateListenerTarget();

      console.log('Root render()'); // if (!target) return null;

      return _react["default"].createElement("div", null, "hello world", _react["default"].createElement(StateListener, null));
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      if (!this._handler) {
        this._handler = new _Handler["default"](this);
      }

      return this._handler;
    }
  }]);
  return Root;
}(_LITPureComponent2["default"]); // const getListenerClass = (h) => {
//     class Listener extends LITPureComponent{
//         componentDidUpdate() {
//             h.render();
//         }
//         render() {
//             console.log('render() detected ->', this.props.trigger);
//             return null
//         }
//     }
//     const mapStateToProps = (state, ownProps) => {
//         // console.log('mapStateToProps ->', JSON.stringify(state, null, 2));
//         const trigger = h.getTrigger();
//         // console.log('mapStateToProps trigger ->', trigger);
//         return {
//             trigger
//         };
//     };
//     return connect(
//         mapStateToProps
//     )(Listener);
// }


exports["default"] = Root;
