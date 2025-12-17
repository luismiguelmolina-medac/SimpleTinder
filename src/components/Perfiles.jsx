import { useContext, useEffect, useRef, useState } from 'react'
import './perfiles.css'
import { perfiles } from '../utils/data';
import { CardContext } from '../contexts/CardContext';

var pos = 1;
function Perfiles({ profile, setProfile }) {
  const { cardRef } = useContext(CardContext);

  useEffect(() => {
    if (profile == null) {
      setProfile(perfiles[pos++]);
    }
  }, [profile])

  return (
    <>
      {profile && (
        <div className='tarjeta' style={{ backgroundImage: `url(${profile.img})` }} ref={cardRef}>
          <h3>{profile.nombre} - {profile.edad}</h3>
          <p>{profile.descripcion}</p>
        </div>
      )}
    </>
  )
}

export default Perfiles
