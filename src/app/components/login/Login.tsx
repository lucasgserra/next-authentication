'use client'
import React, { useState } from 'react'

import {Key} from 'lucide-react';
import {useForm} from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

type ISignData =  {
  email: string;
  password: string;
}

const Login = () => {
  const {register, handleSubmit} = useForm<ISignData>();

  async function handleSignIn(data: ISignData) {
    const result = await signIn('credentials', {redirect: false, email: data.email, password: data.password, callbackUrl: '/private'})
    
    if (result?.error) {
      setErr('Erro no login. Tente novamente.')
    } else {
      setErr(null);
      window.location.href = '/private'
    }
  }

  const [err, setErr] = useState<string | null>(null)

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className='flex flex-col gap-3 items-center bg-slate-100 p-12 rounded-xl shadow-2xl'>
        <div className='flex items-center mb-10'>
            <Key className='size-8 fill-yellow-300'/>
            <h1 className='font-bold text-2xl'>AuthNext</h1>
        </div>
        {err && (
        <div className="alert alert-error shadow-lg text-white">
          <div>
            <span>{err}</span>
          </div>
        </div>
      )}
        <h2 className='font-bold text-xl'>Login</h2>
        <input {...register('email')} className='input input-primary' type="text" placeholder='seu_email@email.com' />
        <input {...register('password')} className='input input-primary' type="password" placeholder='Senha' />
        <button className='btn btn-primary' type="submit">Login</button>

        <Link href={'/private'}>Private!</Link>
    </form> 
  )
}

export default Login