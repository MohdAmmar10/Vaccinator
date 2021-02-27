import React,{useState}  from 'react';
import { Button,Input } from '@material-ui/core';
import {db,auth, signInWithGoogle } from '../../firebase';

import Logo from '../../Images/Logo.jpeg'

export default function Login()
{
    // const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    // const[user,setUser]=useState(null);
    // const [user,setUser] = useState(false);
    function googleSignin(e)
    {
        e.preventDefault()
        signInWithGoogle()
    }
    function signIn(e)
    {
        e.preventDefault()
        console.log("normal")
    }
    return(
        <div className="Login pb-4">
        <div className="login_bg py-5">
          <form className="fullform pb-5" onSubmit={signIn}>
            <center>
              <img
                className="app__headerImage"
                src={Logo}
                alt="Vaccinator"
              />
            <div className="d-flex flex-column align-items-center justify-content-center login-form">
                {/* <div className="my-3">
                <label className="mr-4 mb-0">Username</label>
                <Input 
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                /> 
                </div> */}
                <div className="my-3">
                <label className="mr-4 mb-0">Email ID&emsp;</label>
                <Input 
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                <div className="mt-3 mb-4">
                <label className="pass-label mb-0">Password</label>
                <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                <Button variant="contained" style={{backgroundColor:'#B3E0DE', borderRadius: '5px'}} type="submit" >Login</Button>
                <button class="center-align bg-white pr-0 mt-4 mb-0 g-btn" onClick={googleSignin}>
                    <span className="oauth-container btn darken-4 white black-text d-flex p-0" href="/users/google-oauth/">
                    <div className="left mr-2 p-2">
                        <img width="20px"  alt="Google sign-in" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <div className="text-center g-btn-b pt-2 px-1">
                        Login with Google
                    </div>
                    </span>
                </button>
            </div>
            </center>
          </form>
        </div>
        </div>
    )

}