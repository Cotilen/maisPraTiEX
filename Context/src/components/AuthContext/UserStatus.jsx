import { useContext } from "react";
import { AuthContext } from "./AuthContext";


const UserStatus = ()=>{
    const {auth} = useContext(AuthContext);

    return(
        <h2>O usuário está {auth}</h2>
    )

}

export default UserStatus;

