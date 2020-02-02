"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _LITPath = _interopRequireDefault(require("../LITPath"));

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
      if (ctx.path) return true;
      return false;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var ctx = this.get();
      if (this.isPath()) return ctx;
      var reason = "Invalid path -> ".concat(ctx);
      throw new Error(reason);
    }
  }, {
    key: "isComponent",
    value: function isComponent() {
      var ctx = this.get();
      if (ctx.componentDidMount) return true;
      return false;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var ctx = this.get();
      if (this.isComponent()) return ctx;
      var reason = "Invalid component -> ".concat(ctx);
      throw new Error(reason);
    }
  }, {
    key: "getType",
    value: function getType() {
      if (this.isComponent()) {
        return 'Component';
      } else if (this.isPath()) {
        return 'Path';
      } else {
        return 'Handler';
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
    key: "getHandler",
    value: function getHandler() {
      var item = this.getParentHandlerOrComponent();
      console.log("=== getHandler ".concat(this.getType(), " ").concat(item, " ==="));
      var result = item.getHandler();
      if (result) return result;
      var reason = 'Invalid handler';
      throw Error(reason);
    }
  }]);
  return _default;
}();

exports["default"] = _default;
