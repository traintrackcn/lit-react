"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LITReducer =
/*#__PURE__*/
function () {
  function LITReducer() {
    _classCallCheck(this, LITReducer);

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

  _createClass(LITReducer, [{
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
    }
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
      if (!this.myAction(action)) return state;
      console.log('=== ACTION -> ' + this.ns + ' ' + action.type); // state = Map();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MSVRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkxJVFJlZHVjZXIiLCJ1dWlkIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibnMiLCJtYWluIiwiYmluZCIsIm15QWN0aW9uIiwicmVkdWNlciIsInN1YlJlZHVjZXJzIiwibmV3U3RhdGUiLCJ0eXBlIiwicGF0aCIsInNsaWNlIiwidmFsdWUiLCJyZWZpbmVQYXRoIiwic3RhdGUiLCJhY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInN1YlIiLCJzdWJTdGF0ZU9sZCIsImdldCIsInN1YlN0YXRlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInNldCIsInNldEluIiwiZGVsZXRlSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFU7OztBQUVqQix3QkFBYTtBQUFBOztBQUNULFFBQU1DLElBQUksR0FBRyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixHQUFzQixHQUF0QixHQUEwQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLFNBQXpCLENBQXZDO0FBQ0EsU0FBS0MsRUFBTCxHQUFVTixJQUFWLENBRlMsQ0FFTzs7QUFDaEIsU0FBS08sSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsU0FBS0csV0FBTCxHQUFtQixFQUFuQixDQU5TLENBTWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0g7Ozs7MEJBRUtDLFEsRUFBUztBQUNYLGFBQU87QUFDSE4sUUFBQUEsRUFBRSxFQUFFLEtBQUtBLEVBRE47QUFFSE8sUUFBQUEs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bUJBQWlCLEtBQUt4QixFQUF0QixHQUF5QixHQUF6QixHQUE2QmEsTUFBTSxDQUFDTixJQUFoRCxFQUpzQixDQUt0Qjs7QUFDQSxjQUFPTSxNQUFNLENBQUNOLElBQWQ7QUFDSSxhQUFLLEtBQUw7QUFBVztBQUNQSyxZQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2MsS0FBTixDQUFZYixNQUFNLENBQUNMLElBQW5CLEVBQXlCSyxNQUFNLENBQUNILEtBQWhDLENBQVI7QUFDQSxtQkFBT0UsS0FBUDtBQUNIOztBQUVELGFBQUssUUFBTDtBQUFjO0FBQ1Y7QUFDQTtBQUNBQSxZQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2UsUUFBTixDQUFlZCxNQUFNLENBQUNMLElBQXRCLENBQVIsQ0FIVSxDQUlWOztBQUNBLG1CQUFPSSxLQUFQO0FBQ0g7O0FBRUQsYUFBSyxPQUFMO0FBQWE7QUFDVEEsWUFBQUEsS0FBSyxHQUFHLHFCQUFSO0FBQ0EsZ0JBQUlOLFFBQVEsR0FBR08sTUFBTSxDQUFDUCxRQUF0Qjs7QUFDQSxnQkFBSUEsUUFBSixFQUFjO0FBQ1Ysa0JBQUlBLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLEdBQWIsQ0FBSixFQUFzQjtBQUNsQlIsZ0JBQUFBLEtBQUssR0FBR04sUUFBUSxDQUFDYyxHQUFULENBQWEsR0FBYixDQUFSO0FBQ0gsZUFGRCxNQUVLO0FBQ0RSLGdCQUFBQSxLQUFLLEdBQUdOLFFBQVI7QUFDSDtBQUVKOztBQUNELG1CQUFPTSxLQUFQO0FBQ0g7QUExQkw7O0FBNkJBLGFBQU9BLEtBQVA7QUFFSCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hcCwgTGlzdCwgT3JkZXJlZE1hcCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExJVFJlZHVjZXIge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuY29uc3RydWN0b3IubmFtZSsnLScrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDAwMDAwMCk7XG4gICAgICAgIHRoaXMubnMgPSB1dWlkOyAvL25hbWVzcGFjZVxuICAgICAgICB0aGlzLm1haW4gPSB0aGlzLm1haW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5teUFjdGlvbiA9IHRoaXMubXlBY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWR1Y2VyID0gdGhpcy5yZWR1Y2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3ViUmVkdWNlcnMgPSB7fTsgLy8gc3ViIHJlZHVjZXJzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndXVpZCAtPiAnK3V1aWQpO1xuICAgICAgICAvLyB0aGlzLnN0b3JlXG4gICAgICAgIC8vIHRoaXMuciA9IHI7XG4gICAgfVxuXG4gICAgUkVTRVQobmV3U3RhdGUpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbnM6IHRoaXMubnMsXG4gICAgICAgICAgICB0eXBlOiAnUkVTRVQnLFxuICAgICAgICAgICAgbmV3U3RhdGU6IG5ld1N0YXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlZmluZVBhdGgocGF0aCl7XG4gICAgICAgICAvLyBjb25zb2xlLmxvZygncGF0aCAtPiAnK3BhdGgpO1xuXG4gICAgICAgICBpZiAoIXBhdGgpIHRocm93IHsgJ3JlYXNvbic6ICdwYXRoIGlzIG5vdCBhdmFpbGFibGUgZm9yIHJlZHVjZXInfTtcblxuICAgICAgICAgaWYgKHBhdGgucGF0aCl7IC8vbWF5IGJlIGEgTElUUGF0aCBPYmplY3RcbiAgICAgICAgICAgICBwYXRoID0gcGF0aC5wYXRoO1xuICAgICAgICAgfVxuIFxuICAgICAgICAgaWYgKHBhdGhbMF0gPT09ICdyJykgcGF0aCA9IHBhdGguc2xpY2UoMSk7IC8vcmVtb3ZlICdyJyBmb3IgU0VUIGFjdGlvblxuXG4gICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgXG4gICAgU0VUKHBhdGgsIHZhbHVlKSB7XG5cbiAgICAgICAgcGF0aCA9IHRoaXMucmVmaW5lUGF0aChwYXRoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25zIC0+ICcrdGhpcy5ucyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuczogdGhpcy5ucyxcbiAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBERUxFVEUocGF0aCkge1xuXG4gICAgICAgIHBhdGggPSB0aGlzLnJlZmluZVBhdGgocGF0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCducyAtPiAnK3RoaXMubnMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbnM6IHRoaXMubnMsXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG5cbiAgICAgICAgLy8gcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3J1bm5pbmcgbWFpbigpIC0+ICcrdGhpcy5ucysnICcrJyBteUFjdGlvbiAtPiAnK3RoaXMubXlBY3Rpb24oYWN0aW9uKSsnIGFjdGlvbiAtPiAnKydbJythY3Rpb24udHlwZSsnXSAnK2FjdGlvbi5ucyk7XG4gICAgICAgIHN0YXRlID0gdGhpcy5tYWluKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8gcnVuIHN1YiByZWR1Y2Vyc1xuICAgICAgICBPYmplY3Qua2V5cyggdGhpcy5zdWJSZWR1Y2VycyApLmZvckVhY2goIChrZXkpID0+IHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleSAtPiAnK2tleSk7XG4gICAgICAgICAgICBjb25zdCBzdWJSID0gdGhpcy5zdWJSZWR1Y2Vyc1trZXldO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3J1bm5pbmcgc3ViKCkgLT4gJytzdWJSLm5zKTtcblxuXG4gICAgICAgICAgICBjb25zdCBzdWJTdGF0ZU9sZCA9IHN0YXRlLmdldChrZXkpO1xuICAgICAgICAgICAgY29uc3Qgc3ViU3RhdGUgPSBzdWJSLnJlZHVjZXIoIHN1YlN0YXRlT2xkLCBhY3Rpb24gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1YlN0YXRlIC0+ICcrc3ViU3RhdGUrJyBub3QgTWFwKCkgJysoc3ViU3RhdGUgIT09IE1hcCgpKSsnIG5vdCBPcmRlcmVkTWFwKCkgJysoc3ViU3RhdGUgIT09IE9yZGVyZWRNYXAoKSkpO1xuXG4gICAgICAgICAgICBpZiAoc3ViU3RhdGVPbGQgPT09IHVuZGVmaW5lZCl7IC8vc2tpcCBhc3NnaW4gZGVmYXVsdCB2YWx1ZSBmb3IgdW51c2VkIHN1YiBzdGF0ZXNcbiAgICAgICAgICAgICAgICBpZiAoc3ViU3RhdGUgPT09IE1hcCgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHN1YlN0YXRlID09PSBPcmRlcmVkTWFwKCkpIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoc3ViU3RhdGUgIT09IHN1YlN0YXRlT2xkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT0gU0VUIFNUQVRFIGZvciAnK3RoaXMuY29uc3RydWN0b3IubmFtZSsnLicra2V5KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29uc3RydWN0b3IubmFtZSsnLicra2V5Kycgc3RhdGVPbGQgLT4gJytKU09OLnN0cmluZ2lmeShzdWJTdGF0ZU9sZCwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29uc3RydWN0b3IubmFtZSsnLicra2V5Kycgc3RhdGVOZXcgLT4gJytKU09OLnN0cmluZ2lmeShzdWJTdGF0ZSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhdGUuc2V0KGtleSwgc3ViU3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBteUFjdGlvbihhY3Rpb24pe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uLm5zIC0+ICcrYWN0aW9uLm5zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMubnMgLT4gJyt0aGlzLm5zKTtcbiAgICAgICAgaWYgKGFjdGlvbiBcbiAgICAgICAgICAgICYmIGFjdGlvbi5ucyA9PT0gdGhpcy5ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIG1haW4oc3RhdGU9TWFwKCksIGFjdGlvbikge1xuXG4gICAgICAgIGlmICggIXRoaXMubXlBY3Rpb24oYWN0aW9uKSApIHJldHVybiBzdGF0ZTtcblxuICAgICAgICBjb25zb2xlLmxvZygnPT09IEFDVElPTiAtPiAnK3RoaXMubnMrJyAnK2FjdGlvbi50eXBlKTtcbiAgICAgICAgLy8gc3RhdGUgPSBNYXAoKTtcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ1NFVCc6e1xuICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhdGUuc2V0SW4oYWN0aW9uLnBhdGgsIGFjdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdERUxFVEUnOntcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uLnBhdGggLT4gJythY3Rpb24ucGF0aCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZSBERUxFVEUgc3RhdGUgLT4gJytzdGF0ZSk7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZS5kZWxldGVJbihhY3Rpb24ucGF0aCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyIERFTEVURSBzdGF0ZSAtPiAnK3N0YXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1JFU0VUJzp7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBNYXAoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhdGUgPSBhY3Rpb24ubmV3U3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5nZXQoJ3InKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IG5ld1N0YXRlLmdldCgncicpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgfVxuICAgIFxufVxuXG5cbiJdfQ==