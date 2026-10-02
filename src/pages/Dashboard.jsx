import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>❤️ HeartAI</h2>

        <ul>
          <li className="active">
            <Link to="/dashboard">🏠 Dashboard</Link>
          </li>

          <li>
            <Link to="/train">🤖 Train Model</Link>
          </li>

          <li>
            <Link to="/prediction">❤️ Prediction</Link>
          </li>

          <li>
            <Link to="/history">📜 Prediction History</Link>
          </li>

          <li>
            <Link to="/profile">👤 Profile</Link>
          </li>

          <li>
            <Link to="/settings">⚙️ Settings</Link>
          </li>

          <li>
            <Link to="/about">❓ About</Link>
          </li>

          <li>
            <Link to="/contact">📞 Contact</Link>
          </li>

          <li>
            <Link to="/">🚪 Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Navbar */}
        <div className="navbar">
          <h2>Heart Disease Prediction System</h2>

          <div className="user">
            <span>Welcome, Kamali 👋</span>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card blue">
            <h3>Total Predictions</h3>
            <h1>256</h1>
          </div>

          <div className="card green">
            <h3>Model Accuracy</h3>
            <h1>96.8%</h1>
          </div>

          <div className="card orange">
            <h3>Patients Checked</h3>
            <h1>530</h1>
          </div>

          <div className="card red">
            <h3>High Risk Cases</h3>
            <h1>41</h1>
          </div>

        </div>

        {/* Welcome */}
        <div className="welcome">
          <h2>Welcome to Heart Disease Prediction System ❤️</h2>

          <p>
            This AI-powered system predicts heart disease risk using
            Machine Learning (Random Forest Algorithm).
          </p>
        </div>

        {/* Quick Actions */}
        <div className="actions">

          <Link to="/train">
            <button>Train Model</button>
          </Link>

          <Link to="/prediction">
            <button>Predict Patient</button>
          </Link>

          <Link to="/history">
            <button>Prediction History</button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;