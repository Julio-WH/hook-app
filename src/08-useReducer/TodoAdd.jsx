import React, { useState } from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({ handleNewTodo }) => {


    const initialForm = {
        description: '',
    }
  

    const { onResetForm, id, description, done, onInputChange } = useForm(initialForm);


  const onSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    handleNewTodo({
        id: new Date().getTime(),
        description,
        done: false,
    });

    // limpia el campo
    onResetForm()
  };
    
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            name="description"
            placeholder='Que hay que hacer ?' 
            className='form-control'
            value={ description }
            onChange={ onInputChange }
        />
        <button 
            type='submit'
            className='btn btn-outline-primary mt-1'
        >
            Agregar
        </button>
    </form>
  )
}
