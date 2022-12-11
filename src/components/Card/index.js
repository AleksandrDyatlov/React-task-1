import React from 'react'

import './style.scss'
import {IconView, IconComment} from '../Icons';

function Card({style, img, title, text, linkUrl, views, comments}) {
	const cardStyle = style === 'horizontal' ? 'card card-horizontal': 'card';

	return (
		<div className={cardStyle}>
			<img src={img} alt="image description" className="card-img" />
			<div className="card-holder">
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{text}</p>
				</div>
				<div className="card-footer">
					<a className="btn btn-more" href={linkUrl}>Read more</a>
					<ul className="card-info">
						<li>
							<IconView />
							{views}
						</li>
						<li>
							<IconComment />
							{comments}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Card