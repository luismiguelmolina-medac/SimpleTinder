import { useState } from 'react'
import './usuario.css'
import { Link } from 'react-router-dom'

function Usuario({ user }) {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className='user_profile'>
        <img src={user.img} alt="" />
        <p>{user.nombre} - {user.edad}</p>
      </div>
      <div className='nav_profile'>
        <Link to="/matches" className={active == 1 ? "active" : ""} onClick={() => setActive(1)}>Matches</Link>
        <Link to="/mensajes" className={active == 2 ? "active" : ""} onClick={() => setActive(2)}>Mensajes</Link>
      </div>
    </>
  )
}

export default Usuario
