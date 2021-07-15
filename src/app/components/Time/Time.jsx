import React, { useState, useEffect } from "react";
import { getCurrentTime } from "../../utils/CurrentTime/current-time";

const Time = () => {
  const [currentTime, setTime] = useState(getCurrentTime);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(getCurrentTime);
    }, 1000);
    return () => clearInterval(secTimer);
  });

  return (
    <div>
      <p>Время: {currentTime}</p>
    </div>
  );
};

export default Time;
