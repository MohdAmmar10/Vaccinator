import React,{useState, useContext}  from 'react';
import { Button,Input } from '@material-ui/core';
import {db,auth,firebase, provider } from '../../firebase';
import { UserContext } from "../../providers/UserProvider";

import Logo from '../../Images/Logo.jpeg'

export default function Register()
{
    // const[username,setUsername]=useState('');
    const user = useContext(UserContext);
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const[fName,setFName]=useState('');
    const[phNo,setPhNo]=useState('');
    const [error, setError] = useState(null);
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
            console.log(body.user.displayName)
            console.log(body.user.phoneNo)
            let no = body.user.phoneNo===undefined||body.user.phoneNo===null?
            '0000000000':
            body.user.phoneNo
            const userRef = db.collection('users').doc(body.user.uid).set({
                email: body.user.email,
                name: body.user.displayName,
                phoneno: no
              });
              console.log(userRef)
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
        if(phNo.length < 10){
            setError('Enter valid mobile number')
            return
        }
        console.log("normal")
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((body) => {
            console.log(body.user.uid)
            console.log(body.user.displayName)
            console.log(body.user.phoneNo)
            const userRef = db.collection('users').doc(body.user.uid).set({
                email: email,
                name: fName,
                phoneno: phNo
              });
              console.log(userRef)
        // this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error)
            let msg=error.code.split('/')[1]
            setError(msg)
        });
    }
    function createUser(uid){
        
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
                <label className="mr-4 mb-0">Full Name</label>
                <Input 
                placeholder="Full Name"
                required
                type="text"
                value={fName}
                onChange={(e)=>setFName(e.target.value)}
                />
                </div>
                <div className="my-3">
                <label className="mr-4 mb-0">Phone No.</label>
                <Input 
                placeholder="Phone No."
                required
                type="text"
                value={phNo}
                onChange={(e)=>setPhNo(e.target.value)}
                />
                </div>
                <div className="my-3">
                <label className="mr-4 mb-0">Email ID&emsp;</label>
                <Input 
                placeholder="Email"
                required
                type="email"
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
                <Button variant="contained" style={{backgroundColor:'#B3E0DE', borderRadius: '5px'}} type="submit" >SignUp</Button>
                <button class="center-align bg-white pr-0 mt-4 mb-0 g-btn" onClick={googleSignin}>
                    <span className="oauth-container btn darken-4 white black-text d-flex p-0" href="/users/google-oauth/">
                    <div className="left mr-2 p-2">
                        <img width="20px"  alt="Google sign-in" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <div className="text-center g-btn-b pt-2 px-1">
                        SignUp with Google
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