import React from 'react'
import Features from './Components/Home/About/Features'
import OurAwards from './Components/Home/About/OurAwards'
import Peoplesay from './Components/Home/About/Peoplesay'
import ContaNavbar from './Components/Home/ContNavbar'
import Navbar from './Components/Home/Navbar'
import OurClub from './Components/Home/OurClub'
import Player from './Components/Home/Player'
import Footer from './Components/Home/Footer'

const about = () => {
  return (
    <div>
      <ContaNavbar />
      <Navbar />
      <OurClub  />
      <Features />
      <Player backgroundColor='transparent'/>
      <OurAwards />
      <Peoplesay />
      <Footer />
    </div>
  )
}

export default about