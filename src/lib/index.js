import Close from './close.svg'
import React from "react";
import { PropTypes } from "prop-types";
// This composant is used to create a modal with text inside
function Modal(props) {
  return (
    //modal global div 
    <div style={props.style_modal} className="modal_display">
    {/* text inside the modal  */}
      <div style={props.style_txt}>{props.modal_txt}</div>
      {/* button to close modal , the img is a black cross */}
      <button style={props.style_btn} onClick={props.actionclose}>
        <img style={props.style_img} src={Close} alt="croix"></img>
      </button>
    </div>
  )
}

  //All style props is used to midifie style 
  //Props actionclose is used to do on action onClick
  //Props modal-txt is used to set the txt in the modal 

Modal.propTypes ={
  style_modal: PropTypes.object,
  style_txt: PropTypes.object,
  modal_txt: PropTypes.string,
  style_btn: PropTypes.object,
  actionclose: PropTypes.func,
  style_img: PropTypes.object

}
Modal.defaultProps = {
  style_img: {
    width: 'auto',
    height: '20px',
    border: '0px solid',
    borderRadius: '205px',
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
    justifyContent: 'center',
  },
  style_btn: {
    border: '0px solid',
    padding: '0px',

    position: 'relative',
    height: '20px',
    borderRadius: '205px',
  },
  style_txt: { padding: '20px' },
  modal_txt: 'Employee create',
}
export default Modal