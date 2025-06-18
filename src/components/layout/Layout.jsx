import React from 'react'
import Navbar from '../nabar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
      
    </div>
  )
}
