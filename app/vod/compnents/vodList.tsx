import { API_KEY } from '@/app/data/secret';
import React from 'react'
import VodItem from './vodItem';

export default async function VodList(props:any) {

    const searchQ = props.searchParams.s || 'man'
    const url = `http://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const vod_ar = data.Search

    let x = []

    console.log(data.Search);
    
  return (
    <div className='container'>
        <h1>List of Shows:</h1>
        <div className='row'>
            {(vod_ar) ? vod_ar.map((item:any) => {
                return(
                    <VodItem key={item.imdbID} item={item}/>
                )
            }) : 'no movise'}
        </div>
    </div>
  )
}
