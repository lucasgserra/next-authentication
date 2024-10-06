import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-6'>Acesso restrito</h1>
        <p className='text-base text-slate-600 mb-10'>Sem permissao...</p>
        <Link className='p-4 bg-amber-950 text-slate-50' href='/'>Voltar</Link>
    </div>
  )
}

export default page