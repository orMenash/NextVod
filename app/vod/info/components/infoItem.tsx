import { API_KEY } from '@/app/data/secret';
import BackBtn from '../../compnents/backBtn';
import React from 'react'


export default async function InfoItem(props: any) {
    const id = props.params.id

    const url: string = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return (
        <div className='container text-center col-md-9'>
            <img src={data.Poster} className='col-3 my-3' alt="poster" />
            <h2 className='text-center'>{data.Title}</h2>
            <div>Runtime: {data.Runtime}</div>
            <div>Rating: {data.imdbRating}</div>
            <div>Genere: {data.Gener}</div>
            <p>Plot: {data.Plot}</p>
            <BackBtn />
        </div>
    )
}
