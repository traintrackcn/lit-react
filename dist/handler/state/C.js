"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(path) {
    _classCallCheck(this, _default);

    this.p = path;
  }

  _createClass(_default, [{
    key: "get",
    value: function get() {
      if (!this.s) throw new Error('stateU.s not found, p -> ' + JSON.stringify(this.p));
      if (!this.p) throw new Error('stateU.p not found');
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
