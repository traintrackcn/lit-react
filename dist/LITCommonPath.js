"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _LITPath2 = _interopRequireDefault(require("./LITPath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LITCommonPath =
/*#__PURE__*/
function (_LITPath) {
  _inherits(LITCommonPath, _LITPath);

  function LITCommonPath(path) {
    var _this;

    _classCallCheck(this, LITCommonPath);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LITCommonPath).call(this, path)); // console.log('path -> '+this.path+' '+this.constructor.name);

    _this.value = path.concat(['value']);
    _this.index = path.concat(['index']);
    _this.collection = path.concat(['collection']);
    return _this;
  }

  return LITCommonPath;
}(_LITPath2["default"]);

exports["default"] = LITCommonPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MSVRDb21tb25QYXRoLmpzIl0sIm5hbWVzIjpbIkxJVENvbW1vblBhdGgiLCJwYXRoIiwidmFsdWUiLCJjb25jYXQiLCJpbmRleCIsImNvbGxlY3Rpb24iLCJMSVRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7QUFDakIseUJBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDYix1RkFBTUEsSUFBTixHQURhLENBRWI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFDLE9BQUQsQ0FBWixDQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhSCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFDLE9BQUQsQ0FBWixDQUFiO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQkosSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBQyxZQUFELENBQVosQ0FBbEI7QUFMYTtBQU1oQjs7O0VBUHNDRyxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMSVRQYXRoIGZyb20gJy4vTElUUGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExJVENvbW1vblBhdGggZXh0ZW5kcyBMSVRQYXRoe1xuICAgIGNvbnN0cnVjdG9yKHBhdGgpe1xuICAgICAgICBzdXBlcihwYXRoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhdGggLT4gJyt0aGlzLnBhdGgrJyAnK3RoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXRoLmNvbmNhdChbJ3ZhbHVlJ10pO1xuICAgICAgICB0aGlzLmluZGV4ID0gcGF0aC5jb25jYXQoWydpbmRleCddKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gcGF0aC5jb25jYXQoWydjb2xsZWN0aW9uJ10pO1xuICAgIH1cbn0iXX0=