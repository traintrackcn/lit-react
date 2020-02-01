"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _LITPureComponent2 = _interopRequireDefault(require("./LITPureComponent"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react = _interopRequireDefault(require("react"));

it('test child LITPureComponent', function () {
  var ChildComponent =
  /*#__PURE__*/
  function (_LITPureComponent) {
    (0, _inherits2["default"])(ChildComponent, _LITPureComponent);

    function ChildComponent() {
      var _this;

      (0, _classCallCheck2["default"])(this, ChildComponent);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ChildComponent).call(this));
      console.log('_mounted ->', _this._mounted);
      return _this;
    }

    return ChildComponent;
  }(_LITPureComponent2["default"]);

  new ChildComponent();
});
