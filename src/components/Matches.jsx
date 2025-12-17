import { useState } from 'react'
import './matches.css'
import { perfiles } from '../utils/data';

function Matches() {

  return (
    <>
      <div className='matches'>
        {perfiles.map(p => (
          p.like ? (
            <div>
              <img src={p.img} alt="" />
              <span>{p.nombre}</span>
              {p.like == 2 ? <p className="heart">♥</p> : ""}
            </div>) : null
        ))}
      </div>
    </>
  )
}

export default Matches
