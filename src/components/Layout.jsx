import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({children}) {
  return (
    <div className='h-screen'>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
