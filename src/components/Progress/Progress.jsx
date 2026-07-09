import "./Progress.css";

function Progress({ tasks }) {

  const completed = tasks.filter(task => task.completed).length;

  const percentage =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (

    <div className="progress-card">

      <h3>📈 Progreso</h3>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

      <p>{percentage}% completado</p>

    </div>

  );

}

export default Progress;