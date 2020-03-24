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

var _LITBaseHandler2 = _interopRequireDefault(require("../LITBaseHandler"));

var _react = require("react");

var _reactRedux = require("react-redux");

var LITComponentHandler =
/*#__PURE__*/
function (_LITBaseHandler) {
  (0, _inherits2["default"])(LITComponentHandler, _LITBaseHandler);

  function LITComponentHandler() {
    (0, _classCallCheck2["default"])(this, LITComponentHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LITComponentHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(LITComponentHandler, [{
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
    key: "setStateAsync",
    value: function () {
      var _setStateAsync = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(value) {
        var c;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                c = this.getComponent();
                _context.next = 3;
                return c.setState(value);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setStateAsync(_x) {
        return _setStateAsync.apply(this, arguments);
      }

      return setStateAsync;
    }()
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
      _regenerator["default"].mark(function _callee2(params) {
        var navigation;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                navigation = this.getNavigation();
                _context2.next = 3;
                return navigation.setParams(params);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setNaviParamsAsync(_x2) {
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
    key: "renderAsync",
    value: function () {
      var _renderAsync = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var newState;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                newState = this.getNewState();
                _context3.next = 3;
                return this.setStateAsync(newState);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function renderAsync() {
        return _renderAsync.apply(this, arguments);
      }

      return renderAsync;
    }()
  }, {
    key: "reRender",
    value: function reRender() {// reset and render
    }
  }, {
    key: "getStateListenerTarget",
    value: function getStateListenerTarget() {
      return;
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      try {
        return this.constructor.name;
      } catch (e) {
        return 'Invalid Class Name';
      }
    }
  }, {
    key: "getStateListenerClass",
    value: function getStateListenerClass() {
      if (!this._listener) {
        var h = this.getHandler();
        this._listener = this._getStateListenerClass(h);
      }

      return this._listener;
    }
  }, {
    key: "_getStateListenerClass",
    value: function _getStateListenerClass(h) {
      var StateListener =
      /*#__PURE__*/
      function (_PureComponent) {
        (0, _inherits2["default"])(StateListener, _PureComponent);

        function StateListener() {
          (0, _classCallCheck2["default"])(this, StateListener);
          return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StateListener).apply(this, arguments));
        }

        (0, _createClass2["default"])(StateListener, [{
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            h.render();
          }
        }, {
          key: "render",
          value: function render() {
            console.log(h.getClassName(), 'state listener detected target change');
            return null;
          }
        }]);
        return StateListener;
      }(_react.PureComponent);

      var mapStateToProps = function mapStateToProps() {
        var target = h.getStateListenerTarget();
        return {
          target: target
        };
      };

      return (0, _reactRedux.connect)(mapStateToProps)(StateListener);
    }
  }]);
  return LITComponentHandler;
}(_LITBaseHandler2["default"]);

exports["default"] = LITComponentHandler;
