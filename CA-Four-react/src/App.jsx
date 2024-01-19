// src/App.jsx
import React, { useState, useEffect } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import { questions } from './components/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAnswerClick = (isCorrect) => {
    if (!showResult) {
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setHighlighted(false);
  };

  useEffect(() => {
    setHighlighted(false);
  }, [currentQuestion]);

  const highlightQuestion = () => {
    setHighlighted(false);
  };

  const removeHighlight = () => {
    setHighlighted(false);
  };

  return (
    
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className='quiz'>"Quiz App💡"</h1>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <QuestionBox
          question={{
            index: currentQuestion + 1,
            total: questions.length,
            description: questions[currentQuestion].description,
            options: questions[currentQuestion].options,
          }}
          handleAnswerClick={handleAnswerClick}
          highlighted={highlighted}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;







