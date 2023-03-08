import React from 'react'
import Features from './Components/Home/About/Features'
import OurAwards from './Components/Home/About/OurAwards'
import ContaNavbar from './Components/Home/ContNavbar'
import Navbar from './Components/Home/Navbar'
import OurClub from './Components/Home/OurClub'
import Player from './Components/Home/Player'
const about = () => {
  return (
    <div>
      <ContaNavbar />
      <Navbar />
      <OurClub bgImage='your_image_url_here' />
      <Features />
      <Player backgroundColor='transparent'/>
      <OurAwards />
    </div>
  )
}

export default about