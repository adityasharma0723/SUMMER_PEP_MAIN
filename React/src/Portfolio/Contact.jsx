import React from "react";

export default function Contact({ personalInfo }) {
  const { email, phone, location } = personalInfo;

  return (
    <section id="contact" className="section contact-section">
      <div className="wrapper">
        <h2 className="sec-title">Get In <span>Touch</span></h2>
        <div className="divider"></div>
        <p className="sec-sub">Feel free to reach out anytime</p>

        <div className="contact-box">
          <p className="contact-note">
            I'm open to opportunities, collaborations, or just a friendly hello!
          </p>

          <div className="contact-list">
            <a href={`mailto:${email}`} className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{email}</div>
              </div>
            </a>

            <a href={`tel:${phone}`} className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{phone}</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">{location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
