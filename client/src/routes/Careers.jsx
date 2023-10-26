import React from "react";
import Header from "../components/Header/Header";
import "../styles/Careers.css";
import "../styles/global.css";

function Careers() {
  return (
    <>
      <div id="entire-career">
        <div id="career-body">
          <div id="careers-heading">
            <h1>Careers</h1>
          </div>
          <div id="career-paragraph">
            <p>
              Our studio has grown to become more than just a place of work to
              our staff members. It is a place where people can achieve great
              things, invest in themselves
              <br />
              and be rewarded for it. This has contributed to a phenomenal team
              that is strong and able and this sort of functionality gives us
              the freedom to focus on our
              <br />
              core business practice and what we do best. It has allowed us to
              serve our clients to the best of our ability, achieving their
              satisfaction, and not stopping until
              <br />
              we have done so.
            </p>
          </div>

          <div className="flex-container-form">
            <div className="flex-item" id="careers-featured-roles">
              <h2>Featured Roles</h2>
              <p id="careers-roles">
                ARCHITECTURAL ASSISTANT
                <br />
                JUNIOR ARCHITECT
                <br />
                ASSISTANT ARCHITECT
                <br />
                ARCHITECT
                <br />
                SENIOR ARCHITECT
                <br />
                <br />
                <br />
                For Internship please mail us your portfolio to
                <br />
                info@destinationdesigns.net.in
              </p>
            </div>

            <div className="flex-item" id="careers-form">
              <form>
                <table id="careers-table">
                  <tr>
                    <td>
                      <input
                        id="first-name-form"
                        type="text"
                        className="form-textbox"
                        placeholder="First Name"
                      />
                    </td>
                    <td>
                      <input
                        id="second-name-form"
                        type="text"
                        className="form-textbox"
                        placeholder="Last Name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <input
                        type="text"
                        size="50"
                        className="form-textbox"
                        placeholder="Your Email"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <select
                        // value="Applying Position"
                        className="form-textbox"
                      >
                        <option value="" disabled selected>
                          Applying position
                        </option>
                        <option value="ARCHITECTURAL ASSISTANT">
                          ARCHITECTURAL ASSISTANT
                        </option>
                        <option value="JUNIOR ARCHITECT">
                          JUNIOR ARCHITECT
                        </option>
                        <option value="ASSISTANT ARCHITECT">
                          ASSISTANT ARCHITECT
                        </option>
                        <option value="ARCHITECT">ARCHITECT</option>
                        <option value="SENIOR ARCHITECT">
                          SENIOR ARCHITECT
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="form-above-button">Attach your Resume</td>
                    <td className="form-above-button">Attach your Portfolio</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="button"
                        className="form-choose-a-file"
                        value="Choose a file..."
                      />
                    </td>
                    <td>
                      <input
                        type="button"
                        className="form-choose-a-file"
                        value="Choose a file..."
                      />
                    </td>
                  </tr>
                  <tr>
                    <input type="button" className="form-apply" value="Apply" />
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Header dark={true} />
    </>
  );
}
export default Careers;
