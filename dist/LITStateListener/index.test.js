"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("../__mock__/App"));

it('', function () {
  var ref = function ref(_ref) {// expect(childH.getHandler()).toBe(h);
  };

  _reactTestRenderer["default"].create(_react["default"].createElement(_App["default"], {
    ref: ref
  }));
});
