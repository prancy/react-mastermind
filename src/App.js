import React, { Component } from 'react';
import './App.css';
// Must import components used in the JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GuessRow from './components/GuessRow/GuessRow';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <GuessRow />
        <NewGameButton />
        <ScoreButton />
      </div>
    );
  }
}

export default App;