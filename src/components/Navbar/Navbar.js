import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css';
import Logo from '../../Images/LOGO.svg'
class Navbar extends Component
{
	render(){
		<nav className="NavbarItems">
			<a className="navbar-logo">
				<img
					classNameName="app__headerImage"
					src={Logo}
					alt="Vaccinator"
				/>
			</a>
			<div className="menu-icon">

			</div>
			<ul>
				{MenuItems.map((item, index) =>{
					return(
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	}
}
export default Navbar