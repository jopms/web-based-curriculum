import React from "react";
import RoundImage from "../components/RoundImage";
import Title from "../components/Title";
import unikLogo from "../styles/img/uniksystem.jpg";
import "../styles/scss/_experience.scss";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <Title text="I am working at.." />
      <div className="experience">
        <RoundImage
          image={unikLogo}
          href="https://www.uniksystem.com/"
          className="round-image-experience"
        />
        <div className="home-text-description">
          <h1 className="home-text-header">UNIK System </h1>
          <h3 className="home-text-subheader">Frontend developer</h3>
          <div className="home-text-paragraphs">
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
    </div>
  );
};

export default Experience;
