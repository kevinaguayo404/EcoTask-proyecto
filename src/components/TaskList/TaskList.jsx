function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>

          <button onClick={() => deleteTask(index)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;