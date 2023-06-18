import React from 'react'
import Navbar from '../../components/Navbar'
import Homebackground from '../../components/Home/Homebackground'

export default function HomePage() {
  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <Homebackground/>
      </div>
    </div>
  )
}
