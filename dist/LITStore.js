"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _immutable = require("immutable");

var LITStore =
/*#__PURE__*/
function () {
  function LITStore(store, r) {
    (0, _classCallCheck2["default"])(this, LITStore);
    this.store = store;
    this.r = r;
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.del = this.del.bind(this);
  }

  (0, _createClass2["default"])(LITStore, [{
    key: "dispatch",
    value: function dispatch(action) {
      return this.store.dispatch(action);
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.store.getState();
    }
  }, {
    key: "get",
    value: function get(path) {
      if (!path) throw new Error('path is unavailable');
      if (path.path) path = path.path;

      if (!(path instanceof Array)) {
        var current = 'UNKNOWN'; // console.log('path type -> '+path.prop.constructor);

        if (path.constructor) current = path.constructor.name;
        throw new Error('path should be array. current ' + current);
      }

      var state = this.store.getState();
      return state.getIn(path);
    }
  }, {
    key: "set",
    value: function set(path, value) {
      var r = this.r;

      if (!value) {
        this.del(path);
        return;
      }

      if (!value.toJS) value = (0, _immutable.fromJS)(value); // if it's plain js object , convert it to immutable object first

      this.store.dispatch(r.SET(path, value)); // console.log('dispatched r.SET ->', value);
    }
  }, {
    key: "del",
    value: function del(path) {
      var r = this.r;
      this.store.dispatch(r.DELETE(path));
      console.log('dispatched r.DELETE');
    }
  }]);
  return LITStore;
}();

exports["default"] = LITStore;
