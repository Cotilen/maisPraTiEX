import { useState, useEffect } from "react"

const RealTimeClock = () =>{
    const [time, setTime] = useState('')

    useEffect(()=>{
        const timerID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })

    return(
        <h1>{time}</h1>
    )
}

export default RealTimeClock