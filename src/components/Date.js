import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CurrentDate = () => {
  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = months[new Date().getMonth()];
  const currentDay = getCurrentDay();
  const currentDayName = weekDays[new Date().getDay()];

  return (
    <SDate>
      <div>{currentDayName}</div>
      <div>
        {currentMonth} {currentDay}
      </div>
      <div>{currentYear}</div>
    </SDate>
  );
};

export default CurrentDate;

const SDate = styled(motion.div)``;
