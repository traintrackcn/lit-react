"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _default =
/*#__PURE__*/
function () {
  function _default(pValue, value) {
    (0, _classCallCheck2["default"])(this, _default);
    var list = [];
    if (pValue) list.push(pValue);
    if (value) list.push(value);
    if (list.length) this.value = list.join(',');
  }

  (0, _createClass2["default"])(_default, [{
    key: "isEqual",
    value: function isEqual(anotherK) {
      if (this.value && anotherK) {
        if (this.value === anotherK.value) return true;
      }

      return false;
    }
  }]);
  return _default;
}();

exports["default"] = _default;
