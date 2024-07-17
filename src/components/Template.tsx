import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import GameSwiper from './GameSwiper'

function Template() {
  return (
    <div className='Template'>
        <header className="Header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9 offset-md-3 p-0">
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-9">
                        <GameSwiper></GameSwiper>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Template
