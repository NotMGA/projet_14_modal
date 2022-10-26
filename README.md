## Start with modal composant 

# install the composant 
# use this comande 
npm i modal_react_oc_mf

## config the copmposant 

# 5 props to config the composant 

# global 
style : style_modal 
 
# text of the modal 
style: style_txt
text : modal_txt

# buttton 
style: style_btn
onClick: actionclose

# image close
style: style_img


# default props 

style_img: {
    width: 'auto',
    height: '20px',
    border: '0px solid',
    borderRadius: '205px',
  }
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
  }
  style_btn: {
    border: '0px solid',
    padding: '0px',

    position: 'relative',
    height: '20px',
    borderRadius: '205px',
  }
  style_txt: { padding: '20px' },
  modal_txt: 'Employee create',