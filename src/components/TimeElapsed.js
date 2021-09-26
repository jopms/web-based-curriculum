import React, { useEffect, useState } from "react";
import "../styles/scss/_timeElapsed.scss";

const TimeElapsed = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState(
    Math.round((new Date().getTime() - new Date(startDate).getTime()) / 1000)
  );

  const getDecimal = (number) => number - Math.floor(number);

  const years = Math.floor(timeElapsed / 31556952);
  const hoursDecimal = getDecimal(timeElapsed / 31556952) * 8760;
  const hours = Math.round(hoursDecimal);
  const minDecimal = getDecimal(hoursDecimal);
  const min = Math.round(minDecimal * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((elapsed) => elapsed + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-elapsed-wrapper">
      {`Since ${years > 0 ? years : ""} ${
        years === 0 ? "" : years === 1 ? "year" : "years"
      } ${hours > 0 ? hours : ""} ${
        hours === 0 ? "" : hours === 1 ? "hour" : "hours"
      } and ${min > 0 ? min : ""}  ${
        min === 0 ? "" : min === 1 ? "minute" : "minutes"
      } `}
    </div>
  );
};

export default TimeElapsed;
