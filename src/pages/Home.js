import React from "react";

import "../styles/scss/_home.scss";
import RoundImage from "../components/RoundImage";
import profilePicture from "../styles/img/profile.png";

const Home = () => {
  return (
    <div id="home" className="home-wrapper">
      <RoundImage image={profilePicture} alt={"profile picture"} />
      <div className="home-text-description">
        <h1 className="home-text-header">João Santos</h1>
        <h3 className="home-text-subheader">Frontend developer</h3>
        
          <p className="home-text-paragraphs">
            • Fast-learner and hardworking team player who is comfortable
            working with JavaScript and React to deliver exceptional customer
            experiences.
          </p>
          <p className="home-text-paragraphs">
            • Passionate about exploring new technologies and selfimprovement.
          </p>
          <p className="home-text-paragraphs">
            • Background in Automotive Engineering and aspiring to combine broad
            background and discipline to become a Full-Stack developer.
          </p>
        
      </div>
    </div>
  );
};

export default Home;
