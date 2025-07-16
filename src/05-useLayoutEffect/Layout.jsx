import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { PokemonCard, LoadingMessage } from '../03-example';

const Layout = () => {

    const { counter, increment, decrement} = useCounter();
    const { data, isLoading, haserror } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    

  return (
    <>
        <hr />
        <h1>Informacion de pokemon Layout</h1>
        { 
          isLoading 
          ? <LoadingMessage />
          : (
            <PokemonCard 
              id={ counter }
              name={ data.name }
              sprites={ [
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
              ]}
            />
          )
        }

        <button className='btn btn-success' onClick={ () => counter > 1 ? decrement() : null }>Anterior</button>
        <button className='btn btn-success' onClick={ () => increment() }>Siguiente</button>

    </>
  )
}

export default Layout
