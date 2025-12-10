import { useState } from 'react'
import './usuario.css'
import { Link } from 'react-router-dom'

function Usuario({ user }) {


  return (
    <>
      <div className='user_profile'>
        <img src={user.img} alt="" />
        <p>{user.nombre} - {user.edad}</p>
      </div>
      <div className='nav_profile'>
        <Link to="/matches" className='active'>Matches</Link>
        <Link to="/mensajes">Mensajes</Link>
      </div>
    </>
  )
}

export default Usuario
