import React from 'react'
import Header from './Components/AcedamyProgram/Header'
import ContNavbar from './Components/Home/ContNavbar'
import Navbar from './Components/Home/Navbar'
import AboutAcedamy from './Components/AcedamyProgram/AboutAcedamy'
import Socceracedamy from './Components/Home/Socceracedamy'
import Joinus from './Components/Home/Joinus'
import NeddHelp from './Components/AcedamyProgram/NeddHelp'
import Footer from './Components/Home/Footer'

const acedamyprogram = () => {
  return (
    <div>
        <ContNavbar />
        <Navbar />
        <Header />
        <AboutAcedamy />
        <Socceracedamy />
        <Joinus />
        <NeddHelp />
        <Footer />
    </div>
  )
}

export default acedamyprogram