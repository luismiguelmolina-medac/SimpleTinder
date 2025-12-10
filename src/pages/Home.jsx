import { useState } from 'react'
import './home.css'
import Usuario from '../components/Usuario'

function Home({ profile }) {

  return (
    <>
      <Usuario user={profile} />
      <h1>Hola Mundo {profile.nombre}</h1>
    </>
  )
}

export default Home
