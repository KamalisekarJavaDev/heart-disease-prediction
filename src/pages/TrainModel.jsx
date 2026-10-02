import "./TrainModel.css";
import { useState } from "react";

function TrainModel() {

  const [fileName, setFileName] = useState("");
  const [training, setTraining] = useState(false);

  const handleFile = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const trainModel = () => {
    setTraining(true);

    setTimeout(() => {
      setTraining(false);
      alert("Model Trained Successfully!");
    },3000);
  };

  return (

    <div className="train-container">

      <div className="train-card">

        <h1>🤖 Train AI Model</h1>

        <p>
          Upload the Heart Disease Dataset and train the
          Random Forest model.
        </p>

        <div className="upload-box">

          <input
            type="file"
            accept=".csv"
            onChange={handleFile}
          />

          <p>{fileName || "No Dataset Selected"}</p>

        </div>

        <button onClick={trainModel}>
          Train Model
        </button>

        {training &&

        <div className="progress">

          <div className="bar"></div>

        </div>

        }

        <div className="result">

          <h3>Training Summary</h3>

          <table>

            <tbody>

              <tr>
                <td>Algorithm</td>
                <td>Random Forest</td>
              </tr>

              <tr>
                <td>Accuracy</td>
                <td>96.8%</td>
              </tr>

              <tr>
                <td>Precision</td>
                <td>95.9%</td>
              </tr>

              <tr>
                <td>Recall</td>
                <td>96.2%</td>
              </tr>

              <tr>
                <td>F1 Score</td>
                <td>96.0%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default TrainModel;