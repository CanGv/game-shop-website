import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { FaMagnifyingGlass } from "react-icons/fa6";

function Searchbar() {
	return (
		<div>
			<form className='Searchbar' action="">
				<FaMagnifyingGlass className='text-white opacity-50 me-3'/>
				<input className='Searchbar__Input' type="text" placeholder='Search for games' />
				<button className='Searchbar__Categorize'><VscSettings className='fs-5' /></button>
			</form>
		</div>
	)
}

export default Searchbar
