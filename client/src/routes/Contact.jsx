import React, { useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="two-column-container">
        <div className="column left-column">
          <h5>Contact</h5>
          <div className="Hours">
            <h2>Hours</h2>
            <p>Monday - Friday : 9 AM to 6 PM</p>
            <p>Saturday : 9 AM to 1 PM</p>
            <p>Sunday Closed</p>
          </div>
          <div className="Enquires">
            <h2>Enquiries</h2>
            <p>info@destinationdesigns.net.in</p>
          </div>
          <div className="WWS">
            <h2>Work with us</h2>
            <p>To submit your Resume, please check our careers page.</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="column-right-column">
          <p>
            For all enquiries, whether you have a project in mind or just want
            to say hello,please get in touch via this form.
          </p>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="box-color"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="box-color"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                className="box-color"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                className="box-color"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" id="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Header dark={true} />
      <Navbar dark={true} />
    </>
  );
};

export default Contact;
