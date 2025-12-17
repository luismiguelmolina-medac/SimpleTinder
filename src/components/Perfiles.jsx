import { useEffect, useState } from 'react'
import './perfiles.css'
import { perfiles } from '../utils/data';

var pos = 1;
function Perfiles({ profile, setProfile }) {

  useEffect(() => {

    if (profile == null) {
      setProfile(perfiles[pos++]);
    }
  }, [profile])

  return (
    <>
      {profile && (
        <div className='tarjeta' style={{ backgroundImage: `url(${profile.img})` }}>
          <h3>{profile.nombre} - {profile.edad}</h3>
          <p>{profile.descripcion}</p>
        </div>
      )}
    </>
  )
}

export default Perfiles
