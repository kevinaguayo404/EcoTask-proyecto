import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button
        onClick={() => {
          addTask(task);
          setTask("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default TaskForm;