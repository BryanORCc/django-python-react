import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/todoitems/', {
        title,
        completed,
      });

      // Realizar acciones después de la inserción exitosa
      console.log('Data insertada:', response.data);

      // Reiniciar los campos del formulario
      setTitle('');
      setCompleted(false);
    } catch (error) {
      // Manejar errores de inserción
      console.error('Error al insertar los datos:', error);
    }
  };

  return (
    <div>
      <h1>LOAD APP DDDDD</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default App;
