"use strict";

var _C = _interopRequireDefault(require("./C"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _index = _interopRequireWildcard(require("../index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('', function () {
  beforeAll(function () {
    _index["default"].parse(_index.DEFAULT);
  });
  it('test menu node', function () {
    var raw = _index["default"].get_raw(_index.ck.menu);

    console.log('menu raw ->', raw);
    var node = new _Menu["default"](raw);
  });
  it('test common node', function () {
    var raw = _index["default"].get_raw(_index.ck.sign_up.min.QV); // const ctx = ['r_r'];


    console.log('raw ->', raw);
    var node = new _C["default"](raw);
    console.log('node.base ->', node.base);
    console.log('node.rule ->', node.get(['r_r']));
    console.log('node.rule ->', node.get(['r_r', 'c_it']));
  });
  it.only('test node rule with ctx', function () {
    var raw = {
      "title": "CALENDAR",
      "description": "calendar",
      "r": [{
        "on": true,
        "route": "FN_CALENDAR"
      }],
      "active": true
    };
    var ctx = ['r_d', 'c_cn'];
    var node = new _C["default"](raw);
    var rule = node.get(ctx);
    expect(rule.on).toBe(true);
    expect(rule.route).toBe("FN_CALENDAR");
  });
});
