"use strict";

var _Handler = _interopRequireDefault(require("./Handler"));

var _Key = _interopRequireDefault(require("./Key"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('', function () {
  var handler = new _Handler["default"]();
  beforeAll(function () {
    handler.parse(raw);
  });
  it('current map', function () {
    expect(handler.map).toMatchSnapshot();
  });
  it('get raw node "config,menu"', function () {
    var key = new _Key["default"]();
    key.value = 'config,menu';
    expect(handler.get_raw_node(key)).toMatchSnapshot();
    expect(handler.get_raw_node('config,menu')).toMatchSnapshot();
  });
  it('get node "config,menu"', function () {
    var key = new _Key["default"]();
    key.value = 'config,menu';
    expect(handler.get_node(key)).toMatchSnapshot();
    expect(handler.get_node('config,menu')).toMatchSnapshot();
  });
  it('get node "config,menu,undefined"', function () {
    var key = new _Key["default"]();
    var kValue = 'config,menu,undefined';
    key.value = kValue;
    expect(handler.get_node(key)).toMatchSnapshot();
    expect(handler.get_node(kValue)).toMatchSnapshot();
  });
  it('get node "config,menu,web" base rule', function () {
    var key = new _Key["default"]();
    key.value = 'config,menu,WEB';
    expect(handler.get(key)).toMatchSnapshot();
    expect(handler.get('config,menu,WEB')).toMatchSnapshot();
    var ctx = ['prj1'];
    expect(handler.get(key, ctx)).toMatchSnapshot();
  });
});
var raw = [{
  "title": "menu",
  "expanded": true,
  "children": [{
    "title": "SERVICE",
    "active": true
  }, {
    "title": "BOT",
    "active": true
  }, {
    "title": "CONFIG",
    "expanded": true,
    "active": true
  }]
}, {
  "title": "config",
  "expanded": true,
  "children": [{
    "title": "menu",
    "expanded": false,
    "children": [{
      "title": "WEB",
      "r": [{
        "on": true,
        "base": "LIT"
      }, {
        "_": ["prj1"],
        "base": "OTHER"
      }],
      "active": true
    }, {
      "title": "APP",
      "r": [{
        "on": true,
        "base": "LIT"
      }],
      "expanded": true,
      "active": true
    }, {
      "title": "API",
      "active": true
    }, {
      "title": "MISC",
      "active": true
    }]
  }]
}];
