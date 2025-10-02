import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // adding setTimeout to useEffect pevents infinite loop
  useEffect(() => {
    console.log("set timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("set interval");
    const interval = setInterval(() => {
      // remainingTime should be substracting the same amount of time frequency passed into the interval
      setRemainingTime((prevRamainingTime) => prevRamainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </>
  );
}
