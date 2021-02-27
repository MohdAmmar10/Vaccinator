import React from 'react';
import Logo from '../../Images/LOGO.svg'
const Card = props=>{
	return(
		<div className="card text-center">
			<div className="overflow">
				<img src={Logo} alt="Img1" className="card-img-tops"/>
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">Card Title</h4>
				<p className="card-text text-secondary">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptates reiciendis placeat delectus? Earum rerum cum a nostrum! Possimus vel quasi non inventore alias cum illum eligendi explicabo, quas tempore!
				</p>
				<a href="#" className="btn btn-outline-success"Go></a>
			</div>
		</div>
	);
}
export default Card;