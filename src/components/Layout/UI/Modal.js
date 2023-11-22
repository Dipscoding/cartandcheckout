import React from 'react'
import  ReactDom from 'react-dom'
import { Backdrop } from './Loader'

const Modal = ({onClose}) => {
  return ( ReactDom.createPortal(
    <>
 <Backdrop onClose={onClose}/>
 <div className='modal'>
    Modal content
    <button onClick={onClose}>X</button>
 </div>
    </>,
    document.getElementById('modal-root')

  )
    
  )
}

export default Modal