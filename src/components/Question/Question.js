import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import '../Question/Question.css';
import { useHistory } from 'react-router';

const Question = (
  {
    currentQuestion,
    setCurrentQuestion,
    questions,
    options,
    correctAnswer,
    setScore,
    score,
    setQuestions,
  }
) => {

  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const history = useHistory();

  const handleSelect = (opt) => {
    console.log(opt, 'opt');
    console.log(selected, 'selected');
    console.log(correctAnswer, 'correct')
    if (selected === opt && selected === correctAnswer) return "select";
    else if (selected === opt && selected !== correctAnswer) return "wrong";
    else if (opt === correctAnswer) return "select";
  };
  const handleCheck = (opt) => {
    setSelected(opt);
    if (opt === correctAnswer) setScore(score + 1);
    setError(false);
  };
  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
  }
  const handleNext = () => {
    if (currentQuestion > 8) {
      //end of quiz
      history.push("/result");
    } else if (selected) {
      setSelected();
      setCurrentQuestion(currentQuestion + 1);
      
    } else setError("Please select an answer")  

    //next question

    //if option not selected
    //return setCurrentQuestion(currentQuestion + 1)
  }
  return (
    <div className="quizQuestion">
      <div>Question {currentQuestion + 1}</div>
      <div className="question">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options && options.map(opt => (
              <button 
              key={opt} 
              disabled={selected}
              onClick={() => handleCheck(opt)}
              className={`singleOption ${selected && handleSelect(opt)}`}
              >{opt}
              </button>
            ))
          }
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >Quit</Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Question
