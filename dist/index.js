"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _close = _interopRequireDefault(require("./close.svg"));
var _react = _interopRequireDefault(require("react"));
function Modal(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: props.style_modal,
    className: "modal_display"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: props.style_txt
  }, props.modal_txt), /*#__PURE__*/_react.default.createElement("button", {
    style: props.style_btn,
    onClick: props.actionclose
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: props.style_img,
    src: _close.default,
    alt: "croix"
  })));
}
Modal.defaultProps = {
  style_img: {
    width: 'auto',
    height: '20px',
    border: '0px solid',
    borderRadius: '205px'
  },
  style_modal: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    opacity: '1',
    zIndex: '1',
    borderRadius: '205px',
    background: 'white',
    border: '2px solid rgb(204, 51, 0)',
    justifyContent: 'center'
  },
  style_btn: {
    border: '0px solid',
    padding: '0px',
    position: 'relative',
    height: '20px',
    borderRadius: '205px'
  },
  style_txt: {
    padding: '20px'
  },
  modal_txt: 'Employee create'
};
var _default = Modal;
exports.default = _default;