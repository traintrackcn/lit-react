"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _TopComponent = _interopRequireDefault(require("./mock/TopComponent"));

beforeAll(function () {
  console.log('beforeAll');
});
it('test get component from top handler', function () {
  var ref = function ref(_ref) {
    var h = _ref.getHandler();

    expect(h.getComponent()).toBeTruthy();
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
    ref: ref
  }));
});
it('test get component from child handler', function () {
  var ref = function ref(_ref2) {
    var h = _ref2.getHandler();

    var childComponentH = h.getChildComponentHandler();
    expect(childComponentH.getComponent()).toBeTruthy();
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
    ref: ref
  }));
});
