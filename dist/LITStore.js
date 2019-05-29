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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MSVRTdG9yZS5qcyJdLCJuYW1lcyI6WyJMSVRTdG9yZSIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwiYmluZCIsImdldFN0YXRlIiwiZ2V0Iiwic2V0IiwiZGVsIiwiYWN0aW9uIiwicGF0aCIsIkFycmF5IiwiY3VycmVudCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0YXRlIiwiZ2V0SW4iLCJ2YWx1ZSIsInIiLCJTRVQiLCJERUxFVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFE7OztBQUVqQixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFZRixLQUF4QjtBQUNBLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLRSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTRixJQUFULENBQWMsSUFBZCxDQUFYO0FBQ0EsU0FBS0csR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBU0gsSUFBVCxDQUFjLElBQWQsQ0FBWDtBQUNBLFNBQUtJLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNKLElBQVQsQ0FBYyxJQUFkLENBQVg7QUFDSDs7Ozs2QkFFU0ssTSxFQUFPO0FBQ2I7QUFDQTtBQUNBLGFBQU8sS0FBS1QsS0FBTCxDQUFXRyxRQUFYLENBQW9CTSxNQUFwQixDQUFQO0FBQ0g7OzsrQkFFVTtBQUNQLGFBQU8sS0FBS1QsS0FBTCxDQUFXSyxRQUFYLEVBQVA7QUFDSDs7O3dCQUVHSyxJLEVBQU07QUFFTixVQUFJLENBQUNBLElBQUwsRUFBVyxNQUFNO0FBQUUsa0JBQVU7QUFBWixPQUFOO0FBRVgsVUFBSUEsSUFBSSxDQUFDQSxJQUFULEVBQWVBLElBQUksR0FBR0EsSUFBSSxDQUFDQSxJQUFaOztBQUVmLFVBQUksRUFBRUEsSUFBSSxZQUFZQyxLQUFsQixDQUFKLEVBQTZCO0FBQ3pCLFlBQUlDLE9BQU8sR0FBRyxTQUFkLENBRHlCLENBRXpCOztBQUNBLFlBQUlGLElBQUksQ0FBQ0csV0FBVCxFQUFzQkQsT0FBTyxHQUFHRixJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLElBQTNCO0FBQ3RCLGNBQU07QUFBRSxvQkFBVSxtQ0FBaUNGO0FBQTdDLFNBQU47QUFDSDs7QUFFRCxVQUFNRyxLQUFLLEdBQUcsS0FBS2YsS0FBTCxDQUFXSyxRQUFYLEVBQWQ7QUFDQSxhQUFPVSxLQUFLLENBQUNDLEtBQU4sQ0FBWU4sSUFBWixDQUFQO0FBRUg7Ozt3QkFHR0EsSSxFQUFNTyxLLEVBQU87QUFDYixVQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZixDQURhLENBRWI7QUFDQTs7QUFDQSxXQUFLbEIsS0FBTCxDQUFXRyxRQUFYLENBQW9CZSxDQUFDLENBQUNDLEdBQUYsQ0FBTVQsSUFBTixFQUFZTyxLQUFaLENBQXBCO0FBQ0g7Ozt3QkFFR1AsSSxFQUFNO0FBQ04sVUFBTVEsQ0FBQyxHQUFHLEtBQUtBLENBQWYsQ0FETSxDQUVOOztBQUNBLFdBQUtsQixLQUFMLENBQVdHLFFBQVgsQ0FBb0JlLENBQUMsQ0FBQ0UsTUFBRixDQUFTVixJQUFULENBQXBCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMSVRTdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZSAtPiAnK3N0b3JlKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldCA9IHRoaXMuZ2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0ID0gdGhpcy5zZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWwgPSB0aGlzLmRlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoIChhY3Rpb24pe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5zdG9yZSAtPiAnK3RoaXMuc3RvcmUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5zdG9yZS5kaXNwYXRjaCAtPiAnK3RoaXMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgIH1cblxuICAgIGdldFN0YXRlICgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGdldChwYXRoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXBhdGgpIHRocm93IHsgJ3JlYXNvbic6ICdwYXRoIGlzIHVuYXZhaWxhYmxlJ307XG5cbiAgICAgICAgaWYgKHBhdGgucGF0aCkgcGF0aCA9IHBhdGgucGF0aDtcblxuICAgICAgICBpZiAoIShwYXRoIGluc3RhbmNlb2YgQXJyYXkpKXtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJ1VOS05PV04nO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhdGggdHlwZSAtPiAnK3BhdGgucHJvcC5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICBpZiAocGF0aC5jb25zdHJ1Y3RvcikgY3VycmVudCA9IHBhdGguY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgIHRocm93IHsgJ3JlYXNvbic6ICdwYXRoIHNob3VsZCBiZSBhcnJheS4gY3VycmVudCAnK2N1cnJlbnR9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHJldHVybiBzdGF0ZS5nZXRJbihwYXRoKTtcblxuICAgIH07XG4gICAgXG4gICAgXG4gICAgc2V0KHBhdGgsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzLnNldCgpIHBhdGggLT4gJytKU09OLnN0cmluZ2lmeShwYXRoLCBudWxsLCAyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzLnNldCgpIHZhbHVlIC0+ICcrSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChyLlNFVChwYXRoLCB2YWx1ZSkpO1xuICAgIH1cbiAgICBcbiAgICBkZWwocGF0aCkge1xuICAgICAgICBjb25zdCByID0gdGhpcy5yO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0SW4gLT4gJytKU09OLnN0cmluZ2lmeShwYXRoKSsnICcrdmFsdWUpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHIuREVMRVRFKHBhdGgpKTtcbiAgICB9XG5cbiAgICBcbn0iXX0=