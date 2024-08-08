import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ListaCaracteristicas = [
  {
    title: 'Fácil de usar',
    src: require('@site/docs/img2/uniqueid.png').default,
    description: (
      <>
        Rapido y confiable.
      </>
    ),
  },
  {
    title: 'Enfócate en lo que importa',
    src: require('@site/docs/MixitupApp/tsl_syntax.png').default,
    description: (
      <>
        Con herramienta para que configures acciones a eventos en tu<code>LIVE</code>.
      </>
      
    ),
  },
  {
    title: 'Potenciado por la comunidad',
    src: require('@site/docs/img2/TiktokLiveAppGithub.png').default,
    description: (
      <>
         Projecto OpenSource basado en la comunidad.
      </>
    ),
  },
];

function Caracteristica({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CaracteristicasInicio() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Abre o crea la base de datos 'tasksDB'
    const request = indexedDB.open('tasksDB', 1);

    request.onerror = function(event) {
      console.error('Error al abrir la base de datos:', event.target.errorCode);
    };

    request.onupgradeneeded = function(event) {
      // Crear un almacén de objetos 'tasks'
      const db = event.target.result;
      db.createObjectStore('tasks', { keyPath: 'id' });
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      
      // Lee las tareas desde el almacén de objetos 'tasks'
      const transaction = db.transaction(['tasks'], 'readonly');
      const objectStore = transaction.objectStore('tasks');
      const getAllRequest = objectStore.getAll();
      
      getAllRequest.onsuccess = function(event) {
        setTasks(event.target.result);
      };

      transaction.oncomplete = function() {
        db.close();
      };
    };
  }, []);

  const updateTasks = (updatedTasks) => {
    const request = indexedDB.open('tasksDB', 1);
  
    request.onerror = function(event) {
      console.error('Error al abrir la base de datos:', event.target.errorCode);
    };
  
    request.onsuccess = function(event) {
      const db = event.target.result;
      
      // Actualiza las tareas en el almacén de objetos 'tasks'
      const transaction = db.transaction(['tasks'], 'readwrite');
      const objectStore = transaction.objectStore('tasks');
      
      // Borrar todas las tareas existentes
      const clearRequest = objectStore.clear();
      
      clearRequest.onsuccess = function(event) {
        // Agregar las nuevas tareas una por una
        updatedTasks.forEach(task => {
          const addRequest = objectStore.add(task);
          addRequest.onsuccess = function(event) {
            console.log('Tarea añadida con éxito.');
          };
          addRequest.onerror = function(event) {
            console.error('Error al añadir tarea:', event.target.error);
          };
        });
      };
  
      transaction.oncomplete = function() {
        db.close();
      };
    };
  };
  

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };

  const handleNewTaskSubmit = (newTaskText) => {
    if (newTaskText.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTaskText.trim(),
        completed: false,
      };
      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      updateTasks(updatedTasks);
    }
  };
  const handleTaskDelete = (taskId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      updateTasks(updatedTasks);
    }
  };
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ListaCaracteristicas.map((props, idx) => (
            <Caracteristica key={idx} {...props} />
          ))}
        </div>
        {/* <div className="row">
          <div className="col col--12">
            <h3>Checklist</h3>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                  >
                    {task.text}
                  </span>
                  <button onClick={() => handleTaskDelete(task.id)}>Eliminar</button>

                </li>
              ))}
            </ul>
            <TaskForm onSubmit={handleNewTaskSubmit} />
          </div>
        </div> */}
      </div>
    </section>
  );
}

function TaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleNewTaskChange}
        placeholder="Agregar nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}