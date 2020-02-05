"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CtxHandler = _interopRequireDefault(require("./CtxHandler"));

var LITBaseHandler =
/*#__PURE__*/
function () {
  function LITBaseHandler(ctx, extraCtx) {
    (0, _classCallCheck2["default"])(this, LITBaseHandler);
    var h = this.getCtxHandler();
    h.set(ctx, extraCtx);
    this.className = this.constructor.name;
  }

  (0, _createClass2["default"])(LITBaseHandler, [{
    key: "getCtxHandler",
    value: function getCtxHandler() {
      if (!this._ctx) {
        this._ctx = new _CtxHandler["default"]();
      }

      return this._ctx;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var ctxH = this.getCtxHandler();
      return ctxH.getPath();
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var ctxH = this.getCtxHandler();
      return ctxH.getComponent();
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      try {
        return this.constructor.name;
      } catch (e) {
        return this;
      }
    }
  }, {
    key: "setStateStore",
    value: function setStateStore(value) {
      this._store = value;
    }
  }, {
    key: "getStateStore",
    value: function getStateStore() {
      if (this._s) return this._s;
      if (this._store) return this._store;
      var ctxH = this.getCtxHandler();
      return ctxH.getStateStore();
    }
    /**
     * @description get top handler
     */

  }, {
    key: "getHandler",
    value: function getHandler(fnName) {
      var ctxH = this.getCtxHandler();
      return ctxH.getHandler(fnName);
    }
  }]);
  return LITBaseHandler;
}();

exports["default"] = LITBaseHandler;
