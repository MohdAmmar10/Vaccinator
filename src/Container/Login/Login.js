import React,{useState, useContext}  from 'react';
import { Button,Input } from '@material-ui/core';
import {db,auth,firebase, provider } from '../../firebase';
import { UserContext } from "../../providers/UserProvider";
import {useHistory} from 'react-router-dom'
import Logo from '../../Images/Logo.jpeg'

export default function Login()
{
    // const[username,setUsername]=useState('');
    const user = useContext(UserContext)[0];
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const [error, setError] = useState(null);
    const history  = useHistory()
    console.log(user);
    // const[user,setUser]=useState(null);
    // const [user,setUser] = useState(false);
    function googleSignin(e)
    {
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then((body) => {
            console.log(body)
            console.log(body.user.uid)
            history.push('/')
        // this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error)
            let msg=error.code.split('/')[1]
            setError(msg)
        });        
    }
    function signIn(e)
    {
        e.preventDefault()
        console.log("normal")
        auth
        .signInWithEmailAndPassword(email, password)
        .then((body) => {
            console.log(body.user.uid)
            history.push('/')
        // this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error)
            let msg=error.code.split('/')[1]
            setError(msg)
        });
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
            {error !== null && (
                <div className="bg-red-600 w-full text-danger text-center">
                    {error}
                </div>
                )}
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
                type="email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                <div className="mt-3 mb-4">
                <label className="pass-label mb-0">Password</label>
                <Input 
                placeholder="Password"
                type="password"
                required
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