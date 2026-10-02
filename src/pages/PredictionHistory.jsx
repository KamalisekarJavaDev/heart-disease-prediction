import "./PredictionHistory.css";

function PredictionHistory() {

  const history = [
    {
      id: 1,
      patient: "Arun Kumar",
      age: 45,
      date: "06-07-2026",
      prediction: "High Risk"
    },
    {
      id: 2,
      patient: "Priya",
      age: 39,
      date: "05-07-2026",
      prediction: "Low Risk"
    },
    {
      id: 3,
      patient: "Ramesh",
      age: 57,
      date: "04-07-2026",
      prediction: "High Risk"
    }
  ];

  return (
    <div className="history-container">

      <div className="history-card">

        <h1>📜 Prediction History</h1>

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search Patient..."
          />

          <button>Search</button>

        </div>

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Date</th>
              <th>Prediction</th>

            </tr>

          </thead>

          <tbody>

            {history.map((item)=>(
              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.patient}</td>

                <td>{item.age}</td>

                <td>{item.date}</td>

                <td>

                  <span
                    className={
                      item.prediction==="High Risk"
                      ? "high"
                      : "low"
                    }
                  >

                    {item.prediction}

                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PredictionHistory;