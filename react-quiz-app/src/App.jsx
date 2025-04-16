import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Score from './components/Score';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },
  {
    question: "What is the correct way to pass props to a component in React?",
    options: [
      "component(props)",
      "<Component props={data} />",
      "<Component {...data} />",
      "<Component data={value} />"
    ],
    answer: "<Component data={value} />"
  },
  {
    question: "What does the useEffect hook's dependency array do?",
    options: [
      "Prevents re-renders",
      "Determines when the effect should run",
      "Binds values to the component",
      "Updates the component’s state"
    ],
    answer: "Determines when the effect should run"
  },
  {
    question: "Which of the following is used to lift state up in React?",
    options: [
      "Using context",
      "Passing state as props to a child component",
      "Moving state to a common ancestor component",
      "Using useState in every component"
    ],
    answer: "Moving state to a common ancestor component"
  },
  {
    question: "What is the purpose of key prop in a list of elements?",
    options: [
      "To trigger animations",
      "To apply styles",
      "To identify elements uniquely for React’s diffing algorithm",
      "To reuse components"
    ],
    answer: "To identify elements uniquely for React’s diffing algorithm"
  },
  {
    question: "How do you conditionally render content in React?",
    options: [
      "Using if statements only",
      "By calling setRender(true)",
      "Using logical operators or ternary expressions",
      "With display: none in CSS"
    ],
    answer: "Using logical operators or ternary expressions"
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">
    <Header />

    <main>
      {!showScore && (
        <ProgressBar
          current={currentQuestion + 1}
          total={quizQuestions.length}
        />
      )}
      {showScore ? (
        <Score 
          score={score} 
          totalQuestions={quizQuestions.length} 
          handleRestartQuiz={handleRestartQuiz} 
        />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
    </main>

    <Footer />
  </div>
  );
};

export default App;