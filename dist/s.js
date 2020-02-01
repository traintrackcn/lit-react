"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.store = exports.r = void 0;

var _LITReducer = _interopRequireDefault(require("./LITReducer"));

var _redux = require("redux");

var _reduxImmutable = require("redux-immutable");

var _LITStore = _interopRequireDefault(require("./LITStore"));

var r = new _LITReducer["default"]();
exports.r = r;
var rootReducer = (0, _reduxImmutable.combineReducers)({
  r: r.reducer
});
var store = (0, _redux.createStore)(rootReducer);
exports.store = store;

var _default = new _LITStore["default"](store, r);

exports["default"] = _default;
