"use strict";

var _Collection = _interopRequireDefault(require("./Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('', function () {
  it('test key to value', function () {
    var c = new _Collection["default"]();
    c.set('a', 'a');
    c.set('b', 'b');
    var value = JSON.stringify(c.get_values());
    var eValue = JSON.stringify(['a', 'b']);
    expect(value).toBe(eValue);
    expect(c.get('a')).toBe('a');
  });
  it('test key to values', function () {
    var c = new _Collection["default"](true);
    c.set('a', 'a');
    c.set('a', 'aa');
    var value = JSON.stringify(c.get('a'));
    var eValue = JSON.stringify(['a', 'aa']);
    expect(value).toBe(eValue);
  });
});
