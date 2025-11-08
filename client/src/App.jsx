import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, useLocation } from 'react-router-dom'


const App = () => {

  const isOnwerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOnwerPath && <Navbar />}
      
      

    </div>
  )
}

export default App