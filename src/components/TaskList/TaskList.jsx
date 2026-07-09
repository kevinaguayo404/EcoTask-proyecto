import "./TaskList.css";

function TaskList({ tasks, deleteTask, toggleTask }) {

  if (tasks.length === 0) {
    return (
      <div className="empty">
        <h3>Todo está en orden</h3>

        <p>
          Agrega tu primera tarea para comenzar.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (

        <div className="task-card" key={task.id}>

          <div className="task-info">

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span
              className={
                task.completed
                  ? "completed"
                  : ""
              }
            >
              {task.text}
            </span>

          </div>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            🗑️
          </button>

        </div>

      ))}

    </div>
  );
}

export default TaskList;