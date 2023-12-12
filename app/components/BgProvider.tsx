import React from 'react'
import AnimBackground from './AnimBackground'

type BgProviderProps = {
  children: React.ReactNode,
  removeBgOnMobile?: boolean
}

const BgProvider: React.FC<BgProviderProps> = ({removeBgOnMobile, children}) => {
  return (
    <>
      <section className={`h-full w-full bg-no-repeat bg-cover background`}>
        <div className={`bg-black w-full h-full 
          ${removeBgOnMobile ? 'lg:bg-opacity-60' : 'bg-opacity-75'}
        `}>
          {children}
        </div>
      </section>
    </>
  )
}

export default BgProvider