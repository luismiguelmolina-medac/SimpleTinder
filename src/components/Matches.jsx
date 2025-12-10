import { useState } from 'react'
import './matches.css'
import { Profile } from '../models/Profile';

function Matches() {
  const perfiles = [
    new Profile("Ana López", "ana@mail.com", "https://i.pravatar.cc/150?img=1", 28, "Diseñadora UX, amante del cine y el café."),
    new Profile("Carlos Ruiz", "carlos@mail.com", "https://i.pravatar.cc/150?img=2", 22, "Desarrollador web, fan de la música electrónica."),
    new Profile("María Sánchez", "maria@mail.com", "https://i.pravatar.cc/150?img=3", 25, "Estudiante de arquitectura, amante de los gatos."),
    new Profile("Javier Díaz", "javier@mail.com", "https://i.pravatar.cc/150?img=4", 30, "Entrenador personal, activo y sociable."),
    new Profile("Lucía Gómez", "lucia@mail.com", "https://i.pravatar.cc/150?img=5", 37, "Fotógrafa freelance, viajera y curiosa."),
    new Profile("Daniel Torres", "daniel@mail.com", "https://i.pravatar.cc/150?img=6", 35, "Chef profesional, apasionado por nuevas recetas."),
    new Profile("Sofía Herrera", "sofia@mail.com", "https://i.pravatar.cc/150?img=7", 29, "Marketing digital, creativa y amante de libros."),
    new Profile("Miguel Castro", "miguel@mail.com", "https://i.pravatar.cc/150?img=8", 33, "Ingeniero de datos, fan de videojuegos retro."),
  ];

  return (
    <>
      <div className='matches'>
        {perfiles.map(p => (
          <div>
            <img src={p.img} alt="" />
            <span>{p.nombre}</span>
            {p.edad < 30 ? <p className="heart">♥</p> : ""}
          </div>
        ))}
      </div>
    </>
  )
}

export default Matches
