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
  function _default(keyToArray) {
    _classCallCheck(this, _default);

    this.keyToArray = keyToArray;
    this.reset();
  }

  _createClass(_default, [{
    key: "set",
    value: function set(key, value) {
      if (this.keyToArray) {
        this._push(key, value);

        return;
      }

      this.data[key] = value;
    }
  }, {
    key: "_push",
    value: function _push(key, value) {
      var values = this.data[key];

      if (!values) {
        this.data[key] = []; // create empty array for key

        this._push(key, value);

        return;
      }

      values.push(value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
    /**
     * @deprecated
    */

  }, {
    key: "get_values",
    value: function get_values() {
      return this.getList();
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      return Object.keys(this.data);
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this.getList();
    }
  }, {
    key: "getList",
    value: function getList() {
      return Object.values(this.data);
    }
  }, {
    key: "getSize",
    value: function getSize() {
      var values = this.getValues();
      return values.length;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.data = {};
    }
  }]);

  return _default;
}();

exports["default"] = _default;
