import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to='/'>Random Quiz</Link>
    </div>
  )
}
