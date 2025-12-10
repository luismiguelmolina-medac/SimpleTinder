import { useState } from 'react'
import './mensajes.css'

function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
  return (
    <>
      <div className="chat_container">
        <div className="chat_messages">
          {mensajes.map(m => (
            <p>{m}</p>
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
