import { useState } from 'react'
import Navbar from './components/Navbar'
import MasterDental from './components/MasterDental'
import LaboServi from './components/LaboServi'
import Craft from './components/Craft'
import Works from './components/Works'
import Clinician from './components/Clinician'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    </>
  )
}

export default App
