"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LITStore =
/*#__PURE__*/
function () {
  function LITStore(store) {
    _classCallCheck(this, LITStore);

    console.log('store -> ' + store);
    this.store = store;
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.del = this.del.bind(this);
  }

  _createClass(LITStore, [{
    key: "dispatch",
    value: function dispatch(action) {
      // console.log('this.store -> '+this.store);
      // console.log('this.store.dispatch -> '+this.store.dispatch);
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
      if (!path) throw {
        'reason': 'path is unavailable'
      };
      if (path.path) path = path.path;

      if (!(path instanceof Array)) {
        var current = 'UNKNOWN'; // console.log('path type -> '+path.prop.constructor);

        if (path.constructor) current = path.constructor.name;
        throw {
          'reason': 'path should be array. current ' + current
        };
      }

      var state = this.store.getState();
      return state.getIn(path);
    }
  }, {
    key: "set",
    value: function set(path, value) {
      var r = this.r; // console.log('s.set() path -> '+JSON.stringify(path, null, 2));
      // console.log('s.set() value -> '+JSON.stringify(value, null, 2));

      this.store.dispatch(r.SET(path, value));
    }
  }, {
    key: "del",
    value: function del(path) {
      var r = this.r; // console.log('setIn -> '+JSON.stringify(path)+' '+value);

      this.store.dispatch(r.DELETE(path));
    }
  }]);

  return LITStore;
}();

exports["default"] = LITStore;