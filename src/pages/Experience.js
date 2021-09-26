import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import Title from "../components/Title";
import unikLogo from "../styles/img/uniksystem.jpg";
import "../styles/scss/_experience.scss";



const Experience = () => {
  return (
    <>
      <div className="experience-wrapper">
        <Title text="I am working at.." />
        <div className="experience">
          <ProfilePicture image={unikLogo} href="https://www.uniksystem.com/" />
          <div className="home-text-description">
            <h1>UNIK System </h1>
            <h3>Frontend developer</h3>
            <p>
              • Implementing and using 3rd party components such as React
              Bootstrap, Redux and Sagas;
            </p>
            <p>
              • Working directly with the client to analyze project requirements
              and implement technical solutions;
            </p>
            <p>
              • Team leader in a recent project using React, Java, BPM, MongoDB
              and MySQL database.
            </p>
            <p>
              • Continuous development of new features for UNIK’s Platform. •
              Designing and creating several reusable components in modern React
              technology
            </p>
            <p>
              • Implemented several external API’s like Digital Signature,
              Dun&Bradstreet and Tink.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
