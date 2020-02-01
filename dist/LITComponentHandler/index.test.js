"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _LITPureComponent2 = _interopRequireDefault(require("../LITPureComponent"));

var _ = _interopRequireDefault(require("."));

var _LITStateHandler2 = _interopRequireDefault(require("../LITStateHandler"));

var _LITHandler2 = _interopRequireDefault(require("../LITHandler"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _p = _interopRequireDefault(require("../LITStateHandler/p"));

describe('test component handler', function () {
  it('test getHandler()', function () {
    var refComponent = function refComponent(ref) {
      var h = ref.getHandler();
      var childStateHWithArrayPath = h.getChildStateHandlerWithArrayPath();
      var childStateHWithObjectPath = h.getChildStateHandlerWithObjectPath();
      var stateHWithoutPath = new StateHandler();
      var childComponentH = h.getChildComponentHandler();
      var childH = h.getChildHandler();
      expect(childStateHWithArrayPath.getHandler()).toBe(h);
      expect(childStateHWithObjectPath.getHandler()).toBe(h);
      expect(stateHWithoutPath).toBe(stateHWithoutPath);
      expect(childComponentH.getHandler()).toBe(h);
      expect(childH.getHandler()).toBe(h);
    };

    _reactTestRenderer["default"].create(_react["default"].createElement(TestComponent, {
      ref: refComponent
    }));
  });
});

var TestComponent =
/*#__PURE__*/
function (_LITPureComponent) {
  (0, _inherits2["default"])(TestComponent, _LITPureComponent);

  function TestComponent() {
    (0, _classCallCheck2["default"])(this, TestComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TestComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(TestComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      if (!this._handler) {
        this._handler = new TopHandler(this);
      }

      return this._handler;
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      return _react["default"].createElement("div", null, "test");
    }
  }]);
  return TestComponent;
}(_LITPureComponent2["default"]);

var TopHandler =
/*#__PURE__*/
function (_LITComponentHandler) {
  (0, _inherits2["default"])(TopHandler, _LITComponentHandler);

  function TopHandler() {
    (0, _classCallCheck2["default"])(this, TopHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(TopHandler, [{
    key: "getChildStateHandlerWithArrayPath",
    value: function getChildStateHandlerWithArrayPath() {
      if (!this._state) {
        this._state = new StateHandler(_p["default"].t, this);
      }

      return this._state;
    }
  }, {
    key: "getChildStateHandlerWithObjectPath",
    value: function getChildStateHandlerWithObjectPath() {
      if (!this._state1) {
        this._state1 = new StateHandler(_p["default"], this);
      }

      return this._state1;
    }
  }, {
    key: "getChildComponentHandler",
    value: function getChildComponentHandler() {
      if (!this._component) {
        this._component = new ComponentHandler(this);
      }

      return this._component;
    }
  }, {
    key: "getChildHandler",
    value: function getChildHandler() {
      if (!this._common) {
        this._common = new CommonHandler(this);
      }

      return this._common;
    }
  }]);
  return TopHandler;
}(_["default"]);

var StateHandler =
/*#__PURE__*/
function (_LITStateHandler) {
  (0, _inherits2["default"])(StateHandler, _LITStateHandler);

  function StateHandler() {
    (0, _classCallCheck2["default"])(this, StateHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StateHandler).apply(this, arguments));
  }

  return StateHandler;
}(_LITStateHandler2["default"]);

var ComponentHandler =
/*#__PURE__*/
function (_LITComponentHandler2) {
  (0, _inherits2["default"])(ComponentHandler, _LITComponentHandler2);

  function ComponentHandler() {
    (0, _classCallCheck2["default"])(this, ComponentHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ComponentHandler).apply(this, arguments));
  }

  return ComponentHandler;
}(_["default"]);

var CommonHandler =
/*#__PURE__*/
function (_LITHandler) {
  (0, _inherits2["default"])(CommonHandler, _LITHandler);

  function CommonHandler() {
    (0, _classCallCheck2["default"])(this, CommonHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CommonHandler).apply(this, arguments));
  }

  return CommonHandler;
}(_LITHandler2["default"]);
