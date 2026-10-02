import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Backend connect pannumbodhu validation add pannuvom
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login-box">

        <div className="logo">
          ❤️
        </div>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter your Email"
        />

        <input
          type="password"
          placeholder="Enter your Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;