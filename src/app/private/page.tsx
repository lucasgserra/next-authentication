'use client'
import React from 'react'
import Header from '../components/header/Header'

const page = () => {

  return (
    <div>
      <Header />
      <div className='w-full max-w-screen-xl flex justify-center items-center h-screen m-auto'>
        <span>Private page!</span>
      </div>
    </div>
  )
}

export default page