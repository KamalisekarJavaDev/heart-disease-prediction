import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-header">

          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
          />

          <h2>Kamali Sekar</h2>

          <p>Full Stack Developer</p>

        </div>

        <div className="profile-info">

          <div className="row">
            <label>Full Name</label>
            <input
              type="text"
              value="Kamali Sekar"
              readOnly
            />
          </div>

          <div className="row">
            <label>Email</label>
            <input
              type="email"
              value="kamali@gmail.com"
              readOnly
            />
          </div>

          <div className="row">
            <label>Phone Number</label>
            <input
              type="text"
              value="+91 9876543210"
              readOnly
            />
          </div>

          <div className="row">
            <label>Gender</label>
            <input
              type="text"
              value="Female"
              readOnly
            />
          </div>

          <div className="row">
            <label>Address</label>
            <textarea
              rows="3"
              readOnly
              value="Kumbakonam, Tamil Nadu, India"
            ></textarea>
          </div>

          <div className="buttons">

            <button className="edit">
              Edit Profile
            </button>

            <button className="password">
              Change Password
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;