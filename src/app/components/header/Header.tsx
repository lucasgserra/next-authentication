import Link from 'next/link'
import React from 'react'
import SignOutButton from '../login/signout/SignOutButton'

const Header = () => {
  return (
    <div className='w-screen flex flex-row fixed items-center h-20 bg-slate-800 text-slate-50'>
        <div className='w-full max-w-screen-xl flex flex-row m-auto justify-between'>
            <h1>AuthNext</h1>
            <nav className='flex flex-row items-center gap-5'>
                <Link href='/'>Inicio</Link>
                <Link href='/private'>Private</Link>
                <Link href='/public'>Public</Link>
                <SignOutButton />
            </nav>
        </div>
    </div>
  )
}

export default Header