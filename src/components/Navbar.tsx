import React from 'react'
import { GrFavorite } from 'react-icons/gr'
import { IoBagOutline } from 'react-icons/io5'
import { TbShoppingBag } from 'react-icons/tb'
import { VscSettings } from 'react-icons/vsc'
import SearchBar from './SearchBar'

function Navbar() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 p-0">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid d-flex justify-space-between Navbar">
                            <SearchBar></SearchBar>
                            <div className="collapse navbar-collapse ms-auto mb-2 mb-lg-0 Navbar__Collapse" id="navbarText">
                                <div className=''>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                                        <li className="nav-item">
                                            <a className="Navbar__Favorite nav-link active" aria-current="page" href="#"><GrFavorite /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="Navbar__Basket nav-link" href="#"><IoBagOutline /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Me</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
