import { useEffect, useState } from "react"

const LimitedCounter = () =>{
    const [counter, setCounter] = useState(0)
    const [limit, setLimit] = useState(false)

    useEffect(() =>{
        if(counter == 10){
            setLimit(true)
        } else {
            setLimit(false)
        }
    })

    const increment = () => {
        if(counter < 10){
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <h1>Contador Limitado: {counter}</h1>
            {limit && <h1>Limite do contador Atingido</h1>}
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )

}

export default LimitedCounter