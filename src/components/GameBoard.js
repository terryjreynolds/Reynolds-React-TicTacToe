import React from "react";

class GameBoard extends React.Component {
  handleClick = int => {
    if (this.props.whosTurn === true) {
      const token = this.props.player_token;
      this.props.setSquareState(token, int);
    }
  };
  render() {
    let squareClass = ["square0"];
    if (this.props.square0) {
      squareClass.push("lighted");
    }
    return (
      <div className="board-wrapper">
        <div className="game-board">
          <button
            className={squareClass.join(" ")}
            onClick={() => this.handleClick(0)}
          >
            {this.props.board[0]}
          </button>
          <button className="square1" onClick={() => this.handleClick(1)}>
            {this.props.board[1]}
          </button>
          <button className="square2" onClick={() => this.handleClick(2)}>
            {this.props.board[2]}
          </button>
          <button className="square3" onClick={() => this.handleClick(3)}>
            {this.props.board[3]}
          </button>
          <button className="square4" onClick={() => this.handleClick(4)}>
            {this.props.board[4]}
          </button>
          <button className="square5" onClick={() => this.handleClick(5)}>
            {this.props.board[5]}
          </button>
          <button className="square6" onClick={() => this.handleClick(6)}>
            {this.props.board[6]}
          </button>
          <button className="square7" onClick={() => this.handleClick(7)}>
            {this.props.board[7]}
          </button>
          <button className="square8" onClick={() => this.handleClick(8)}>
            {this.props.board[8]}
          </button>
        </div>
      </div>
    );
  }
}
export default GameBoard;
