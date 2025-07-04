"use client"
import React from 'react'

interface Props {
    label:string;
}

export default function TopicContent({label}:Props) {
  return (
    <div className=''>
        <h1 className='text-5xl font-extrabold'>{label}</h1>
    </div>
  )
}
