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
  function _default(keyToArray) {
    (0, _classCallCheck2["default"])(this, _default);
    this.keyToArray = keyToArray;
    this.reset();
  }

  (0, _createClass2["default"])(_default, [{
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
