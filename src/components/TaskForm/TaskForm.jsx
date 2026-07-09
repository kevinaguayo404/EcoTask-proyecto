import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {

  const [text, setText] = useState("");

  function handleSubmit() {

    addTask(text);

    setText("");

  }

  return (

    <div className="task-form">

      <input

        type="text"

        placeholder="Escribe una nueva tarea..."

        value={text}

        onChange={(e)=>setText(e.target.value)}

      />

      <button onClick={handleSubmit}>

        Agregar

      </button>

    </div>

  );

}

export default TaskForm;