import React from "react";
import Header from "../components/Header/Header";
import "../styles/Careers.css";
import "../styles/global.css";
// function handleResumeFileChange(event) {
//   const selectedFile = event.target.files[0];
//   if (selectedFile) {
//     console.log(`Selected Resume File: ${selectedFile.name}`);
//     // You can do further processing or store the selected file.
//   }
// }
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
              <div id="featured-roles-heading">
                <h2>Featured Roles</h2>
              </div>
              <p id="careers-roles">
                <div
                  id="featured-roles-architectural-assistant"
                  className="featured-roles-alignment"
                >
                  ARCHITECTURAL ASSISTANT
                </div>

                <div className="featured-roles-alignment">JUNIOR ARCHITECT</div>
                <div className="featured-roles-alignment">
                  ASSISTANT ARCHITECT
                </div>
                <div className="featured-roles-alignment">ARCHITECT</div>
                <div className="featured-roles-alignment">SENIOR ARCHITECT</div>

                <div id="text-below-featured-roles">
                  For Internship please mail us your portfolio to <br />
                  info@destinationdesigns.net.in
                </div>
              </p>
            </div>

            <div className="flex-item" id="careers-form">
              <form>
                <table border="0px" id="careers-table">
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
                        id="form-dropdown"
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
                    {/* <td>
                      <input
                        type="file"
                        value="Choose a file..."
                        className="form-choose-a-file"
                        id="resumeFileInput"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeFileChange}
                      />
                    </td> */}
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
