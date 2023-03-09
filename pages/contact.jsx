import React from 'react'
import Header from './Components/Contact/Header'
import InTouch from './Components/Contact/InTouch'
import ContNavbar from './Components/Home/ContNavbar'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'

const contact = () => {
  return (
    <div>
      <ContNavbar />
      <Navbar />
      <Header />
      <InTouch />
      <Footer />
    </div>
  )
}

export default contact