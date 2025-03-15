import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Estado para almacenar el valor del input
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(''); // Limpiar el input después de agregar
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="App">
      <h1>Mi Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;