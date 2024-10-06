'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/header/Header';

const page = () => {

    const {data: session} = useSession();

  return (
    <>
       <Header />
      <div className='w-full max-w-screen-xl flex justify-center items-center flex-col h-screen m-auto'>
        <span>Public page!</span>
        {session && <pre
         className='p-5 bg-slate-800 text-slate-50 rounded-lg mt-10'>{JSON.stringify(session, null, 2)}</pre>}
      </div>
    </>
  )
}

export default page