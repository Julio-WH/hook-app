import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log("me volvi a dibujar.")
  return (
    <button
        className='btn btn-primary'
        onClick={ () => {
            increment(5);
        }}
    >
        Incrementar
    </button>
  )
}
