import React from "react";

interface TimerProps {
  currentTime: number;
  duration: number;
}

const getTime = (time: number): string => {
  let minutes: number | string = Math.floor(time / 60);
  if (minutes < 10) minutes = `0${minutes}`;

  let seconds: number | string = time % 60;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

const Timer = ({ currentTime, duration }: TimerProps) => {
  return (
    <div className="text-ui1">
      {getTime(currentTime)} / {getTime(duration)}
    </div>
  );
};

export default Timer;
