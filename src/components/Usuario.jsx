import { useState } from 'react'
import './usuario.css'

function Usuario({ user }) {


  return (
    <>
      <div className='user_profile'>
        <img src={user.img} alt="" />
        <p>{user.nombre} - {user.edad}</p>
      </div>
    </>
  )
}

export default Usuario
