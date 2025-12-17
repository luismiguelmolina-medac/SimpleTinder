import { useEffect, useRef, useState } from 'react'
import './mensajes.css'
import { animate } from 'animejs';

function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
  const lastMsgRef = useRef(null);

  useEffect(() => {
    if (!(lastMsgRef.current instanceof HTMLElement)) return;
    animate(lastMsgRef.current, {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 400,
      ease: 'out(3)'
    });
  }, [mensajes]);

  return (
    <>
      <div className="chat_container">
        <div className="chat_messages">
          {mensajes.map((m, i) => (
            <p
              key={i}
              ref={i == mensajes.length - 1 ? lastMsgRef : null}
            >
              {m}
            </p>
          ))}
        </div>
        <div className="chat_input">
          <input type="text" onKeyUp={(e) => {
            if (e.key == "Enter") {
              setMensajes([...mensajes, e.target.value]);
              e.target.value = "";
            }
          }} placeholder="Escribe un mensaje..." />
        </div>
      </div >
    </>
  )
}

export default Mensajes
