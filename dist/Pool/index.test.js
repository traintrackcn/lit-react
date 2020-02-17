"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _index = _interopRequireDefault(require("./index"));

it('', function () {
  var pool = new _index["default"]();
  var instance = pool.get(TestHandler, 1, 2, 3);
  expect(instance.a).toBe(1);
  expect(instance.b).toBe(2);
  expect(instance.c).toBe(3);
  var keys = Object.keys(pool._getCache());
  expect(keys[0]).toBe('TestHandler');
  expect(pool.get(TestHandler)).toBe(instance);
});

var TestHandler = function TestHandler(a, b, c) {
  (0, _classCallCheck2["default"])(this, TestHandler);
  this.a = a;
  this.b = b;
  this.c = c;
};
