"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(component) {
    _classCallCheck(this, _default);

    this.setComponent(component);
  }

  _createClass(_default, [{
    key: "reset",
    value: function reset() {
      this._c = undefined;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this._c;
    }
  }, {
    key: "setComponent",
    value: function setComponent(value) {
      this._c = value;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      try {
        var c = this.getComponent();
        return c.props;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getNavigation",
    value: function getNavigation() {
      try {
        var props = this.getProps();
        return props.navigation;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      try {
        var c = this.getComponent();
        return c.getHandler();
      } catch (e) {
        var reason = 'cannot get top component handler';
        throw new Error(reason);
      }
    }
  }, {
    key: "setState",
    value: function setState(value) {
      var c = this.getComponent(); // console.log('c ->', c);

      c.setState(value);
    }
  }, {
    key: "getNewState",
    value: function getNewState() {
      // use this state to render component
      var seed = Math.random();
      return {
        seed: seed
      };
    }
  }, {
    key: "getState",
    value: function getState() {
      var c = this.getComponent();
      return c.state;
    }
  }, {
    key: "initState",
    value: function initState(newState) {
      var c = this.getComponent();
      c.state = newState;
    }
  }, {
    key: "navigate",
    value: function navigate(route, params) {
      var navigation = this.getNavigation();
      navigation.navigate(route, params);
    }
  }, {
    key: "back",
    value: function back() {
      var navigation = this.getNavigation();
      navigation.goBack(null);
    }
  }, {
    key: "getNaviParam",
    value: function getNaviParam(key) {
      var navigation = this.getNavigation();
      return navigation.getParam(key);
    }
  }, {
    key: "setNaviParams",
    value: function setNaviParams(params) {
      var navigation = this.getNavigation();
      navigation.setParams(params);
    }
  }, {
    key: "setNaviParamsAsync",
    value: function () {
      var _setNaviParamsAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(params) {
        var navigation;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                navigation = this.getNavigation();
                _context.next = 3;
                return navigation.setParams(params);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setNaviParamsAsync(_x) {
        return _setNaviParamsAsync.apply(this, arguments);
      }

      return setNaviParamsAsync;
    }()
  }, {
    key: "render",
    value: function render() {
      // setState to activate rendering
      var newState = this.getNewState();
      this.setState(newState);
    }
  }, {
    key: "reRender",
    value: function reRender() {// reset and render
    }
  }]);

  return _default;
}();

exports["default"] = _default;
