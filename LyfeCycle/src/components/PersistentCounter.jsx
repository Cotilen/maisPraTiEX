import { useEffect } from "react";
import { useState } from "react";

function PersistentCount(){
    const [count, setCount] = useState(Number(localStorage.getItem('count') || 0))

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return (
        <div>
            <h1>Contador Persistente: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    )
 
}

export default PersistentCount;