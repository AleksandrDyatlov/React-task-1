import React from 'react'
import './style.scss'

function Search() {
	return (
		<form className="search-form" action="#">
			<input type="search" id="search" placeholder="Search Article" />
			<label htmlFor="search"><i className="icon-search"></i></label>
		</form>
	)
}

export default Search