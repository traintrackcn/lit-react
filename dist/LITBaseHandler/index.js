"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CtxHandler = _interopRequireDefault(require("./CtxHandler"));

var _Pool = _interopRequireDefault(require("../Pool"));

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
      // console.log('this._store ->', this._store);
      if (this._store) return this._store;
      var ctxH = this.getCtxHandler();
      return ctxH.getStateStore();
    } //DEPRECATED

  }, {
    key: "set",
    value: function set(value) {
      this._raw = value;
    }
  }, {
    key: "get",
    value: function get() {
      return this._raw;
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
  }, {
    key: "getPool",
    value: function getPool() {
      if (!this._pool) {
        this._pool = new _Pool["default"]();
      }

      return this._pool;
    }
  }, {
    key: "p",
    get: function get() {
      return this.getPath();
    } //DEPRECATED

  }, {
    key: "s",
    get: function get() {
      return this.getStateStore();
    } //DEPRECATED
    ,
    set: function set(value) {
      this.setStateStore(value);
    }
  }]);
  return LITBaseHandler;
}();

exports["default"] = LITBaseHandler;
