import React,{useEffect, useContext} from 'react'
import { UserContext } from "../../providers/UserProvider";
import { Redirect } from 'react-router-dom'
import {db,auth,firebase, provider } from '../../firebase';

const Signout = () => {
    const user = useContext(UserContext)[0];
    const setUser = useContext(UserContext)[1];
    useEffect(() => {
        console.log(user)
        setUser(null)
        auth.signOut()
        console.log(user)
      });
    return(
        <Redirect to="/login" />
    )
}
export default Signout
