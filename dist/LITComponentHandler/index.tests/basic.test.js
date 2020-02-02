"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _StateHandler = _interopRequireDefault(require("./mock/StateHandler"));

var _TopComponent = _interopRequireDefault(require("./mock/TopComponent"));

describe('test component handler', function () {
  // it('test')
  it('test getComponent()', function () {
    var refComponent = function refComponent(ref) {
      var h = ref.getHandler();
      var childComponentH = h.getChildComponentHandler(); // console.log('component ->', c.componentDidMount);

      expect(h.getComponent()).toBeTruthy();
      expect(childComponentH.getComponent()).toBeTruthy();
    };

    _reactTestRenderer["default"].create(_react["default"].createElement(_TopComponent["default"], {
      ref: refComponent
    }));
  });
});
