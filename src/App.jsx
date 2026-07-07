import { useState } from 'react'
import Navbar from './components/Navbar'
import MasterDental from './components/MasterDental'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MasterDental />
    </>
  )
}

export default App
