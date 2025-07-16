import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();

  }

  return (
    <>  
        <hr />
        <h1> Focus Screen</h1>
        <input 
            ref={ inputRef }
            type="text"
            placeholder='Ingrese xdddd'
            className='form-control'
        />
        <input 
            type="text"
            placeholder='Ingrese xdddd'
            className='form-control'
        />
        <input 
            type="text"
            placeholder='Ingrese xdddd'
            className='form-control'
        />

        <button
            className='btn btn-info mt-2'
            onClick={ onClick }
        >
            Set Focus
        </button>
    </>
  )
}
