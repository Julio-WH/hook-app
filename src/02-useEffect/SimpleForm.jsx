import { useEffect, useState } from 'react'

import Message from './Message'


const SimpleForm = () => {
    // useEffect se utiliza para disparar efectos secundarios

    const [formState, setformState] = useState({
        username: 'julio',
        email: 'julio@example.com'
    })

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setformState({ 
            ...formState,
            [name]: value,
        });
    }

    useEffect( ()=> {
        // console.log("Se initicializo el componente");
    }, []); // [] significa que solo una vez se va llamar

    useEffect( ()=> {
        // console.log("formState change !");
    }, [ formState ]); // Estara al pendiente del cambio del state de formState

    useEffect( ()=> {
        // console.log("Change input Email !");
    }, [ email ]); // Estara al pendiente del cambio del campo email


  return (
    <>
        <hr />
        <h1>Simple Form</h1>
        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'julionoche') && <Message />
        }
        
    </>
  )
}

export default SimpleForm
