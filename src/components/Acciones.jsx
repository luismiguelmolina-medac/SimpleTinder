import { useState } from 'react'
import './acciones.css'
import { SwipeCard } from '../hooks/SwipeCard';

function Acciones({ profile, setProfile }) {

  const [like, setLike] = useState(0);
  SwipeCard(like, setProfile, setLike);

  return (
    <>
      <div className="acciones">
        <button className="like" onClick={() => {
          profile.like = 1;
          setLike(1);
        }}>
          👍
        </button>
        <button className="super" onClick={() => {
          profile.like = 2;
          setLike(2);
        }}>
          💖
        </button>
        <button className="no" onClick={() => {
          setLike(-1);
        }}>
          ❌
        </button>
      </div>
    </>
  )
}

export default Acciones
