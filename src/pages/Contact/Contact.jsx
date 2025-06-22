import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(true);
    }, 1500); // Delay in milliseconds (2.5s for example)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="contact section-padding flex-center">
      <div className="contact-terminal">
        <div className="contact-terminal-upper">
          <div className="contact-terminal-upper-dots">
            <div className="dot1" />
            <div className="dot2" />
            <div className="dot3" />
          </div>
          <div className="contact-terminal-upper-text">
            <p className="label-text">Secure Acces</p>
          </div>
        </div>
        <div className="contact-terminal-lower">
          <div className="contact-terminal-lower-texts">
            <p className="terminal-text">{">"} Accessing Core Systems...</p>
            <p className="terminal-text">{">"} User Authenticated: GUEST</p>
            <p className="terminal-text">
              {">"} [STATUS: STABLE] ── Awaiting Command...
            </p>
            <p className="terminal-text">
              {">"} <span className="underline">_</span>
            </p>
          </div>
          {showForm && (
            <form className="contact-terminal-form flex-center">
              <div className="contact-terminal-form-labels">
                <label className="label-text">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="footer-text"
                  />
                </label>
                <label className="label-text">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="footer-text"
                  />
                </label>
                <label className="label-text">
                  Message
                  <textarea name="message" required className="footer-text" />
                </label>
              </div>
              <div className="contact-terminal-form-button">
                <button type="submit">{">>"} EXECUTE TRANSMISSION</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
