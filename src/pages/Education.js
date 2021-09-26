import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import Title from "../components/Title";
import ipl from "../styles/img/ipl.png";
import freecodecamp from "../styles/img/freecodecamp.png";
import udemy from "../styles/img/udemy.png";
import "../styles/scss/_education.scss";

const Education = () => {
  return (
    <div className="education-wrapper">
      <Title text="Here are my certifications!" />
      <div className="education">
        <div className="education-field-wrapper">
          <ProfilePicture
            image={ipl}
            variant="small"
            href="https://www.ipleiria.pt/"
          />
          <div className="education-text-description">
            <h1 className="education-title">Instituto Politécnico de Leiria</h1>
            <h3 className="education-subtitle">Automotive Engineering</h3>
            <p>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
        <div className="education-field-wrapper">
          <ProfilePicture
            image={freecodecamp}
            variant="small"
            href="https://www.freecodecamp.org/certification/fccd9018614-0781-4028-92c7-b87c3c0ae508/responsive-web-design"
          />
          <div className="education-text-description">
            <h1 className="education-title">freeCodeCamp</h1>
            <h3 className="education-subtitle">Responsive Web Design</h3>
            <p>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
        <div className="education-field-wrapper">
          <ProfilePicture
            image={udemy}
            variant="small"
            href="https://www.udemy.com/certificate/UC-174f0550-30dd-4ae6-b966-146f10a6e005/?fbclid=IwAR3OPpCyUfHe6x2Az3uKNtRptFrW-nXdqWWpzUkUr3FMUUk4gHh7zvOPQuw"
          />
          <div className="education-text-description">
            <h1 className="education-title">Udemy</h1>
            <h3 className="education-subtitle">Modern React and Redux</h3>
            <p>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
