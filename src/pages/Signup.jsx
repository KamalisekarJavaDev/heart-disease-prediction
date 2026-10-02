import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = () => {
    // Backend connect pannumbodhu validation add pannuvom
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="logo">
          ❤️
        </div>

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="First Name"
        />

        <input
          type="text"
          placeholder="Last Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button onClick={handleSignup}>
          Create Account
        </button>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;