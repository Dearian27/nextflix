import React from 'react'

type BgProviderProps = {
  children: React.ReactNode,
  removeBgOnMobile?: boolean
}

const BgProvider: React.FC<BgProviderProps> = ({removeBgOnMobile, children}) => {
  return (
    <section className={`h-full w-full bg-[url("/images/main-bg2.jpg")] bg-no-repeat bg-center bg-fixed bg-cover`}>
      <div className={`bg-black w-full h-full 
        ${removeBgOnMobile ? 'lg:bg-opacity-60' : 'bg-opacity-60'}
      `}>
        {children}
      </div>
    </section>
  )
}

export default BgProvider