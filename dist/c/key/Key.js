"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(pValue, value) {
    _classCallCheck(this, _default);

    var list = [];
    if (pValue) list.push(pValue);
    if (value) list.push(value);
    if (list.length) this.value = list.join(',');
  }

  _createClass(_default, [{
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
