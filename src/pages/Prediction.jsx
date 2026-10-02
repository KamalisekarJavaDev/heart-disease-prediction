import { useState } from "react";
import "./Prediction.css";

function Prediction() {
  const [formData, setFormData] = useState({
    Age: "",
    Sex: "",
    ChestPainType: "",
    RestingBP: "",
    Cholesterol: "",
    FastingBloodSugar: "",
    RestingECG: "",
    MaxHeartRate: "",
    ExerciseAngina: "",
    Oldpeak: "",
    Slope: "",
    CA: "",
    Thalassemia: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Convert numeric UCI values to the text values
  // expected by our trained model
  const convertData = () => {
    return {
      Age: Number(formData.Age),

      Sex: formData.Sex,

      ChestPainType:
        Number(formData.ChestPainType) === 1
          ? "Typical Angina"
          : Number(formData.ChestPainType) === 2
          ? "Atypical Angina"
          : Number(formData.ChestPainType) === 3
          ? "Non-anginal Pain"
          : "Asymptomatic",

      RestingBP: Number(formData.RestingBP),

      Cholesterol: Number(formData.Cholesterol),

      FastingBloodSugar:
        Number(formData.FastingBloodSugar) === 1 ? "Yes" : "No",

      RestingECG:
        Number(formData.RestingECG) === 0
          ? "Normal"
          : Number(formData.RestingECG) === 1
          ? "ST-T Abnormality"
          : "Left Ventricular Hypertrophy",

      MaxHeartRate: Number(formData.MaxHeartRate),

      ExerciseAngina:
        Number(formData.ExerciseAngina) === 1 ? "Yes" : "No",

      Oldpeak: Number(formData.Oldpeak),

      Slope:
        Number(formData.Slope) === 1
          ? "Up"
          : Number(formData.Slope) === 2
          ? "Flat"
          : "Down",

      CA: Number(formData.CA),

      Thalassemia:
        Number(formData.Thalassemia) === 3
          ? "Normal"
          : Number(formData.Thalassemia) === 6
          ? "Fixed Defect"
          : "Reversible Defect",
    };
  };

  // Send data to FastAPI
  const handlePredict = async () => {
    setError("");
    setResult(null);

    // Check empty fields
    const emptyField = Object.values(formData).some(
      (value) => value === ""
    );

    if (emptyField) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const dataToSend = convertData();

      const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Prediction request failed.");
      }

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to the prediction server. Make sure FastAPI is running."
      );
    }
  };

  return (
    <div className="prediction-container">
      <div className="prediction-card">

        <h2>❤️ Heart Disease Prediction</h2>

        <div className="form-grid">

          <input
            type="number"
            name="Age"
            placeholder="Age"
            value={formData.Age}
            onChange={handleChange}
          />

          <select
            name="Sex"
            value={formData.Sex}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="number"
            name="ChestPainType"
            placeholder="Chest Pain Type (1-4)"
            value={formData.ChestPainType}
            onChange={handleChange}
          />

          <input
            type="number"
            name="RestingBP"
            placeholder="Resting BP"
            value={formData.RestingBP}
            onChange={handleChange}
          />

          <input
            type="number"
            name="Cholesterol"
            placeholder="Cholesterol"
            value={formData.Cholesterol}
            onChange={handleChange}
          />

          <input
            type="number"
            name="FastingBloodSugar"
            placeholder="Fasting Blood Sugar (0/1)"
            value={formData.FastingBloodSugar}
            onChange={handleChange}
          />

          <input
            type="number"
            name="RestingECG"
            placeholder="Rest ECG (0-2)"
            value={formData.RestingECG}
            onChange={handleChange}
          />

          <input
            type="number"
            name="MaxHeartRate"
            placeholder="Max Heart Rate"
            value={formData.MaxHeartRate}
            onChange={handleChange}
          />

          <input
            type="number"
            name="ExerciseAngina"
            placeholder="Exercise Angina (0/1)"
            value={formData.ExerciseAngina}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="Oldpeak"
            placeholder="Oldpeak"
            value={formData.Oldpeak}
            onChange={handleChange}
          />

          <input
            type="number"
            name="Slope"
            placeholder="Slope (1-3)"
            value={formData.Slope}
            onChange={handleChange}
          />

          <input
            type="number"
            name="CA"
            placeholder="CA (0-3)"
            value={formData.CA}
            onChange={handleChange}
          />

          <input
            type="number"
            name="Thalassemia"
            placeholder="Thal (3/6/7)"
            value={formData.Thalassemia}
            onChange={handleChange}
          />

        </div>

        <button onClick={handlePredict}>
          Predict
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "15px" }}>
            {error}
          </p>
        )}

        {result && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>

            <h3>Prediction Result</h3>

            <h2>
              {result.result}
            </h2>

            <p>
              Probability: {result.probability}%
            </p>

            <p>
              {result.message}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Prediction;