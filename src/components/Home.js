import React from 'react'

import { Hero } from './Hero'
import { About } from './About'
import { Services } from './Services'
import { Destination } from './Destination'
import { Packages } from './Packages'
import { Booking } from './Booking'
import { Process } from './Process'
import { Guides } from './Guides'
import { Contact } from './Contact'


export const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Destination />
        <Packages />
        <Booking />
        <Process />
        <Guides />
        <Contact />
    </div>
  )
}
