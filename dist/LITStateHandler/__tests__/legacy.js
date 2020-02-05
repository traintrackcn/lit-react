"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _ = _interopRequireDefault(require(".."));

var _p = _interopRequireDefault(require("../mock/p"));

var _s = _interopRequireDefault(require("../../s"));

it('', function () {
  var h = new AutoshipHandler(_p["default"]);
  h.s = _s["default"];
  expect(h.date.getStateStore()).toBeTruthy();
  expect(h.frequency.s).toBeTruthy();
});

var AutoshipHandler =
/*#__PURE__*/
function (_LITStateHandler) {
  (0, _inherits2["default"])(AutoshipHandler, _LITStateHandler);

  function AutoshipHandler(path) {
    var _this;

    (0, _classCallCheck2["default"])(this, AutoshipHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AutoshipHandler).call(this, path));
    _this.date = new _["default"](_this.p.date);

    _this.push(_this.date);

    _this.frequency = new _["default"](_this.p.frequency);

    _this.push(_this.frequency);

    return _this;
  }

  return AutoshipHandler;
}(_["default"]);
