import React from 'react'

import './style.scss'
import {IconSearch} from '../Icons';

function Search() {
	return (
		<form className="search-form" action="#">
			<input type="search" id="search" placeholder="Search Article" />
			<label htmlFor="search"><IconSearch /></label>
		</form>
	)
}

export default Search