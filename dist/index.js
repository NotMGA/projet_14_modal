"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _close = _interopRequireDefault(require("./close.svg"));
function Modal(props) {
  function action_close() {
    var visibility = document.getElementsByClassName('modal_display');
    visibility[0].style.display = 'none';
  }
  return /*#__PURE__*/React.createElement("div", {
    style: props.style_modal,
    className: "modal_display"
  }, /*#__PURE__*/React.createElement("div", {
    style: props.style_txt
  }, props.modal_txt), /*#__PURE__*/React.createElement("button", {
    style: props.style_btn,
    onClick: action_close
  }, /*#__PURE__*/React.createElement("img", {
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
    display: 'flex',
    borderRadius: '205px',
    border: '2px solid rgb(204, 51, 0)',
    justifyContent: 'center'
  },
  style_btn: {
    border: '0px solid',
    padding: '0px',
    right: ' -74px',
    top: '-8px',
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