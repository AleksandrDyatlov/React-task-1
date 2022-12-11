import React from 'react'

function FooterInfo({logoUrl}) {
	return (
		<div className="footer-col-1">
			<strong className="footer-logo">
				<a href="#"><img src={logoUrl} alt="My App" /></a>
			</strong>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<span className="copyright">&copy;My-app 2022. All rights reserved</span>
		</div>
	)
}

export default FooterInfo
