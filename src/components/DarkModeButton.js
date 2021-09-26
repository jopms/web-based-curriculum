import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/theme/themeSlicer";
import "../styles/scss/_darkModeButton.scss";
import dark from "../styles/img/dark.png";
import light from "../styles/img/light.png";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    const darkModeState = localStorage.getItem("theme");
    setButtonIcon(darkModeState === "dark" ? dark : light);
  }, []);

  useEffect(() => {
    theme && setButtonIcon(theme === "dark" ? dark : light);
  }, [theme]);

  const [buttonIcon, setButtonIcon] = useState(light);

  const toggleDarkMode = () => {
    if (buttonIcon === light) {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }

    !localStorage.getItem("theme")
      ? localStorage.setItem("theme", "dark")
      : buttonIcon === dark
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  };

  return (
    <button className="dark-mode-button" onClick={() => toggleDarkMode()}>
      <img
        className="dark-mode-button-icon"
        src={buttonIcon}
        alt="dark mode icon"
      />
    </button>
  );
};

export default DarkModeButton;
