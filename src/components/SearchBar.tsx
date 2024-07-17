import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
	return (
		<div>
			<form className='SearchBar' action="">
				<FaMagnifyingGlass className='text-white opacity-50 me-3'/>
				<input className='SearchBar__Input' type="text" placeholder='Search for games' />
				<button className='SearchBar__Categorize'><VscSettings className='fs-5' /></button>
			</form>
		</div>
	)
}

export default SearchBar
