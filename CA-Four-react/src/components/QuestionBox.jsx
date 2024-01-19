// src/components/QuestionBox.js
import React, { useState } from 'react';

const QuestionBox = ({ question, handleAnswerClick, darkMode }) => {
  const [highlighted, setHighlighted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleHighlightClick = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlightClick = () => {
    setHighlighted(false);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    handleAnswerClick(question.options[index].isCorrect);
    // You may choose whether to keep the question highlighted after selecting an option
    // setHighlighted(true);
  };

  return (
    <div className={`green-container ${darkMode ? 'question-container-dark' : 'question-container-light'}`}>
      <div className={`question-container ${highlighted ? 'highlighted-container' : ''}`}>
        <div>
          <p>{`Question ${question.index} out of ${question.total}`}</p>
          {highlighted ? (
            <p>
              {[...question.description].map((letter, index) => (
                <span key={index} className={highlighted ? 'marked' : ''}>
                  {letter}
                </span>
              ))}
            </p>
          ) : (
            <p>{question.description}</p>
          )}
        </div>
        <div className="options-container">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`option ${highlighted ? 'highlighted-option' : ''} ${
                selectedOption === index ? 'selected-option' : ''
              }`}
              onClick={() => handleOptionClick(index)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className='hg-btn'>
          <button className={`highlight-btn big-button`} onClick={handleHighlightClick}>
            Highlight Description
          </button>
          <button className={`remove-highlight-btn big-button`} onClick={handleRemoveHighlightClick}>
            Remove Highlight
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;


















