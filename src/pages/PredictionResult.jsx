import "./PredictionResult.css";

function PredictionResult({ result, onClose }) {
  return (
    <div className="overlay">
      <div className="result-card">

        <div className="icon">
          {result === "Positive" ? "❤️" : "💙"}
        </div>

        <h2>Prediction Result</h2>

        {result === "Positive" ? (
          <div className="danger">
            <h3>Heart Disease Detected</h3>
            <p>
              The prediction indicates a higher risk of heart disease.
              Please consult a cardiologist for further medical evaluation.
            </p>
          </div>
        ) : (
          <div className="safe">
            <h3>No Heart Disease Detected</h3>
            <p>
              Based on the entered values, the patient appears to have a low
              risk of heart disease.
            </p>
          </div>
        )}

        <button onClick={onClose}>Close</button>

      </div>
    </div>
  );
}

export default PredictionResult;