import React from 'react'
import './style.scss'

function Footer({children}) {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					{children}
				</div>
			</div>
		</footer>
	)
}

export default Footer