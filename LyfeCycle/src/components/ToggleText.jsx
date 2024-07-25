import { useState } from "react"

const ToggleText = () =>{
    const [visibility, setVisibility] = useState(true)
    
    const handleToggle = () => {
        setVisibility(!visibility)
    }

    return(
        <div>
            {visibility && <h1>Está me vendo?</h1>}
            <button onClick={handleToggle}>Toggle Text</button>
        </div>
    )
}

export default ToggleText