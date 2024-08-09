import React from 'react'
import "./index.css"
import LandingPage from './LandingPage'
import TicketPage from './TicketPage'
import Navbar from './Navbar'

function App() {
  return (
    <div className=' font-Montserrat' >
      <Navbar/>
      <LandingPage/>
      <TicketPage/>
    </div>
  )
}

export default App
