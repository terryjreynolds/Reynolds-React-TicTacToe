import React from "react";

class GameBoard extends React.Component {
  render() {
    return (
      <div className="board-wrapper">
        <div className="game-board">
          <button className="square0">{this.props.board[0]}</button>
          <button className="square1">{this.props.board[1]}</button>
          <button className="square2">{this.props.board[2]}</button>
          <button className="square3">{this.props.board[3]}</button>
          <button className="square4">{this.props.board[4]}</button>
          <button className="square5">{this.props.board[5]}</button>
          <button className="square6">{this.props.board[6]}</button>
          <button className="square7">{this.props.board[7]}</button>
          <button className="square8">{this.props.board[8]}</button>
        </div>
      </div>
    );
  }
}
export default GameBoard;
