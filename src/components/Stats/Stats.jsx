import "./Stats.css";

function Stats({ tasks }) {

  const completed =
    tasks.filter(task => task.completed).length;

  const pending =
    tasks.length - completed;

  return (

    <div className="stats">

      <div className="stat-card">

        <h3>📝</h3>

        <h2>{tasks.length}</h2>

        <p>Total</p>

      </div>

      <div className="stat-card">

        <h3>✅</h3>

        <h2>{completed}</h2>

        <p>Completadas</p>

      </div>

      <div className="stat-card">

        <h3>🕒</h3>

        <h2>{pending}</h2>

        <p>Pendientes</p>

      </div>

    </div>

  );

}

export default Stats;