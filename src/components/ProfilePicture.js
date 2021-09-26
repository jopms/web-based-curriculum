import React from "react";
import "../styles/scss/_roundImage.scss";

const RoundImage = ({ image, alt, variant, href }) => {
  return (
    <div className="round-image-wrapper">
      {href ? (
        <a href={href} target="_blank">
          <img
            className={`round-image ${variant ? variant : ""}`}
            src={image}
            alt={alt}
          />
        </a>
      ) : (
        <img
          className={`round-image ${variant ? variant : ""}`}
          src={image}
          alt={alt}
        />
      )}
    </div>
  );
};

export default RoundImage;
