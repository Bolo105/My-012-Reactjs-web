import React from 'react'
import { NavbarTop } from './NavbarTop'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div>
      <NavbarTop />
      <Navbar />
         {children}
      <Footer />
    </div>
  )
}
