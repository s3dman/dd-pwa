import React from "react";
import "../styles/Careers.css";

function Careers() {
  return (
    <>
      <div id="body">
        <div id="logo">
          <img src="logo 1 (3).png" id="logo" position="fixed"></img>
        </div>

        <section class="section1">
          <div id="p1">
            <h1 id="h1">Careers</h1>
            <p>
              Our studio has grown to become more than just a place of work to
              our staff members. It is a place where people can achieve great
              things, invest in themselves<br></br> and be rewarded for it. This
              has contributed to a phenomenal team that is strong and able and
              this sort of functionality gives us the freedom to focus on our
              <br></br> core business practice and what we do best. It has
              allowed us to serve our clients to the best of our ability,
              achieving their satisfaction, and not stopping until<br></br> we
              have done so.
            </p>
          </div>
          <div id="p2">
            <p>
              <span style="color:black">
                <b>Featured Roles</b>
                <br></br>
              </span>
              ARCHITECTURAL ASSISTANT<br></br>
              JUNIOR ARCHITECT<br></br>
              ASSISTANT ARCHITECT<br></br>
              ARCHITECT<br></br>
              SENIOR ARCHITECT<br></br>
              <br></br>
              For Internship please mail us your portfolio to<br></br>
              info@destinationdesigns.net.in
            </p>
          </div>

          <div>
            <form id="p3">
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name">
                <br>
                  <br></br>
                </br>
              </input>
              <input type="text" placeholder="Your Email">
                <br>
                  <br></br>
                </br>
              </input>
              <input type="text" placeholder="Applying Position">
                <br>
                  <br></br>
                </br>
              </input>
              <input type="button" placeholder="Choose a file..."></input>
            </form>
          </div>
        </section>
      </div>
    </>
  );

}
export default Careers;