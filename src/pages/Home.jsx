import { useState } from 'react'
import './home.css'
import Usuario from '../components/Usuario'
import Matches from '../components/Matches'
import Mensajes from '../components/Mensajes'
import { Route, Routes } from 'react-router-dom'

function Home({ profile }) {

  return (
    <>
      <div className='leftContent'>
        <Usuario user={profile} />
        <Routes>
          <Route path='/' element={<Matches />} />
          <Route path='/matches' element={<Matches />} />
          <Route path='/mensajes' element={<Mensajes />} />
        </Routes>
      </div>
    </>
  )
}

export default Home
