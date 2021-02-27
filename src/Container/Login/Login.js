import React,{useState}  from 'react';
import { Button,Input } from '@material-ui/core';

import Logo from '../../Images/Logo.jpeg'

export default function Login()
{
	const[username,setUsername]=useState('');
	const[password,setPassword]=useState('');
	const[email,setEmail]=useState('');
	const[user,setUser]=useState(null);
	// const [user,setUser] = useState(false);
	return(
		<div className="Login pb-4">
		<div className="login_bg py-5">
			<form className="fullform pb-5">
			<center>
				<img
				className="app__headerImage"
				src={Logo}
				alt="Vaccinator"
				/>
			<div className="d-flex flex-column align-items-center justify-content-center login-form mt-4">
				<div className="my-3">
				<label className="mr-4 mb-0">Username</label>
				<Input 
				placeholder="Username"
				type="text"
				value={username}
				onChange={(e)=>setUsername(e.target.value)}
				/>
				</div>
				<div className="my-3">
				<label className="mr-4 mb-0">Email ID&emsp;</label>
				<Input 
				placeholder="Email"
				type="text"
				value={email}
				onChange={(e)=>setEmail(e.target.value)}
				/>
				</div>
				<div className="mt-3 mb-5">
				<label className="pass-label mb-0">Password</label>
				<Input 
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e)=>setPassword(e.target.value)}
				/>
				</div>
				<Button variant="contained" style={{backgroundColor:'#B3E0DE', borderRadius: '5px'}} type="submit" >Sign Up</Button>
			</div>
			</center>
			</form>
		</div>
		</div>
	)

}