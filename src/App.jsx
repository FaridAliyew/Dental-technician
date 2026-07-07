import { useState } from 'react'
import Navbar from './components/Navbar'
import MasterDental from './components/MasterDental'
import LaboServi from './components/LaboServi'

function App() {
  return (
    <>
      <Navbar />
      <MasterDental />
      <LaboServi/>
    </>
  )
}

export default App
