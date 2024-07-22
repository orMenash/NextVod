"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function InfoBtn() {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }
  return (
    <button className='btn btn-dark' onClick={goBack}>Back</button>
  )
}
