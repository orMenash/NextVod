"use client"

import { useRouter } from 'next/navigation'
import BackBtn from './compnents/backBtn'
import React from 'react'

export default function ErrorVod() {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    return (
        <div className='container text-center col-md-9'>
            <div className='text-center mt-5'>
                <h2>Movise not found</h2>
                <BackBtn />
            </div>
        </div>
    )
}
