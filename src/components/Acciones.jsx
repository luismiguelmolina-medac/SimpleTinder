import { useState } from 'react'
import './acciones.css'

function Acciones({ profile, setProfile }) {

  return (
    <>
      <div className="acciones">
        <button className="like" onClick={() => {
          profile.like = 1;
          setProfile(null);
        }}>
          👍
        </button>
        <button className="super" onClick={() => {
          profile.like = 2;
          setProfile(null);
        }}>
          💖
        </button>
        <button className="no" onClick={() => {
          setProfile(null);
        }}>
          ❌
        </button>
      </div>
    </>
  )
}

export default Acciones
