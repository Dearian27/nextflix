'use client'

import BgProvider from '@/app/components/BgProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

type FormVariant = 'login' | 'register';

const AuthPage = () => {
  const router = useRouter();

  const [variant, setVariant] = useState<FormVariant>('login');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleFormChange = () => {
    setVariant(prev => (
      prev === 'login' ? 'register' : 'login'
    ))
  }

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  }
  
  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }

  return (
    <BgProvider removeBgOnMobile>
      <nav className='py-8 px-14 md:px-16'>
        <Image
          src='/images/nextflix.png'
          onClick={() => router.push('/')}
          height={313}
          width={1153}
          className='cursor-pointer h-22 w-56'
          alt='nextflix logo'
        />
      </nav>
      <form className='flex justify-center' onSubmit={variant === 'login' ? login : register}>
        <div className="bg-black/70 p-20 self-center mt-2 lg:w-4/5 lg:max-w-xl rounded-md w-full box-border">
          <h2 className='text-white text-4xl font-semibold mb-8'>
            {variant === 'login' ? 'Вхід' : 'Реєстрація'}
          </h2>
          <div className="flex flex-col gap-4">
            {variant === 'register' && (
              <div className="form-element">
                <input className='input' type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label className="floating-label" htmlFor="name">Ім&apos;я</label>
              </div>
            )}
            <div className="form-element">
              <input className='input' type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label className="floating-label" htmlFor="email">Пошта</label>
            </div>
            <div className="form-element">
              <input className='input' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label className="floating-label" htmlFor="password">Пароль</label>
            </div>
          </div>
          <button
            type='submit'
            className='bg-theme-1 py-4 text-white rounded-md w-full mt-10 hover:bg-theme-1/80 transition duration-500 text-lg font-semibold'
          >
            {variant === 'login' ? 'Увійти' : 'Зареєструватись'}
          </button>
        </div>
      </form>
    </BgProvider>
  )
}

export default AuthPage