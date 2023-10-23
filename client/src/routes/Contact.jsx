import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="two-column-container">
      <div className="column left-column">
        {<h5>Contact</h5>}
        <div className="Hours">
        {<h2>Hours</h2>}
        {<p>Monday - Friday : 9 AM to 6 PM</p>}
        {<p>Saturday : 9 AM to 1 PM</p>}
        {<p>Sunday Closed</p>}
        </div>
        <div className="Enquires">
        {<h2>Enquires</h2>}
        {<p>info@destinationdesigns.net.in</p>}
        </div>
        <div className="WWS">
        {<h2>Work with us</h2>}
        {<p>To submit your Resume please check our careers page.</p>}
        {<p>Careers</p>}
        </div>
      </div>
      <div className="column right-column">
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      </div>
    </div>
  );
};

export default Contact;