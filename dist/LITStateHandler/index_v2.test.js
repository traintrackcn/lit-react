"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _EntryHandler = _interopRequireDefault(require("./mock/EntryHandler"));

var _TopHandler = _interopRequireDefault(require("./mock/TopHandler"));

// h.setStateStore(s);
var topH = new _TopHandler["default"]();
var h = topH.getH();
describe('test state handler', function () {
  it('test setCollection', function () {
    h.del();
    var collection = ['a', 'b', 'c'];
    h.setCollection(collection);
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
});
