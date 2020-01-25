"use strict";

var _ = _interopRequireDefault(require("."));

var _s = _interopRequireDefault(require("../s"));

var _p = _interopRequireDefault(require("./p"));

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stateU = new _["default"](_p["default"].t);
stateU.s = _s["default"];
describe('', function () {
  it('test set_collection', function () {
    stateU.del();
    var collection = ['a', 'b', 'c'];
    stateU.set_collection((0, _immutable.fromJS)(collection));
    expect(stateU.get()).toMatchSnapshot();
    stateU.select(1);
    expect(stateU.get_value()).toMatchSnapshot();
    expect(stateU.get()).toMatchSnapshot();
  });
  it('test set_value', function () {
    stateU.del();
    var value = {
      'key': 'value'
    };
    stateU.set_value(value);
    expect(stateU.get()).toMatchSnapshot();
    expect(stateU.get_value()).toMatchSnapshot();
  });
  it('test s ops', function () {
    _s["default"].set(_p["default"].a, 'a');

    expect(_s["default"].get(_p["default"].a)).toMatchSnapshot();

    _s["default"].set(_p["default"].a, undefined);

    expect(_s["default"].get(_p["default"].a)).toBeFalsy();
  });
});
