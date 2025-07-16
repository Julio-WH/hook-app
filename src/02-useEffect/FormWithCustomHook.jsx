import { useForm } from '../hooks/useForm';


const FormWithCustomHook = () => {
    // useEffect se utiliza para disparar efectos secundarios

    const initialForm = {
        username: '',
        email: '',
        password:''
    }
    const { formState, onInputChange, username, email, password, onResetForm } = useForm(initialForm);

    // const { username, email, password } = formState; forma 1

  return (
    <>
        <hr />
        <h1>Formulario con custom Hook</h1>
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

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button 
            className='btn btn-primary mt-2'
            onClick={ onResetForm }
        >Borrar</button>
        
    </>
  )
}

export default FormWithCustomHook
