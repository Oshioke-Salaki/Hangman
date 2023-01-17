import React, { Component } from 'react';
import './App.css';
import Hangman from './Hangman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
        <p>Created by Oshioke Salaki &copy; 2023</p>
      </div>
    );
  }
}

export default App;
