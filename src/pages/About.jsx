import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-card">

        <h1>❤️ About Heart Disease Prediction System</h1>

        <p>
          The Heart Disease Prediction System is an AI-powered healthcare
          application that predicts the possibility of heart disease based on
          patient health parameters using Machine Learning.
        </p>

        <div className="section">

          <h2>🎯 Project Objective</h2>

          <p>
            To assist healthcare professionals and patients by providing
            an early prediction of heart disease using Artificial
            Intelligence.
          </p>

        </div>

        <div className="section">

          <h2>🛠 Technologies Used</h2>

          <ul>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>FastAPI (Python)</li>
            <li>Random Forest Algorithm</li>
            <li>Scikit-Learn</li>
            <li>MySQL Database</li>
          </ul>

        </div>

        <div className="section">

          <h2>⭐ Key Features</h2>

          <ul>
            <li>User Login & Registration</li>
            <li>Train Machine Learning Model</li>
            <li>Heart Disease Prediction</li>
            <li>Prediction History</li>
            <li>User Profile Management</li>
          </ul>

        </div>

        <div className="section">

          <h2>👩‍💻 Developed By</h2>

          <p>
            Kamali Sekar <br />
            Full Stack Developer
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;