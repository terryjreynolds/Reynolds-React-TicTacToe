import React from "react";

class GameBoard extends React.Component {
  state = {
    square0: false,
    square1: false,
    square2: false,
    square3: false,
    square4: false,
    square5: false,
    square6: false,
    square7: false,
    square8: false
  };
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    const {
      square0,
      square1,
      square2,
      square3,
      square4,
      square5,
      square6,
      square7,
      square8
    } = nextProps;
    const array = [
      square0,
      square1,
      square2,
      square3,
      square4,
      square5,
      square6,
      square7,
      square8
    ];
    console.log("array", array);
    array.map((c, i) => console.log({[`square`${i}] = c})
    
        
  }

  handleClick = int => {
    if (this.props.whosTurn === true) {
      const token = this.props.player_token;
      this.props.setSquareState(token, int);
    }
  };

  render() {
    return (
      <div className="board-wrapper">
        <div className="game-board">
          <button
            className={this.state.square0 ? "square0-lighted" : "square0"}
            onClick={() => this.handleClick(0)}
          >
            {this.props.board[0]}
          </button>
          <button className="square1" onClick={() => this.handleClick(1)}>
            {this.props.board[1]}
          </button>
          <button
            className={this.state.square2 ? "square2-lighted" : "square2"}
            onClick={() => this.handleClick(2)}
          >
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
