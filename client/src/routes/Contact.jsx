import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "../styles/Contact.css";

<script>import url("https://maps.googleapis.com/maps/api/js?key=AIzaSyBkQ0ZKT5aFnJAHYedB4QKjOtatoIdagzk&libraries=places");</script>


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

  useEffect(() => {
    // Load the Google Maps JavaScript API script
    loadGoogleMapScript();
  }, []);

  const loadGoogleMapScript = () => {
    // Check if the Google Maps API is already loaded
    if (window.google) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBkQ0ZKT5aFnJAHYedB4QKjOtatoIdagzk&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  };

  const initializeMap = () => {
    // Create a new map instance and set its properties
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 12.907362923943463, lng: 77.60306925543291 }, // Set the initial map center
      zoom: 20, // Set the initial zoom level
    });
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
        <div className="column right-column">
          <p>
            For all enquiries, whether you have a project in mind or just want
            to say hello, please get in touch via this form.
          </p>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
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
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <Header dark={true} />
    </>
  );
};

export default Contact;
