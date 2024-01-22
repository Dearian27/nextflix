'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'
import { signIn } from 'next-auth/react';

import AnimBackground from '@/app/components/AnimBackground';
import BgProvider from '@/app/components/BgProvider';

import Image from 'next/image';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import axios from 'axios';

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

  const login = async(e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    try {
      await signIn(
        "credentials",
        {
          email,
          password,
          redirect: true,
          callbackUrl: "/home"
        }
      )
    } catch(error) {
      console.log("Login error", error);
    }
  }
  
  const register = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/register",
        {
          email,
          name,
          password,
        }
      ).catch(error => {console.log("IRROR", error)})
      login();
    } catch(error) {
      console.log("Register error", error);
    }
  }

  return (
    <BgProvider removeBgOnMobile>
      <AnimBackground />
      <nav className='py-6 px-14 md:px-16'>
        <Image
          src='/images/nextflix.png'
          onClick={() => router.push('/')}
          height={313}
          width={1153}
          className='cursor-pointer object-contain h-22 w-56 md:w-48 md:h-18'
          alt='nextflix logo'
        />
      </nav>
      <form className='flex justify-center' onSubmit={variant === 'login' ? login : register}>
        <div className="bg-black/70 p-16 self-center mt-2 lg:w-4/5 lg:max-w-xl rounded-md w-full box-border">
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

          <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
            <button
              className='bg-white p-1 rounded-full hover:opacity-80 transition duration-500'
              onClick={() => signIn('google', { callbackUrl: '/home'})}
              >
              <FaGoogle size={30} />
            </button>
            <button
              className='bg-white p-1 rounded-full hover:opacity-80 transition duration-400'
              onClick={() => signIn('github', { callbackUrl: '/home'})}
            >
              <FaGithub size={30} />
            </button>
          </div>

          <p className='text-neutral-500 mt-10'>
            {variant === 'login' ? "Уперше на Nextflix?" : "Уже маєте акаунт?"}
            <span 
              className='text-white hover:underline transition ml-1 cursor-pointer'
              onClick={() => handleFormChange()}
            >
              {variant === 'login' ? "Зареєструватися" : "Увійти"}
            </span>
          </p>
        </div>
      </form>
    </BgProvider>
  )
}

export default AuthPage