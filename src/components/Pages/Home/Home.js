import { TextField, Button, MenuItem} from '@material-ui/core';
import Categories from '../../../Data/Categories';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import React, { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home = ({name, setName, fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true)
    } else {
      setError(false)
      fetchQuestions(category, difficulty);
      history.push('/quiz');
    }
  }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize: 30}}>Quiz Settings</span>
        <div className='settings_select'>
          {error && <ErrorMessage>Please fill out all the fields</ErrorMessage>}
          <TextField 
            label='Enter Your Name' 
            variant='outlined' 
            style={{marginBottom: 20}} 
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button 
          variant='contained' 
          color='primary' 
          size='large'
          onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src='quizHome.svg' className='home' alt='quiz' />
    </div>
  )
}

export default Home
