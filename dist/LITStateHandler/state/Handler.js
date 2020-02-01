"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _immutable = require("immutable");

var _default =
/*#__PURE__*/
function () {
  function _default(path) {
    (0, _classCallCheck2["default"])(this, _default);
    this.p = path;
  }

  (0, _createClass2["default"])(_default, [{
    key: "get",
    value: function get() {
      if (!this.s) throw new Error('stateH.s not found, p -> ' + JSON.stringify(this.p));
      if (!this.p) throw new Error('stateH.p not found');
      var state = this.s.get(this.p);
      if (state) return state; // set init state

      this.set({});
      return this.s.get(this.p);
    }
  }, {
    key: "del",
    value: function del() {
      this.s.del(this.p);
    }
  }, {
    key: "set",
    value: function set(value) {
      // console.log('this.p ->', this.p.path, 'value ->', value);
      this.s.set(this.p, value);
    }
  }, {
    key: "set_value",
    value: function set_value(value) {
      var state = this.get();
      state = state.set('value', (0, _immutable.fromJS)(value));
      this.set(state);
    }
  }, {
    key: "del_value",
    value: function del_value() {
      var state = this.get();
      state = state["delete"]('value');
      this.set(state);
    }
  }, {
    key: "get_value",
    value: function get_value() {
      var state = this.get();
      if (!state) return;
      return state.get('value');
    }
  }, {
    key: "set_collection",
    value: function set_collection(value) {
      // console.log('value ->', value);
      var state = this.get(); // console.log('state ->', state);

      state = state.set('collection', (0, _immutable.fromJS)(value)); // console.log('fromJS(state) ->', fromJS(state));

      this.set(state);
    }
  }, {
    key: "get_collection",
    value: function get_collection() {
      var state = this.get();
      return state.get('collection');
    }
  }, {
    key: "get_selected_index",
    value: function get_selected_index() {
      var state = this.get();
      return state.get('index');
    }
  }, {
    key: "select",
    value: function select(index) {
      if (index === undefined) return;
      var state = this.get();
      var collection = this.get_collection();
      if (!collection) return;
      var value = collection.get(index);
      state = state.set('index', index);
      state = state.set('value', value);
      this.set(state);
    }
  }]);
  return _default;
}();

exports["default"] = _default;
