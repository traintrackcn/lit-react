"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _LITHandler2 = _interopRequireDefault(require("../LITHandler"));

var _default =
/*#__PURE__*/
function (_LITHandler) {
  (0, _inherits2["default"])(_default, _LITHandler);

  function _default(component) {
    (0, _classCallCheck2["default"])(this, _default);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).call(this, component));
  }

  (0, _createClass2["default"])(_default, [{
    key: "getProps",
    value: function getProps() {
      try {
        var c = this.getComponent();
        return c.props;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getNavigation",
    value: function getNavigation() {
      try {
        var props = this.getProps();
        return props.navigation;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "setState",
    value: function setState(value) {
      var c = this.getComponent(); // console.log('c ->', c);

      c.setState(value);
    }
  }, {
    key: "getNewState",
    value: function getNewState() {
      // use this state to render component
      var seed = Math.random();
      return {
        seed: seed
      };
    }
  }, {
    key: "getState",
    value: function getState() {
      var c = this.getComponent();
      return c.state;
    }
  }, {
    key: "initState",
    value: function initState(newState) {
      var c = this.getComponent();
      c.state = newState;
    }
  }, {
    key: "navigate",
    value: function navigate(route, params) {
      var navigation = this.getNavigation();
      navigation.navigate(route, params);
    }
  }, {
    key: "back",
    value: function back() {
      var navigation = this.getNavigation();
      navigation.goBack(null);
    }
  }, {
    key: "getNaviParam",
    value: function getNaviParam(key) {
      var navigation = this.getNavigation();
      return navigation.getParam(key);
    }
  }, {
    key: "setNaviParams",
    value: function setNaviParams(params) {
      var navigation = this.getNavigation();
      navigation.setParams(params);
    }
  }, {
    key: "setNaviParamsAsync",
    value: function () {
      var _setNaviParamsAsync = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(params) {
        var navigation;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                navigation = this.getNavigation();
                _context.next = 3;
                return navigation.setParams(params);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setNaviParamsAsync(_x) {
        return _setNaviParamsAsync.apply(this, arguments);
      }

      return setNaviParamsAsync;
    }()
  }, {
    key: "render",
    value: function render() {
      // setState to activate rendering
      var newState = this.getNewState();
      this.setState(newState);
    }
  }, {
    key: "reRender",
    value: function reRender() {// reset and render
    }
  }]);
  return _default;
}(_LITHandler2["default"]);

exports["default"] = _default;
