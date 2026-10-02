import "./LogoutConfirmation.css";

function LogoutConfirmation() {
  return (
    <div className="logout-container">

      <div className="logout-card">

        <div className="logout-icon">
          🚪
        </div>

        <h2>Logout Confirmation</h2>

        <p>
          Are you sure you want to logout from the
          Heart Disease Prediction System?
        </p>

        <div className="button-group">

          <button className="cancel-btn">
            Cancel
          </button>

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutConfirmation;