"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _ = _interopRequireDefault(require(".."));

var _index_v = _interopRequireDefault(require("../index_v2"));

var _p3 = _interopRequireDefault(require("../mock/p"));

var _s = _interopRequireDefault(require("../../s"));

it('test pattern 1, create child handlers in constructor', function () {
  var h = new TopHandlerPattern1(_p3["default"]);
  h.s = _s["default"];
  test([h.h1, h.h2]);
});
it('test pattern 3, use "getXXX" to create child handlers', function () {
  var h = new TopHandlerPattern3(_p3["default"]);
  test([h.getH1(), h.getH2()]);
});

var test = function test(handlers) {
  handlers.forEach(function (h) {
    expect(h.s).toBeTruthy();
    expect(h.getStateStore()).toBeTruthy();
    h.set();
  });
};

var TopHandlerPattern1 =
/*#__PURE__*/
function (_LITStateHandler) {
  (0, _inherits2["default"])(TopHandlerPattern1, _LITStateHandler);

  function TopHandlerPattern1(path) {
    var _this;

    (0, _classCallCheck2["default"])(this, TopHandlerPattern1);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandlerPattern1).call(this, path));
    _this.h1 = new _["default"](_this.p.a);

    _this.push(_this.h1);

    _this.h2 = new _index_v["default"](_this.p.a);

    _this.push(_this.h2);

    return _this;
  }

  return TopHandlerPattern1;
}(_["default"]);
/**
 * won't support this pattern
 */


var TopHandlerPattern2 =
/*#__PURE__*/
function (_LITStateHandlerV) {
  (0, _inherits2["default"])(TopHandlerPattern2, _LITStateHandlerV);

  function TopHandlerPattern2(path) {
    var _this2;

    (0, _classCallCheck2["default"])(this, TopHandlerPattern2);
    _this2 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandlerPattern2).call(this, path));
    _this2.h1 = new _["default"](_this2.p.a);

    _this2.push(_this2.h1);

    _this2.h2 = new _index_v["default"](_this2.p.a);

    _this2.push(_this2.h2);

    return _this2;
  }

  return TopHandlerPattern2;
}(_index_v["default"]);

var TopHandlerPattern3 =
/*#__PURE__*/
function (_LITStateHandlerV2) {
  (0, _inherits2["default"])(TopHandlerPattern3, _LITStateHandlerV2);

  function TopHandlerPattern3(path, ctx) {
    (0, _classCallCheck2["default"])(this, TopHandlerPattern3);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TopHandlerPattern3).call(this, path, ctx));
  }

  (0, _createClass2["default"])(TopHandlerPattern3, [{
    key: "getStateStore",
    value: function getStateStore() {
      return _s["default"];
    }
  }, {
    key: "getH1",
    value: function getH1() {
      if (!this._h1) {
        var _p = this.getPath();

        this._h1 = new _["default"](_p.a, this);
      }

      return this._h1;
    }
  }, {
    key: "getH2",
    value: function getH2() {
      if (!this._h2) {
        var _p2 = this.getPath();

        this._h2 = new _index_v["default"](_p2.a, this);
      }

      return this._h2;
    }
  }]);
  return TopHandlerPattern3;
}(_index_v["default"]);
