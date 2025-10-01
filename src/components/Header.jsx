import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="quiz-logo" />
      <h1>XMCloud Quiz</h1>
    </header>
  );
}
