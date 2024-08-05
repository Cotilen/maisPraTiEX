import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const Greeting = () =>{

    const{language} = useContext(LanguageContext)

    if(language === 'en'){
        return <h1>Hello, World!</h1>
    }else{
        return <h1>Olá, Mundo!</h1>
    }

}

export default Greeting