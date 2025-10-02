import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswers,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    // shuffleAnswers should run after `quizIsComplete` to confirm it doesn't break
    // on the first iteration. This make sure it still have questions to display
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
