import React from 'react'
import  ReactDom from 'react-dom'

export const Backdrop =({onClose})=>{
    const handleClick = () =>{
        if(onClose){
            onClose()
        }
    }
    return <div className='loader-overlay'onClick={handleClick} ></div>
}

const Loader = () => {
  return ( ReactDom.createPortal(
    <>
    <Backdrop/>
    
        <div className='loading-dots'>
            <div>Loading</div>
            <div className='loading-dots--dot'></div>
            <div className='loading-dots--dot'></div>
            <div className='loading-dots--dot'></div>
            <div className='loading-dots--dot'></div>
        </div>
    </>,
    document.getElementById('loader-root')

  )
    
  )
}

export default Loader