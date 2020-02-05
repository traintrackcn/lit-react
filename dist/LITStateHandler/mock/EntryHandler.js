"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _LITBaseHandler = _interopRequireDefault(require("../../LITBaseHandler"));

var _index_v = _interopRequireDefault(require("../index_v2"));

var _p = _interopRequireDefault(require("./p"));

var _s = _interopRequireDefault(require("../../s"));

var _LITComponentHandler2 = _interopRequireDefault(require("../../LITComponentHandler"));

var EntryHandler =
/*#__PURE__*/
function (_LITComponentHandler) {
  (0, _inherits2["default"])(EntryHandler, _LITComponentHandler);

  function EntryHandler(ctx) {
    (0, _classCallCheck2["default"])(this, EntryHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(EntryHandler).call(this, ctx));
  }

  (0, _createClass2["default"])(EntryHandler, [{
    key: "getStateStore",
    value: function getStateStore() {
      return _s["default"];
    }
  }, {
    key: "getH",
    value: function getH() {
      if (!this._h) {
        this._h = new _index_v["default"](_p["default"].t, this);
      }

      return this._h;
    }
  }]);
  return EntryHandler;
}(_LITComponentHandler2["default"]);

exports["default"] = EntryHandler;
