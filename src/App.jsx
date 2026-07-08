import { useState } from 'react'
import Navbar from './components/Navbar'
import MasterDental from './components/MasterDental'
import LaboServi from './components/LaboServi'
import Craft from './components/Craft'
import Works from './components/Works'
import Clinician from './components/Clinician'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <>
      <Navbar />
      <MasterDental />
      <LaboServi />
      <Craft />
      <Works />
      <Clinician />
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
