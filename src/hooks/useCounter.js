import { useState } from "react"

export const useCounter = (initialValue = 1) => {
        const [counter, setcount] = useState(initialValue)

        const increment = ( value = 1 ) => {
            setcount( counter + value );
        }

        const decrement = ( value = 1 ) => {
            if ( counter === 0 ) return ;
             setcount( counter - value );
        }

        const reset = () => {
            setcount( initialValue );
        }
    
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}