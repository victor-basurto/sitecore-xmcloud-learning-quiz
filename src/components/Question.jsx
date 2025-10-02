import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  answerState,
  selectedAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      {/* reset timer `(progressbar)` using `key={activeQuestionIndex}` to make sure it starts a new question */}
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <p>{questionText}</p>
      <Answers
        answers={answers}
        selectedAnswers={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
