"use strict";

var _LITPureComponent = _interopRequireDefault(require("./LITPureComponent"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('test LITPureComponent', function () {
  var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_LITPureComponent["default"], null)).toJSON();

  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MSVRQdXJlQ29tcG9uZW50LnRlc3QuanMiXSwibmFtZXMiOlsiaXQiLCJ0cmVlIiwicmVuZGVyZXIiLCJjcmVhdGUiLCJ0b0pTT04iLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsRUFBRSxDQUFDLHVCQUFELEVBQTBCLFlBQUs7QUFFN0IsTUFBTUMsSUFBSSxHQUFHQyw4QkFBU0MsTUFBVCxDQUFnQixnQ0FBQyw0QkFBRCxPQUFoQixFQUFzQ0MsTUFBdEMsRUFBYjs7QUFDQUMsRUFBQUEsTUFBTSxDQUFDSixJQUFELENBQU4sQ0FBYUssZUFBYjtBQUNILENBSkMsQ0FBRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMSVRQdXJlQ29tcG9uZW50IGZyb20gJy4vTElUUHVyZUNvbXBvbmVudCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pdCgndGVzdCBMSVRQdXJlQ29tcG9uZW50JywgKCk9PiB7XG4gXG4gICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZSg8TElUUHVyZUNvbXBvbmVudCAvPikudG9KU09OKCk7XG4gICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xufSk7Il19