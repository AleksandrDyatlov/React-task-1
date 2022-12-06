import React from 'react'
import './style.scss';

function Header({children}) {
	return (
		<header className="header">
			<div className="container">
				<strong className="logo">
					<a href="#"><img src="images/logo.svg" alt="My App" /></a>
				</strong>
				{children}
			</div>
		</header>
	)
}

export default Header