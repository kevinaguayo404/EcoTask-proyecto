import { useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
  };
  const deleteTask = (index) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
};

  return (
    <>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
/>
    </>
  );
}

export default App;