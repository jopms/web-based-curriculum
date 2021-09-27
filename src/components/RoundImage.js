import React from "react";
import "../styles/scss/_roundImage.scss";

/*
 * Component that creates a round border around image's prop. 
 * Makes image's prop a shortcut link.
 */

const RoundImage = ({ image, alt, variant, href, className }) => {
  return (
    <div className={`round-image-wrapper `}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <img
            className={`round-image ${variant ? variant : ""} ${
              className ? className : ""
            }`}
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
