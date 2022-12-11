import React from 'react'

import './style.scss';

function Header({children, logoUrl}) {
	return (
		<header className="header">
			<div className="container">
				<strong className="logo">
					<a href="#"><img src={logoUrl} alt="My App" /></a>
				</strong>
				<nav className="navbar">
					{children}
				</nav>
			</div>
		</header>
	)
}

export default Header