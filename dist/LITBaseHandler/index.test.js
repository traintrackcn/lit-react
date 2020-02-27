"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _index = _interopRequireDefault(require("./index"));

var _p = _interopRequireDefault(require("../__mock__/p"));

describe('test handler', function () {
  it('test handler21', function () {
    var h = new TopHandler();
    var h2 = h.getChildHandler2();
    var h21 = h2.getChildHandler1();
    var result = h21.getHandler();
    expect(result).toBe(h);
  });
  it('test handler11', function () {
    var h = new TopHandler();
    var h1 = h.getChildHandler1();
    var h11 = h1.getChildHandler1();
    var result = h11.getHandler();
    expect(result).toBe(h);
  });
  it('test getPath', function () {
    var h = new _index["default"](_p["default"].a);
    expect(JSON.stringify(h.getPath())).toBe("[\"r\",\"a\"]");
    expect(JSON.stringify(h.getPath('a1'))).toBe("[\"r\",\"a\",\"a1\"]");
  });
});

var TopHandler =
/*#__PURE__*/
function (_LITHandler) {
  (0, _inherits2["default"])(TopHandler, _LITHandler);

  function TopHandler() {
    (0, _classCallCheck2["default"])(this, TopHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandler).call(this));
  }

  (0, _createClass2["default"])(TopHandler, [{
    key: "getChildHandler1",
    value: function getChildHandler1() {
      if (!this._h1) {
        this._h1 = new ChildHandler1(this);
      }

      return this._h1;
    }
  }, {
    key: "getChildHandler2",
    value: function getChildHandler2() {
      if (!this._h2) {
        this._h2 = new ChildHandler2(this);
      }

      return this._h2;
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      return this;
    }
  }]);
  return TopHandler;
}(_index["default"]);

var ChildHandler1 =
/*#__PURE__*/
function (_LITHandler2) {
  (0, _inherits2["default"])(ChildHandler1, _LITHandler2);

  function ChildHandler1() {
    (0, _classCallCheck2["default"])(this, ChildHandler1);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ChildHandler1).apply(this, arguments));
  }

  (0, _createClass2["default"])(ChildHandler1, [{
    key: "getChildHandler1",
    value: function getChildHandler1() {
      if (!this._h1) {
        this._h1 = new _index["default"](this);
      }

      return this._h1;
    }
  }]);
  return ChildHandler1;
}(_index["default"]);

var ChildHandler2 =
/*#__PURE__*/
function (_LITHandler3) {
  (0, _inherits2["default"])(ChildHandler2, _LITHandler3);

  function ChildHandler2() {
    (0, _classCallCheck2["default"])(this, ChildHandler2);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ChildHandler2).apply(this, arguments));
  }

  (0, _createClass2["default"])(ChildHandler2, [{
    key: "getChildHandler1",
    value: function getChildHandler1() {
      if (!this._h1) {
        this._h1 = new _index["default"](this);
      }

      return this._h1;
    }
  }]);
  return ChildHandler2;
}(_index["default"]);
