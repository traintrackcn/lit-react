"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _StateHandler = _interopRequireDefault(require("./mock/StateHandler"));

var _TopComponent = _interopRequireDefault(require("./mock/TopComponent"));

var _react = _interopRequireDefault(require("react"));

var _TopHandler = _interopRequireDefault(require("./mock/TopHandler"));

it('test get handler from child state handler', function () {
  var ref = function ref(_ref) {
    var h = _ref.getHandler();

    var childHWithArrayPath = h.getChildStateHandlerWithArrayPath();
    var childHWithObjectPath = h.getChildStateHandlerWithObjectPath();
    expect(childHWithArrayPath.getHandler()).toBe(h);
    expect(childHWithObjectPath.getHandler()).toBe(h);
    expect(childHWithObjectPath.p).toBeTruthy();
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
    ref: ref
  }));
});
it('test get handler from child component handler', function () {
  var ref = function ref(_ref2) {
    var h = _ref2.getHandler();

    var childH = h.getChildComponentHandler();
    expect(childH.getHandler()).toBe(h);
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
    ref: ref
  }));
});
it('test get handler from child common handler', function () {
  var ref = function ref(_ref3) {
    var h = _ref3.getHandler();

    var childComponentH = h.getChildComponentHandler();
    var childH = h.getChildHandler();
    expect(childH.getHandler()).toBe(h);
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
    ref: ref
  }));
});
it.only('test get custom handler from child handler', function () {
  var h = new _TopHandler["default"]();
  var childH = h.getChildHandler();
  expect(childH.getCustomHandler()).toBe('ok');
});
it('test state handler without path', function () {
  var h = new _StateHandler["default"]();
  expect(h).toBe(h);
});
