"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _util = _interopRequireDefault(require("./_util"));

var _default =
/*#__PURE__*/
function () {
  function _default(raw) {
    (0, _classCallCheck2["default"])(this, _default);
    // console.log('raw -> '+JSON.stringify(raw, null, 2));
    // this.raw = raw;
    this.title = raw.title;
    this.description = raw.description;
    this.active = raw.active ? raw.active : false;
    this.children = raw.children; // this.rules = raw.r;

    var rules = raw.r;
    this.base = this.searchBase(rules);
    this.rules = this.sort(rules); // console.log('active -> '+JSON.stringify(this.active, null, 2));
    // console.log('description -> '+this.description);
    // console.log('base -> '+JSON.stringify(this.base, null, 2));
    // console.log('rules -> '+JSON.stringify(this.rules, null, 2));
  }

  (0, _createClass2["default"])(_default, [{
    key: "searchBase",
    value: function searchBase(rules) {
      if (!rules) return;
      var found = rules.find(function (rule) {
        return !rule._;
      });

      if (!this.active && found) {
        delete found['on']; // delete 'on' if node has not been activated
      }

      return found;
    }
  }, {
    key: "sort",
    value: function sort(rules) {
      if (!rules) return;
      rules.sort(function (a, b) {
        // sort rules
        if (!a._ && !b._) return 1;
        if (!a._) return -1;
        if (!b._) return 1;
        return a._.length - b._.length;
      });
      return rules;
    }
  }, {
    key: "get",
    value: function get(ctx) {
      if (!ctx || !this.rules) {
        console.warn('Invalid context found');
        return this.base;
      }

      var result = Object.assign({}, this.base);
      this.rules.forEach(function (rule) {
        if (!rule._) return; //skip base ( in case two or more base rules )
        // console.log('ctx -> '+JSON.stringify(ctx));
        // console.log('rule._ -> '+JSON.stringify(rule._));

        if (_util["default"].arrayContainsArray1(ctx, rule._)) {
          result = Object.assign(result, rule);
        }
      });
      delete result['_']; //remove rule

      result.ctx = ctx; //set current conditions to result
      // delete 'on' if node has not been activated

      if (!this.active) {
        delete result['on'];
      } // console.log('rules -> '+JSON.stringify(rules));


      return result;
    }
  }]);
  return _default;
}();

exports["default"] = _default;
