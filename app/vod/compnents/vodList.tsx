import { API_KEY } from '@/app/data/secret';
import React from 'react'
import VodItem from './vodItem';
import BackBtn from './backBtn';

export default async function VodList(props: any) {

    const searchQ = props.searchParams?.s || 'man'
    const url = `http://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const vod_ar = data.Search

    let x = []

    console.log(data.Search);
    if (vod_ar) {
        return (
            <div className='container'>
                <h1>List of Shows:</h1>
                <div className='row'>
                    {vod_ar.map((item: any) => {
                        return (
                            <VodItem key={item.imdbID} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className='container text-center col-md-9'>
                <div className='text-center mt-5'>
                    <h2>Movise not found</h2>
                    <BackBtn/>
                </div>
            </div>
        )
    }
}
