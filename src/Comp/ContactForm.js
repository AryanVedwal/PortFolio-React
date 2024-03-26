import React from "react";
import "../Style/Form.css"

function ContactForm() {
  return (
    <div className="container contact-form">
      {/* <div className="text">Contact us Form</div> */}
      <form action="https://formspree.io/f/mbjnkypr" method="POST">
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="name" autoComplete="off" required />
            <div className="underline"></div>
            <label htmlFor="">Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
              required
              autoComplete="off"
            />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
              autoComplete="off"
            />
            <div className="underline"></div>
            <label htmlFor="">Phone Number</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea name="message" rows="5" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
            <br />
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;