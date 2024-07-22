"use client"

import React from 'react'

function HeaderVod(props:any) {
    return (
        <header className='container-fluid bg-warning p-2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='logo col-auto'>
                        <h1>My VOD</h1>
                    </div>
                    <nav className='col-auto ms-3'>
                        <div className='d-flex'>
                            <input className='form-control' placeholder='search for movies' />
                            <button className=' btn btn-bg-dark'>Search</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderVod