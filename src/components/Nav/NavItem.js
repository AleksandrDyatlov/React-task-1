import React from 'react'

function NavItem({children, style}) {
	const navItemStyle = style === 'active' ? 'active': null;

	return (
		<li className={navItemStyle}>
			<a href="#">
				{children}
			</a>
		</li>
	)
}

export default NavItem