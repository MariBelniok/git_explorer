import { useState } from "react";

//toda vez que uma propriedade começar com use ela é um hook

export function Counter(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}