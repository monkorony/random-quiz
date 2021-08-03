
import './Quiz.css';
import React, {useEffect} from 'react';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Question from '../../Question/Question';


const Quiz = ({name, score, questions, setQuestions, setScore}) => {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //array block will call every time the value of that particular value changes. Ex: questions changes
  useEffect(() => {
    console.log(questions);
    setOptions(questions && handleShuffle([
      questions[currentQuestion]?.correct_answer, 
      ...questions[currentQuestion]?.incorrect_answers, ]))
  }, [questions, currentQuestion])
  console.log(questions)
  console.log(options);
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5)
  }
  return (
    <div className="quiz">
      <span className="subtitle">
        Welcome, {name}
      </span>
        {questions ? (
          <>
            <div className="quizInfo">
              <div><span>{questions[currentQuestion].category}</span></div>
              <div><span>Score : {score}</span></div>
            </div>
            <Question
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              options={options}
              correctAnswer={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <CircularProgress 
          style={{margin: 100}} 
          color="inherit" 
          size={150} 
          thickness={1}
          />
        )}
    </div>
  )
}

export default Quiz
