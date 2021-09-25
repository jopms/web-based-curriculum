import React from "react";

import "../styles/scss/_home.scss";
import ProfilePicture from "../components/ProfilePicture";
import profilePicture from "../styles/img/profile.png";

const Home = () => {
  return (
    <div id="home" className="home-wrapper">
      <ProfilePicture image={profilePicture} alt={"profile picture"} />
      <div className="home-text-description">
        <h1>João Santos</h1>
        <h3>Frontend developer</h3>
        <p>
          Fast-learner and hardworking team player who is comfortable working
          with JavaScript and React to deliver exceptional customer experiences.
          Passionate about exploring new technologies and selfimprovement.
          Background in Automotive Engineering and aspiring to combine broad
          background and discipline to become a Full-Stack developer.
        </p>
      </div>
    </div>
  );
};

export default Home;
