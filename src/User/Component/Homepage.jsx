import React from 'react'
import Footer from '../Pages/Footer'
import Grow from '../Pages/Grow'
import Home from '../Pages/Home'
import Investplans from '../Pages/Investplans'
import Profilecarousel from '../Pages/Profilecarousel'

function Homepage() {
  return (
    <div>
        <Home/>
        <Investplans/>
        <Profilecarousel />
        <Grow/>
        <Footer />
    </div>
  )
}

export default Homepage