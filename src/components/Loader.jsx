import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">

      <div className="loader-card">

        <div className="spinner"></div>

        <h2>Loading...</h2>

        <p>
          Please wait while we process your request.
        </p>

      </div>

    </div>
  );
}

export default Loader;