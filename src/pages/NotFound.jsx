import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">

      <div className="notfound-card">

        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <button>🏠 Back to Dashboard</button>

      </div>

    </div>
  );
}

export default NotFound;