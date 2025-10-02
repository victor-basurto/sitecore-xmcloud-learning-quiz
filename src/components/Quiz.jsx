import { useState, useCallback } from "react";
import QUESTIONS from "../data/mock-qa.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  /**
   * adds selected answer from user into `userAnswers` array.
   * @param {string} selectedAnswer
   * */
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUsersAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);
  // useCallback since this function dependss on props and state
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  // show image if quiz is complete
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
