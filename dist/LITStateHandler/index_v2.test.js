"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _index_v = _interopRequireDefault(require("./index_v2"));

var _p = _interopRequireDefault(require("../__mock__/p"));

var _s = _interopRequireDefault(require("../s"));

it('test set,get,del state', function () {
  var h = new GuestHandler(_p["default"].guest);
  var value = 'abc@email.com';
  h.setStateStore(_s["default"]);
  h.setEmail(value);
  expect(h.getEmail()).toBe(value);

  var state = _s["default"].get(['r']);

  expect(JSON.stringify(state)).toBe('{\"guest\":{\"email\":\"abc@email.com\"}}');
  h.delEmail();
  expect(h.getEmail()).toBe();
});

var GuestHandler =
/*#__PURE__*/
function (_LITStateHandlerV) {
  (0, _inherits2["default"])(GuestHandler, _LITStateHandlerV);

  function GuestHandler() {
    (0, _classCallCheck2["default"])(this, GuestHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GuestHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(GuestHandler, [{
    key: "setEmail",
    value: function setEmail(value) {
      this.setKey(k.EMAIL, value);
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      return this.getKey(k.EMAIL);
    }
  }, {
    key: "delEmail",
    value: function delEmail() {
      this.delKey(k.EMAIL);
    }
  }]);
  return GuestHandler;
}(_index_v["default"]);

var k = {
  EMAIL: 'email'
};
