import React, {Componenet} from 'react';
import Board from './board'
import Square from './square'

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{ /* TO DO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game
