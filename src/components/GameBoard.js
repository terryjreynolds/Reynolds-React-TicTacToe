import React from "react";
import { findSquaresToLight } from "../helpers";
import { objectMaker } from "../helpers";
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

  textlessButton = {
    color: "#dddddd",
    fontSize: "1.8em",
    fontWeight: "bold"
  };
  textedButton = {
    color: "black"
  };

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    //destructure nextProps
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
    //make object of the destructured elements
    const squares = {
      square0: square0,
      square1: square1,
      square2: square2,
      square3: square3,
      square4: square4,
      square5: square5,
      square6: square6,
      square7: square7,
      square8: square8
    };
    //use helper function to isolate 3 winning squares
    const refined = findSquaresToLight(squares);
    console.log("refined", refined, refined.length);
    if (refined.length === 0) {
      this.setState({
        square0: false,
        square1: false,
        square2: false,
        square3: false,
        square4: false,
        square5: false,
        square6: false,
        square7: false,
        square8: false
      });
    }

    //construct an object to pass to setState
    let stateObject = objectMaker(refined[0], refined[1], refined[2]);
    console.log("stateObject", stateObject);
    this.setState(stateObject);
  }

  handleClick = int => {
    if (this.props.whosTurn === true) {
      const token = this.props.player_token;
      this.props.setSquareState(token, int);
    }
  };

  render() {
    return (
      <div className="game-board">
        <button
          style={
            this.props.board[0] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[0] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square0 ? "square0-lit" : "square0"}
          onClick={() => this.handleClick(0)}
        >
          {this.props.board[0] === "" ? "H" : this.props.board[0]}
        </button>

        <button
          style={
            this.props.board[1] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[1] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square1 ? "square1-lit" : "square1"}
          onClick={() => this.handleClick(1)}
        >
          {this.props.board[1] === "" ? "H" : this.props.board[1]}
        </button>
        <button
          style={
            this.props.board[2] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[2] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square2 ? "square2-lit" : "square2"}
          onClick={() => this.handleClick(2)}
        >
          {this.props.board[2] === "" ? "H" : this.props.board[2]}
        </button>
        <button
          style={
            this.props.board[3] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[3] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square3 ? "square3-lit" : "square3"}
          onClick={() => this.handleClick(3)}
        >
          {this.props.board[3] === "" ? "H" : this.props.board[3]}
        </button>
        <button
          style={
            this.props.board[4] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[4] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square4 ? "square4-lit" : "square4"}
          onClick={() => this.handleClick(4)}
        >
          {this.props.board[4] === "" ? "H" : this.props.board[4]}
        </button>
        <button
          style={
            this.props.board[5] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[5] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square5 ? "square5-lit" : "square5"}
          onClick={() => this.handleClick(5)}
        >
          {this.props.board[5] === "" ? "H" : this.props.board[5]}
        </button>
        <button
          style={
            this.props.board[6] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[6] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square6 ? "square6-lit" : "square6"}
          onClick={() => this.handleClick(6)}
        >
          {this.props.board[6] === "" ? "H" : this.props.board[6]}
        </button>
        <button
          style={
            this.props.board[7] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[7] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square7 ? "square7-lit" : "square7"}
          onClick={() => this.handleClick(7)}
        >
          {this.props.board[7] === "" ? "H" : this.props.board[7]}
        </button>
        <button
          style={
            this.props.board[8] === "" ? this.textlessButton : this.textedButton
          }
          disabled={
            this.props.board[8] !== "" || this.props.gameOver === true
              ? true
              : false
          }
          className={this.state.square8 ? "square8-lit" : "square8"}
          onClick={() => this.handleClick(8)}
        >
          {this.props.board[8] === "" ? "H" : this.props.board[8]}
        </button>
      </div>
    );
  }
}
export default GameBoard;
