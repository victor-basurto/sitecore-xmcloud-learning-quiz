import { useState } from "react";
import QUESTIONS from "../data/mock-qa.js";
export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  function handleSelectAnswer(selectedAnswer) {
    setUsersAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
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
