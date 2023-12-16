'use client'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import NavItem from './NavItem';

type NavbarProps = {
  username?: string
}

enum NavbarLinks {
  './home' = 'Головна',
  './movies' = 'Фільми',
  './favourites' = 'Улюблені',
}

const Navbar: React.FC<NavbarProps> = ({username}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (path: string) => {
    router.push(path);
  }

  return (
    <nav className='w-full fixed z-40'>
      {username ? (
        <div className='px-14 md:px-16 py-8 gap-8 flex flex-row items-center justify-between transition duration-500'>
          <Image
            src='/images/nextflix.png'
            onClick={() => router.push('/home')}
            height={313}
            width={1153}
            className='cursor-pointer object-contain h-22 w-56 md:w-48 md:h-18'
            alt='nextflix logo'
          />
          <div className='flex-row ml-8 gap-6 hidden lg:flex'>
            {Object.entries(NavbarLinks).map(([path, label], index) => (
              <NavItem
                key={index} 
                path={path}
                label={label}
                active={pathname === path}
                handleClick={handleNavClick}
              />
            ))}
          </div>
          <div className='flex flex-row ml-auto gap-7 items-center'>
            <Image 
              width={60}
              height={60}
              className='rounded-md'
              src='/images/user.jpg'
              alt='nextflix avatar'
            />
            <button
              className='flex flex-row items-center bg-theme-1 pb-2 py-1.5 px-5 text-white text-xl
              hover:bg-white hover:text-theme-1 cursor-pointer rounded-md transition'
              onClick={() => router.push('/auth')}
            >
              Вийти
            </button>
          </div>
        </div>
      ) : (
        <div className='px-14 md:px-16 py-8 flex flex-row items-center justify-between transition duration-500'>
           <Image
            src='/images/nextflix.png'
            height={313}
            width={1153}
            className='cursor-pointer object-contain h-22 w-56 md:w-48 md:h-18'
            alt='nextflix logo'
          />
          <button
            className='flex flex-row items-center bg-theme-1 pb-2 py-1.5 px-5 text-white text-xl
            hover:bg-white hover:text-theme-1 cursor-pointer rounded-md transition'
            onClick={() => router.push('/auth')}
          >
            Увійти
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;