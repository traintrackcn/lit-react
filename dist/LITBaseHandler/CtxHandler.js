"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _LITPath = _interopRequireDefault(require("../LITPath"));

var _react = require("react");

var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
  }

  (0, _createClass2["default"])(_default, [{
    key: "set",
    // constructor() {
    //     this.getHandler = this.getHandler.bind(this);
    //     this._getHandler = this._getHandler.bind(this);
    // }
    value: function set(ctx, extraCtx) {
      this._ctx = ctx;
      this._extraCtx = extraCtx;
    }
  }, {
    key: "get",
    value: function get() {
      // can be related component, parent component, parent handler, path
      if (!this._ctx) {
        var reason = "Invalid handler ctx";
        throw new Error(reason);
      }

      return this._ctx;
    }
  }, {
    key: "getExtra",
    value: function getExtra() {
      // for compatible with state handler purpose
      if (!this._extraCtx) {
        var reason = 'Invalid handler extra ctx';
        throw new Error(reason);
      }

      return this._extraCtx;
    }
  }, {
    key: "isPath",
    value: function isPath(ctx) {
      if (Array.isArray(ctx)) return true;
      if (ctx instanceof _LITPath["default"]) return true;
      return false;
    }
  }, {
    key: "getPath",
    value: function getPath(key) {
      var ctx = this.get();

      if (this.isPath(ctx)) {
        console.log('getPath ctx ->', ctx, ' key ->', key);
        if (key) return ctx.concat([key]);
        return ctx;
      }

      var reason = "Invalid path -> ".concat(ctx);
      throw new Error(reason);
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo(item) {
      try {
        var result = item.constructor.name; // console.log('result ->', result);

        return result;
      } catch (e) {
        // console.log('e ->', e);
        return item;
      }
    }
  }, {
    key: "getParentHandlerOrComponent",
    value: function getParentHandlerOrComponent() {
      var ctx = this.get();
      var isPath = this.isPath(ctx); // console.log('isPath ->', isPath);

      if (isPath) {
        return this.getExtra();
      }

      return ctx;
    }
  }, {
    key: "getStateStore",
    value: function getStateStore() {
      return this._getCustom('getStateStore', 'stateStore');
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var item = this.getParentHandlerOrComponent(); // console.log(`=== getComponent ${this.getDebugInfo(item)} ===`);

      if (item instanceof _react.PureComponent) return item;

      if (item.getComponent) {
        var result = item.getComponent();
        if (result) return result;
      }

      var reason = "Invalid component -> ".concat(ctx);
      throw new Error(reason);
    }
  }, {
    key: "getHandler",
    value: function getHandler(fnName) {
      if (!fnName) fnName = 'getHandler';
      return this._getCustom(fnName, 'handler');
    } // _getHandler(fnName) {
    //     const parent = this.getParentHandlerOrComponent();
    //     console.log(`=== search ${fnName} from parent -> ${this.getDebugInfo(parent)} ===`);
    //     var fn = parent[fnName];
    //     if (fn) {
    //         fn = fn.bind(parent);
    //         const result = fn();
    //         if (result) {
    //             console.log(`=== found handler -> ${result.constructor.name} ===`)
    //             return result;
    //         }
    //     }
    //     const reason = `Invalid handler via ${fnName}`;
    //     throw Error(reason);
    // }

  }, {
    key: "_getCustom",
    value: function _getCustom(fnName, type) {
      var parent = this.getParentHandlerOrComponent(); // console.log(`=== search ${fnName} from parent -> ${this.getDebugInfo(parent)} ===`);

      var fn = parent[fnName];

      if (fn) {
        fn = fn.bind(parent);
        var result = fn();

        if (result) {
          // console.log(`=== found ${fnName} -> ${result.constructor.name} ===`)
          return result;
        }
      }

      var reason = "Invalid ".concat(fnName);
      throw Error(reason);
    }
  }]);
  return _default;
}();

exports["default"] = _default;
