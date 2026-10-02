import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <div className="contact-card">

        <h1>📞 Contact Us</h1>

        <p className="subtitle">
          We'd love to hear from you! Fill out the form below.
        </p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Enter your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <h3>📍 Contact Information</h3>

          <p>📧 Email : support@heartai.com</p>

          <p>📞 Phone : +91 9876543210</p>

          <p>🌍 Location : Kumbakonam, Tamil Nadu, India</p>

        </div>

      </div>

    </div>
  );
}

export default Contact;