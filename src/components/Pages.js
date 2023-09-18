import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Home'
import { About } from './About'
import { Services } from './Services'
import { Destination } from './Destination'
import { Packages } from './Packages'
import { Booking } from './Booking'
import { Guides } from './Guides'
import { Layout } from './Layout'
import { Contact } from './Contact'

export const Pages = () => {
  return (
    <div>
       <Router>
           <Routes>
               <Route path="/" element={<Layout><Home /></Layout>} />  
               <Route path="/about" element={<Layout><About /></Layout>} />
               <Route path="/services" element={<Layout><Services /></Layout>}/>
               <Route path="/destination" element={<Layout><Destination /></Layout>}/>
               <Route path="/packages" element={<Layout><Packages /></Layout>}/>
               <Route path="/booking" element={<Layout><Booking /></Layout>}/>
               <Route path="/guides" element={<Layout><Guides /></Layout>}/>
               <Route path="/contact" element={<Layout><Contact /></Layout>} />
           </Routes>
       </Router>
    </div>
  )
}
