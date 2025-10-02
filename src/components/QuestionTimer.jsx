import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // adding setTimeout to useEffect pevents infinite loop
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      // remainingTime should be substracting the same amount of time frequency passed into the interval
      setRemainingTime((prevRamainingTime) => prevRamainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(mode);
  return (
    <>
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </>
  );
}
