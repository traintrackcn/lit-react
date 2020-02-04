"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _immutable = require("immutable");

// import React from 'react'
var LITReducer =
/*#__PURE__*/
function () {
  function LITReducer() {
    (0, _classCallCheck2["default"])(this, LITReducer);
    var uuid = this.constructor.name + '-' + Math.floor(Math.random() * 100000000);
    this.ns = uuid; //namespace

    this.main = this.main.bind(this);
    this.myAction = this.myAction.bind(this);
    this.reducer = this.reducer.bind(this);
    this.subReducers = {}; // sub reducers;
    // console.log('uuid -> '+uuid);
    // this.store
    // this.r = r;
  }

  (0, _createClass2["default"])(LITReducer, [{
    key: "RESET",
    value: function RESET(newState) {
      return {
        ns: this.ns,
        type: 'RESET',
        newState: newState
      };
    }
  }, {
    key: "refinePath",
    value: function refinePath(path) {
      // console.log('path -> '+path);
      if (!path) throw {
        'reason': 'path is not available for reducer'
      };

      if (path.path) {
        //may be a LITPath Object
        path = path.path;
      }

      if (path[0] === 'r') path = path.slice(1); //remove 'r' for SET action

      return path;
    }
  }, {
    key: "SET",
    value: function SET(path, value) {
      path = this.refinePath(path); // console.log('ns -> '+this.ns);

      return {
        ns: this.ns,
        type: 'SET',
        value: value,
        path: path
      };
    }
  }, {
    key: "DELETE",
    value: function DELETE(path) {
      path = this.refinePath(path); // console.log('ns -> '+this.ns);

      return {
        ns: this.ns,
        type: 'DELETE',
        path: path
      };
    } // action() {
    //     return this.reducer(state, action);
    // }

  }, {
    key: "reducer",
    value: function reducer(state, action) {
      var _this = this;

      // return undefined;
      // console.log('running main() -> '+this.ns+' '+' myAction -> '+this.myAction(action)+' action -> '+'['+action.type+'] '+action.ns);
      state = this.main(state, action); // run sub reducers

      Object.keys(this.subReducers).forEach(function (key) {
        // console.log('key -> '+key);
        var subR = _this.subReducers[key]; // console.log('running sub() -> '+subR.ns);

        var subStateOld = state.get(key);
        var subState = subR.reducer(subStateOld, action); // console.log('subState -> '+subState+' not Map() '+(subState !== Map())+' not OrderedMap() '+(subState !== OrderedMap()));

        if (subStateOld === undefined) {
          //skip assgin default value for unused sub states
          if (subState === (0, _immutable.Map)()) return;
          if (subState === (0, _immutable.OrderedMap)()) return;
        }

        if (subState !== subStateOld) {
          console.log('===== SET STATE for ' + _this.constructor.name + '.' + key); // console.log(this.constructor.name+'.'+key+' stateOld -> '+JSON.stringify(subStateOld, null, 2));
          // console.log(this.constructor.name+'.'+key+' stateNew -> '+JSON.stringify(subState, null, 2));
          // console.log('=======================================');

          state = state.set(key, subState);
        }
      });
      return state;
    }
  }, {
    key: "myAction",
    value: function myAction(action) {
      // console.log('action.ns -> '+action.ns);
      // console.log('this.ns -> '+this.ns);
      if (action && action.ns === this.ns) {
        return true;
      }

      return false;
    }
  }, {
    key: "main",
    value: function main() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
      var action = arguments.length > 1 ? arguments[1] : undefined;
      if (!this.myAction(action)) return state; // console.log('=== ACTION -> '+this.ns+' '+action.type);
      // state = Map();

      switch (action.type) {
        case 'SET':
          {
            state = state.setIn(action.path, action.value);
            return state;
          }

        case 'DELETE':
          {
            // console.log('action.path -> '+action.path);
            // console.log('before DELETE state -> '+state);
            state = state.deleteIn(action.path); // console.log('after DELETE state -> '+state);

            return state;
          }

        case 'RESET':
          {
            state = (0, _immutable.Map)();
            var newState = action.newState;

            if (newState) {
              if (newState.get('r')) {
                state = newState.get('r');
              } else {
                state = newState;
              }
            }

            return state;
          }
      }

      return state;
    }
  }]);
  return LITReducer;
}();

exports["default"] = LITReducer;
