import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import EcoTip from "./components/EcoTip/EcoTip";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Stats from "./components/Stats/Stats";
import Progress from "./components/Progress/Progress";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas guardadas
  useEffect(() => {
    const savedTasks = localStorage.getItem("ecotask");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Guardar tareas automáticamente
  useEffect(() => {
    localStorage.setItem("ecotask", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar tarea
  function addTask(text) {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  // Eliminar tarea
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Marcar como completada
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="app">
      <Header />

      <EcoTip />

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <Stats tasks={tasks} />

      <Progress tasks={tasks} />

      <footer className="footer">
        <p>📝SimpleTask</p>

        <small>
          Proyecto desarrollado para la materia de Ingeniería de Software
          Sostenible.
      
        </small>

       
      </footer>
    </div>
  );
}

export default App;