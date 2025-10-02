import { useState } from "react";
import QUESTIONS from "../data/mock-qa.js";
import quizCompleteImg from "../assets/quiz-complete.png";
export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  /**
   * adds selected answer from user into `userAnswers` array.
   * @param {string} selectedAnswer
   * */
  function handleSelectAnswer(selectedAnswer) {
    setUsersAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  // show image if quiz is complete
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }
  // shuffleAnswers should run after `quizIsComplete` to confirm it doesn't break
  // on the first iteration. This make sure it still have questions to display
  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li key={answer} className={"answer"}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
