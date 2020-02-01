"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var LITPureComponent =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(LITPureComponent, _PureComponent);

  function LITPureComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LITPureComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LITPureComponent).call(this, props));
    _this.state = {}; // this._mounted = false;

    return _this;
  }

  (0, _createClass2["default"])(LITPureComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.onReceiveProps(this.props);
    }
  }, {
    key: "navigate",
    value: function navigate(route, params) {
      this.props.navigation.navigate(route, params);
    }
  }, {
    key: "back",
    value: function back() {
      this.props.navigation.goBack(null);
    }
  }, {
    key: "getNaviParam",
    value: function getNaviParam(key) {
      return this.props.navigation.getParam(key);
    }
  }, {
    key: "setNaviParams",
    value: function setNaviParams(params) {
      this.props.navigation.setParams(params);
    } //deprecated

  }, {
    key: "get_navi_param",
    value: function get_navi_param(key) {
      return this.getNaviParam(key);
    } //deprecated

  }, {
    key: "set_navi_params",
    value: function set_navi_params(params) {
      this.setNaviParams(params);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.onReceiveProps(nextProps);
    }
    /**
     * @deprecated
     */

  }, {
    key: "onReceiveProps",
    value: function onReceiveProps(props) {}
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return LITPureComponent;
}(_react.PureComponent);

exports["default"] = LITPureComponent;
