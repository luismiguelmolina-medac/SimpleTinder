import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Profile } from './models/Profile'

function App() {

  const user_profile = new Profile("Luis", "lmmolina@gmail.com", "https://media.revistagq.com/photos/606b3183a359af169e483dcb/16:9/w_2560%2Cc_limit/estar-guapo.jpeg", 33, "");

  return (
    <Routes>
      <Route path='/' element={<Home profile={user_profile} />} />
    </Routes>
  )
}

export default App
