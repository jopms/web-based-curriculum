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
            <p>• Programming in C Language</p>
            <p>• Electronic design automation using Proteus Design Suite</p>
            <p>• Digital Electronics study field</p>
            <p>• Studying and testing electronic circuits using breadboards</p>
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
            <p>• HTML and HTML 5</p>
            <p>• Responsive Web Design Principles</p>
            <p>• CSS flexbox</p>
            <p>• CSS Grid</p>
            <p>• 5 Different projects in the end of the certification</p>
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
            <p>• React using Hooks and Classes</p>
            <p>• API Requests / Axios</p>
            <p>• Redux</p>
            <p>• React Router</p>
            <p>• 52.5 hours on-demand video with 17 coding exercices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
