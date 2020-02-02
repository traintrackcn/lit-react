"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _CommonHandler = _interopRequireDefault(require("./mock/CommonHandler"));

it('get handler name', function () {
  var h = new _CommonHandler["default"]();
  expect(h.className).toBe('CommonHandler');
});
