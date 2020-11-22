import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className='containerNav'>
			<NavLink to='/' className='link'>
				home
			</NavLink>
			<NavLink to='/privacy' className='link'>
				privacy
			</NavLink>
		</div>
	);
}

export default Navbar;
