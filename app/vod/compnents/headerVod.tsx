"use client"

import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

function HeaderVod(props:any) {
    const inputRef:any = useRef();
    const router = useRouter()

    const nvigatToNewSearch = () => {
        let url:string = `/vod?s=${inputRef.current.value}`
        router.push(url)
    }

    return (
        <header className='container-fluid bg-warning p-2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='logo col-auto'>
                        <h1>My VOD</h1>
                    </div>
                    <nav className='col-auto ms-3'>
                        <div className='d-flex'>
                            <input ref={inputRef} onInput={nvigatToNewSearch} className='form-control' placeholder='search for movies' />
                            <button onClick={nvigatToNewSearch} className=' btn btn-bg-dark'>Search</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderVod