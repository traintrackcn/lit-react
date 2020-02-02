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

var _Handler = _interopRequireDefault(require("./state/Handler"));

var _LITBaseHandler2 = _interopRequireDefault(require("../LITBaseHandler"));

var LITStateHandler =
/*#__PURE__*/
function (_LITBaseHandler) {
  (0, _inherits2["default"])(LITStateHandler, _LITBaseHandler);

  function LITStateHandler(path, ctx) {
    var _this;

    (0, _classCallCheck2["default"])(this, LITStateHandler);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LITStateHandler).call(this, path, ctx));

    _this.setupPath();

    return _this;
  }

  (0, _createClass2["default"])(LITStateHandler, [{
    key: "setupPath",
    value: function setupPath() {
      try {
        this.p = this.getPath();
      } catch (e) {}
    }
  }, {
    key: "getStateHandler",
    value: function getStateHandler() {
      if (!this._state) {
        var path = this.getPath();
        this._state = new _Handler["default"](path);
        this.push(this._state);
      }

      return this._state;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      if (!this._children) {
        this._children = [];
      }

      return this._children;
    }
  }, {
    key: "push",
    value: function push(childH) {
      var children = this.getChildren();
      children.push(childH);
      if (this.s) childH.s = this.s;
    }
  }, {
    key: "get",
    value: function get() {
      var h = this.getStateHandler();
      return h.get();
    }
  }, {
    key: "set",
    value: function set(value) {
      var h = this.getStateHandler();
      h.set(value);
    }
  }, {
    key: "del",
    value: function del() {
      var h = this.getStateHandler();
      h.del();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var h = this.getStateHandler();
      return h.get_value();
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var h = this.getStateHandler();
      h.set_value(value);
    }
  }, {
    key: "delValue",
    value: function delValue() {
      var h = this.getStateHandler();
      h.del_value();
    }
  }, {
    key: "getKey",
    value: function getKey(key) {
      var h = this.getStateHandler();
      var state = h.get();
      return state.get(key);
    }
    /**
     * @deprecated
     */

  }, {
    key: "setKey",
    value: function setKey(key, value) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state.set(key, value);
      this.set(state);
    }
  }, {
    key: "delKey",
    value: function delKey(key) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state["delete"](key);
      this.set(state);
    }
  }, {
    key: "getCollection",
    value: function getCollection() {
      var h = this.getStateHandler();
      return h.get_collection();
    }
  }, {
    key: "setCollection",
    value: function setCollection(value) {
      var h = this.getStateHandler();
      h.set_collection(value);
    }
  }, {
    key: "select",
    value: function select(index) {
      var h = this.getStateHandler();
      h.select(index);
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      var h = this.getStateHandler();
      return h.get_selected_index();
    }
    /**
     * @deprecated
     */

  }, {
    key: "get_value",
    value: function get_value() {
      return this.getValue();
    }
    /**
     * @deprecated
     */

  }, {
    key: "set_value",
    value: function set_value(value) {
      this.setValue(value);
    }
    /**
     * @deprecated
     */

  }, {
    key: "del_value",
    value: function del_value() {
      this.delValue();
    }
    /**
     * @deprecated
     */

  }, {
    key: "get_collection",
    value: function get_collection() {
      return this.getCollection();
    }
    /**
     * @deprecated
     */

  }, {
    key: "set_collection",
    value: function set_collection(value) {
      this.setCollection(value);
    }
    /**
     * @deprecated
     */

  }, {
    key: "get_selected_index",
    value: function get_selected_index() {
      return this._state.get_selected_index();
    }
    /**
     * @deprecated
     */

  }, {
    key: "get_custom_value",
    value: function get_custom_value(key) {
      var h = this.getStateHandler();
      var state = h.get();
      return state.get(key);
    }
    /**
     * @deprecated
     */

  }, {
    key: "set_custom_value",
    value: function set_custom_value(key, value) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state.set(key, value);
      this.set(state);
    }
    /**
     * @deprecated
     */

  }, {
    key: "del_custom_value",
    value: function del_custom_value(key) {
      var h = this.getStateHandler();
      var state = h.get();
      state = state["delete"](key);
      this.set(state);
    }
  }, {
    key: "s",
    set: function set(value) {
      this._s = value;
      var children = this.getChildren();
      children.forEach(function (child) {
        child.s = value;
      });
    },
    get: function get() {
      return this._s;
    }
  }]);
  return LITStateHandler;
}(_LITBaseHandler2["default"]);

exports["default"] = LITStateHandler;
