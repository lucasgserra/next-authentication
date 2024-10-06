'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button onClick={()=> signOut()}>Sair</button>
  )
}

export default SignOutButton