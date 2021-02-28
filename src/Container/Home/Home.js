import React,{useContext} from 'react';
import './Home.css';
import Logo from '../../Images/LOGO.svg'
import Bgimg from '../../Images/Covid.jpg'
import Card from '../../Cards/Card';
import {Link} from 'react-router-dom'
import { UserContext } from "../../providers/UserProvider";
// import Navbar from "./Component/Navbar";
export default function Home()
{
	const user = useContext(UserContext)[0];
	
	console.log(user)
	return(
		<div>
			{/* <Navbar /> */}
			<nav className="navbar sticky-top navbar-expand-md navbar-light bg-dark">
				<img
					className="app__headerImage"
					src={Logo}
					alt="Vaccinator"
					width="100"
					height="100"
				/>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navlinks" aria-label="Togglenavigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navlinks">
    				<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">HOME</Link>
						</li>
						
						{user===null||user===undefined?
						<>
						<li className="nav-item">
							<Link className="nav-link" to="/login">LOGIN</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/register">SIGNUP</Link>
						</li>
						</>
						:
						<>
						<li className="nav-item">
							<Link className="nav-link" to="/centers">ALL CENTERS</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/nearby-centers">NEARBY CENTERS</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/locations">MAP</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" to="/account">MYACCOUNT</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link" to="/signout">SIGNOUT</Link>
						</li>
						</>
						}
    				</ul>
  				</div>
			</nav>
			<div>
				<img
					className="app__headerImage"
					src={Bgimg}
					alt="Banner"
					className ="responsive" 
					width="600" 
					height="400"
				/>
			</div>
			<div className="container-fluid d-flex justify-content-center" id="card">
				<div className="row">
					<div className=" col-12 col-md-4">
						<Card head={"All Centers"} desc={"This page contains list of all centers"} link={"/centers"} />
					</div>
					<div className="col-12 col-md-4">
					<Card head={"Nearset Centers"} desc={"This page contains centers near you"} link={"/nearby-centers"} />
					</div>
					<div className="col-12 col-md-4">
					<Card head={"Map"} desc={"This page contains all centers in map"} link={"/location"} />
					</div>
				</div>
			</div>
			<footer class="bg-dark text-white text-center text-lg-start">
				<div class="container p-3">
					<div class="row">
						<div class="col-lg-6 col-md-12 mb-4 mb-md-0">
							<img
								className="app__headerImage"
								src={Logo}
								alt="Vaccinator"
								width="200"
								height="200"
							/>
						</div>
						<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5 class="text-uppercase">Quick Links</h5>
							<ul class="list-unstyled mb-0">
							<li className="nav-item">
							<Link className="nav-link" to="/">HOME</Link>
						</li>
						
						{user===null||user===undefined?
						<>
						<li className="nav-item">
							<Link className="nav-link" to="/login">LOGIN</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/register">SIGNUP</Link>
						</li>
						</>
						:
						<>
						<li className="nav-item">
							<Link className="nav-link" to="/centers">ALL CENTERS</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/nearby-centers">NEARBY CENTERS</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/locations">MAP</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" to="/account">MYACCOUNT</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link" to="/signout">SIGNOUT</Link>
						</li>
						</>
						}
							</ul>
						</div>
						{/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5 class="text-uppercase mb-0">Links</h5>
							<ul class="list-unstyled">
							<li>
								<a href="#!" class="text-white">Link 1</a>
							</li>
							<li>
								<a href="#!" class="text-white">Link 2</a>
							</li>
							<li>
								<a href="#!" class="text-white">Link 3</a>
							</li>
							<li>
								<a href="#!" class="text-white">Link 4</a>
							</li>
							</ul>
						</div> */}
					</div>
				</div>
				<div class="text-center p-3">
					© 2020 Copyright:
					<a class="text-white" href="https://vaccinator.com/">Vaccinator</a>
				</div>
			</footer>
		</div>
	)

}