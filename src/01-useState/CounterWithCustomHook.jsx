import { useCounter } from "../hooks/useCounter"


const CounterWithCustomHook = () => {

    const { 
      counter, 
      increment,
      decrement,
      reset,
       } = useCounter();

  return (
    <div>
      <h1> Counter with Hook: { counter } </h1>
      <button className='btn btn-info' onClick={ () => increment(2) }>+1</button>
      <button className='btn btn-info' onClick={ reset }>Reset</button>
      <button className='btn btn-info'onClick={ () => decrement(2) } >-1</button>
      <hr />
    </div>
  )
}

export default CounterWithCustomHook
