import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from 'react'
import './App.css'
import Homepage from './User/Component/Homepage'
import Navbar from './User/Component/Navbar'
import Uintpoins from './User/paymnets/Uintpoins'

function App() {
  return (
    <div className='bg-containers'>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element = {<Homepage />} />
          <Route path="/points" element ={<Uintpoins />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App