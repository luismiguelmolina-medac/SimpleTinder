import { useState } from 'react'
import './home.css'
import Usuario from '../components/Usuario'
import Matches from '../components/Matches'
import Mensajes from '../components/Mensajes'
import { Route, Routes } from 'react-router-dom'
import Perfiles from '../components/Perfiles'
import Acciones from '../components/Acciones'
import { perfiles } from '../utils/data'

function Home({ profile }) {
  const [prof, setProf] = useState(perfiles[0]);

  return (
    <>
      <div className='content'>
        <div className='leftContent'>
          <Usuario user={profile} />
          <Routes>
            <Route path='/' element={<Matches />} />
            <Route path='/matches' element={<Matches />} />
            <Route path='/mensajes' element={<Mensajes />} />
          </Routes>
        </div>
        <div className='rightContent'>
          <Perfiles profile={prof} setProfile={setProf} />
          <Acciones profile={prof} setProfile={setProf} />
        </div>
      </div>
    </>
  )
}

export default Home
