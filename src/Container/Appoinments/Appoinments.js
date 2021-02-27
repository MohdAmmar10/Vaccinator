import React, {useContext} from 'react';
import './Appoinments.css';
import { useLocation } from 'react-router-dom'
import { UserContext } from "../../providers/UserProvider";
export default function Appoinments()
{
    const location = useLocation();
    const user = useContext(UserContext);
    const cid = location.state
    console.log(cid)
    console.log(user)
    return(
        <div>
            <h1>Home</h1>
        </div>
    )

}