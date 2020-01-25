"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LITPureComponent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LITPureComponent, _PureComponent);

  function LITPureComponent(props) {
    var _this;

    _classCallCheck(this, LITPureComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LITPureComponent).call(this, props));
    _this.state = {}; // this._mounted = false;

    return _this;
  }

  _createClass(LITPureComponent, [{
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
