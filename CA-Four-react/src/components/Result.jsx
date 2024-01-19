// src/components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const calculatePercentage = () => {
    if (totalQuestions === 0) return 0;
    return Math.round((score / totalQuestions) * 100);
  };

  return (
    <div className="result-container">
      <h1>Your Result</h1>
      <h1>Good job 😊</h1>
      <p className="p">{`You scored ${score} out of ${totalQuestions} questions.`}</p>
      <p className="p">{`Percentage: ${calculatePercentage()}%`}</p>
      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;



