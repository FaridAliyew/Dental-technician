import { useState } from 'react'
import Navbar from './components/Navbar'
import MasterDental from './components/MasterDental'
import LaboServi from './components/LaboServi'
import Craft from './components/Craft'

function App() {
  return (
    <>
      <Navbar />
      <MasterDental />
      <LaboServi/>
      <Craft/>
    </>
  )
}

export default App
