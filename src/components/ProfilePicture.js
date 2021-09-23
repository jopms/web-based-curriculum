import React from "react";
import "../styles/scss/_profilePicture.scss";

const ProfilePicture = ({ image, alt }) => {
  return (
    <div className="profile-img-wrapper">
      <img className="profile-img" src={image} alt={alt} />
    </div>
  );
};

export default ProfilePicture;
