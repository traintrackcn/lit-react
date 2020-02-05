"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _TopHandler = _interopRequireDefault(require("./mock/TopHandler"));

var _index_v = _interopRequireDefault(require("../index_v2"));

var _ = _interopRequireDefault(require(".."));

describe('test state handler', function () {
  var clsArr = [_index_v["default"], _["default"]];

  var _loop = function _loop(index) {
    var cls = clsArr[index];
    var topH = new _TopHandler["default"](null, null, cls);
    var h = topH.getH();
    var hName = h.getClassName();
    it("test ".concat(hName, " setCollection"), function () {
      h.del();
      var collection = ['a', 'b', 'c'];
      h.setCollection(collection);
      expect(h.get()).toMatchSnapshot();
      h.select(1);
      expect(h.getValue()).toMatchSnapshot();
      expect(h.get()).toMatchSnapshot();
    });
    it("test ".concat(hName, " getPath"), function () {
      var expected = '["r","t"]';
      expect(JSON.stringify(h.getPath())).toBe(expected);
    });
    it("test ".concat(hName, " set_value"), function () {
      h.del();
      var value = {
        'key': 'value'
      };
      h.setValue(value);
      expect(h.get()).toMatchSnapshot();
      expect(h.getValue()).toMatchSnapshot();
    });
  };

  for (var index = 0; index < clsArr.length; index++) {
    _loop(index);
  }
});
