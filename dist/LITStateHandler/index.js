"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _C = _interopRequireDefault(require("./state/C"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(path) {
    _classCallCheck(this, _default);

    this._s;
    this.children = [];
    this.p = path; // console.log('u name ->', this.constructor.name);

    this._state = new _C["default"](path);
    this.push(this._state);
  }

  _createClass(_default, [{
    key: "get",
    value: function get() {
      return this._state.get();
    }
  }, {
    key: "set",
    value: function set(value) {
      this._state.set(value);
    }
  }, {
    key: "get_value",
    value: function get_value() {
      return this._state.get_value();
    }
  }, {
    key: "set_value",
    value: function set_value(value) {
      this._state.set_value(value);
    }
  }, {
    key: "del_value",
    value: function del_value() {
      this._state.del_value();
    }
  }, {
    key: "del",
    value: function del() {
      this._state.del();
    }
  }, {
    key: "get_collection",
    value: function get_collection() {
      return this._state.get_collection();
    }
  }, {
    key: "set_collection",
    value: function set_collection(value) {
      this._state.set_collection(value);
    }
  }, {
    key: "select",
    value: function select(index) {
      this._state.select(index);
    }
  }, {
    key: "get_selected_index",
    value: function get_selected_index() {
      return this._state.get_selected_index();
    }
  }, {
    key: "push",
    value: function push(childU) {
      this.children.push(childU);
      if (this.s) childU.s = this.s;
    }
  }, {
    key: "get_custom_value",
    value: function get_custom_value(key) {
      var state = this.get();
      return state.get(key);
    }
  }, {
    key: "set_custom_value",
    value: function set_custom_value(key, value) {
      var state = this.get();
      state = state.set(key, value);
      this.set(state);
    }
  }, {
    key: "del_custom_value",
    value: function del_custom_value(key) {
      var state = this.get();
      state = state["delete"](key);
      this.set(state);
    }
  }, {
    key: "s",
    set: function set(value) {
      this._s = value;
      this.children.forEach(function (child) {
        child.s = value;
      });
    },
    get: function get() {
      return this._s;
    }
  }]);

  return _default;
}();

exports["default"] = _default;
