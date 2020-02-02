"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _LITPureComponent = _interopRequireDefault(require("../LITPureComponent"));

// import LITPath from "../LITPath";
var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
  }

  (0, _createClass2["default"])(_default, [{
    key: "set",
    value: function set(ctx, extraCtx) {
      this._ctx = ctx;
      this._extraCtx = extraCtx;
    }
  }, {
    key: "get",
    value: function get() {
      // can be related component, parent component, parent handler, path
      if (!this._ctx) {
        var reason = 'Invalid handler ctx';
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
    value: function isPath() {
      var ctx = this.get();
      if (Array.isArray(ctx)) return true;
      return false;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var ctx = this.get();
      if (this.isPath()) return ctx;
      var reason = "Invalid path -> ".concat(ctx);
      throw new Error(reason);
    } // isComponent() {
    //     const ctx = this.get();
    //     if (ctx instanceof LITPureComponent) return true;
    //     return false;
    // }
    // getType() {
    //     if (this.isComponent()) {
    //         return 'Component';
    //     }else if (this.isPath()) {
    //         return 'Path';
    //     }else{
    //         return 'Handler';
    //     }
    // }

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
      if (this.isPath()) {
        return this.getExtra();
      }

      return this.get();
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var item = this.getParentHandlerOrComponent();
      console.log("=== getComponent ".concat(this.getDebugInfo(item), " ==="));
      if (item instanceof _LITPureComponent["default"]) return item;
      if (item) return item.getComponent();
      var reason = "Invalid component -> ".concat(ctx);
      throw new Error(reason);
    }
  }, {
    key: "getHandler",
    value: function getHandler() {
      var item = this.getParentHandlerOrComponent();
      console.log("=== getHandler ".concat(this.getDebugInfo(item), " ==="));
      var result = item.getHandler();
      if (result) return result;
      var reason = 'Invalid handler';
      throw Error(reason);
    }
  }]);
  return _default;
}();

exports["default"] = _default;
