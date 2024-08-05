import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const LanguageSwitcher = () =>{

    const {toggleLanguage} = useContext(LanguageContext)

    return(

        <button onClick={toggleLanguage}>Trocar lingua</button>
    )
}

export default LanguageSwitcher