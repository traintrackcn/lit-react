"use strict";

var _LITPureComponent = _interopRequireDefault(require("./LITPureComponent"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('test LITPureComponent', function () {
  var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_LITPureComponent["default"], null)).toJSON();

  expect(tree).toMatchSnapshot();
});
