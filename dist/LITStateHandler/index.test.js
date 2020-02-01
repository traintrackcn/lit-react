"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("."));

var _s = _interopRequireDefault(require("../s"));

var _p = _interopRequireDefault(require("./p"));

var _immutable = require("immutable");

var h = new _["default"](_p["default"].t);
h.s = _s["default"];
describe('test state handler', function () {
  it('test set_collection', function () {
    h.del();
    var collection = ['a', 'b', 'c'];
    h.set_collection((0, _immutable.fromJS)(collection));
    expect(h.get()).toMatchSnapshot();
    h.select(1);
    expect(h.getValue()).toMatchSnapshot();
    expect(h.get()).toMatchSnapshot();
  });
  it('test getPath', function () {
    var expected = '["r","t"]';
    expect(JSON.stringify(h.getPath())).toBe(expected);
  });
  it('test set_value', function () {
    h.del();
    var value = {
      'key': 'value'
    };
    h.setValue(value);
    expect(h.get()).toMatchSnapshot();
    expect(h.getValue()).toMatchSnapshot();
  });
  it('test s ops', function () {
    _s["default"].set(_p["default"].a, 'a');

    expect(_s["default"].get(_p["default"].a)).toMatchSnapshot();

    _s["default"].set(_p["default"].a, undefined);

    expect(_s["default"].get(_p["default"].a)).toBeFalsy();
  });
});
