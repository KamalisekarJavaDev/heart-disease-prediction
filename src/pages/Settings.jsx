import "./Settings.css";

function Settings() {
  return (
    <div className="settings-container">

      <div className="settings-card">

        <h1>⚙️ Settings</h1>

        <div className="setting-item">
          <label>🌙 Dark Mode</label>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <label>🔔 Email Notifications</label>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <label>🌐 Language</label>

          <select>
            <option>English</option>
            <option>Tamil</option>
          </select>
        </div>

        <div className="setting-item">
          <label>🎨 Theme</label>

          <select>
            <option>Blue</option>
            <option>Light</option>
          </select>
        </div>

        <div className="setting-item">
          <label>🔒 Change Password</label>
          <button className="change-btn">
            Update Password
          </button>
        </div>

        <div className="save-section">
          <button className="save-btn">
            Save Changes
          </button>
        </div>

      </div>

    </div>
  );
}

export default Settings;