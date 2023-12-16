// 'use client'
import React from 'react'
import AnimationRow from './AnimationRow'

export const images = [
  '/images/items/best-christmas.jpg',
  '/images/items/castle.jpg',
  '/images/items/baby-boss.jpg',
  '/images/items/christmas-chronics.jpg',
  '/images/items/couple.jpg',
  '/images/items/exchange.jpg',
  '/images/items/scrudge.jpg',
  '/images/items/flour-lava.jpg',
  '/images/items/mavka.jpg',
  '/images/items/freedom.jpg',
  '/images/items/leo.jpg',
  '/images/items/mitchel.jpg',
  '/images/items/never-look-up.jpg',
  '/images/items/red-message.jpg',
  '/images/items/bad-guys.jpg',
  '/images/items/shon.jpg',
  '/images/items/simple-christmas.jpg',
  '/images/items/together.jpg',
]

const AnimBackground = () => {
  return (
    <section className={`wrapper`}>
      <section className='container'>      
        <AnimationRow side={'left'}  id={0} shuffle plus={0 * 6} length={6} />
        <AnimationRow side={'right'} id={1} shuffle plus={1 * 6} length={6} />
        <AnimationRow side={'left'}  id={2} shuffle plus={2 * 6} length={6} />
        <AnimationRow side={'right'} id={3} shuffle plus={3 * 6} length={6} />
      </section>
    </section>
  )
}

export default AnimBackground