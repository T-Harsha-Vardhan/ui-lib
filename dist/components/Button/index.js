"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    style: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }
  }, children);
};
var _default = exports["default"] = Button;