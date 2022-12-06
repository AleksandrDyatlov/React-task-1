import React from 'react'

function NavList({children}) {
	return (
		<nav className="navbar">
			<ul className="main-nav">
				{children}
			</ul>
		</nav>
	)
}

export default NavList