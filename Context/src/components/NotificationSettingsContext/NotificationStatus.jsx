import { useContext } from "react";
import { NotificationContext } from "./NotificationSettingsContext";


const NotificationStatus = ()=>{
    const {status} = useContext(NotificationContext);

    return(
        <h1>As notificações estão {status}</h1>
    )

}

export default NotificationStatus;

