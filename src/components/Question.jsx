import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../data/mock-qa.js";
export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState === "answered";
  }
  return (
    <div id="question">
      {/* reset timer `(progressbar)` using `key={activeQuestionIndex}` to make sure it starts a new question */}
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <p>{QUESTIONS[index].text}</p>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
