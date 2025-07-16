import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    
    
    /*
      useCallback siver para memorizar funciones
      // useCallback(
      //   () => {
      //     first
      //   },
      //   [second],
      // )

      const incrementFather = () => {
        setCounter( counter + 1);
      }


    */

    const [counter, setCounter] = useState(10);

    
    const incrementFather = useCallback(
      (value) => {
        setCounter( (counter) => counter + value );
      },
      []
    )

  return (
    <>
        <hr />
        <h1>useCallBack Hook { counter } </h1>
        <ShowIncrement increment={ incrementFather } />
    </>
  )
}
