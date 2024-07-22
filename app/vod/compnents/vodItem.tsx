import React from 'react'

export default function VodItem(props:any) {
    const item = props.item

    return (
        <div className='col-md-6 p-2 border'>
            <img src={item.Poster} className='float-start me-2 w-25' alt="" />
            <h4>{item.Title}</h4>
            <div>Year: {item.Year}</div>
            <a href="#" className='btn btn-dark mt-3'>More info</a>
        </div>
    )
}
