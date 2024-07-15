import { useEffect, useState } from "react"

function WindowSize(){
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() =>{
        const handleResize = () => setSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
    }, [window.innerWidth])

    return(
        <h1>Window Size: {size}px</h1>
    )
}

export default WindowSize