'use client'
import React from 'react';

type NavItemProps = {
  path: string,
  label: string,
  active: boolean,
  handleClick: (path: string) => void,
}

const NavItem: React.FC<NavItemProps> = ({path, label, active, handleClick}) => {
  return (
    <span className={`text-lg ${active ? 'pb-[1px] cursor-default border-b-2 text-white' : 'text-gray-100/75 hover:text-white cursor-pointer transition'}`}
      onClick={() => handleClick(path)}
    >
      {label}
    </span>
  )
}

export default NavItem;