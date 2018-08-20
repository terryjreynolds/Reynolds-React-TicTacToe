import React from "react";
import Footer from "./Footer";
import Scoreboard from "./Scoreboard";
import ResetButton from "./ResetButton";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    level: 0,
    player_token: "",
    computer_token: "",
    board: ["", "", "", "", "", "", "", "", ""],
    whosTurn: true,
    player_score: 0,
    computer_score: 0,
    square0: false
  };
  componentDidMount() {
    console.log("level", this.props.level);
    console.log("player_token", this.props.player_token);
    const whosTurn = this.state.whosTurn;
    const level = this.props.level;
    const player_token = this.props.player_token;
    let computer_token = "";
    player_token === "X" ? (computer_token = "O") : (computer_token = "X");
    this.setState(
      {
        level,
        player_token,
        computer_token,
        whosTurn
      },
      () => {
        console.log("currentstate", this.state);
      }
    );
  }
  setSquareState = (string, int) => {
    let board = [...this.state.board];
    board.splice(int, 1, string);
    console.log("array", board);
    let whosTurn = !this.state.whosTurn;
    this.setState(
      {
        board,
        whosTurn
      },
      () => {
        if (!whosTurn) {
          const didAIWin = this.checkForAIWinningMove(this.state.board);
          console.log("didAIWin", didAIWin);
          didAIWin
            ? this.ai_MoveUpdate(this.state.computer_token)
            : this.shouldAIBlock(this.state.board);
        }
      }
    );
  };

  checkForAIWinningMove = arr => {
    const array = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]],
      [arr[0], arr[3], arr[6]],
      [arr[1], arr[4], arr[7]],
      [arr[2], arr[5], arr[8]],
      [arr[0], arr[4], arr[8]],
      [arr[2], arr[4], arr[6]]
    ];
    console.log("array", array);
    console.log("playertoken", this.state.player_token);
    //find an array among arrays that has two AI tokens and one empty string
    const filtered = array
      .map((c, i) => c.filter(d => d === this.state.player_token || d === ""))
      .map(f => f.length === 1 && f.includes(this.state.player_token) === false)
      .indexOf(true);
    console.log("filtered", filtered);

    //if filtered has an array with two AI tokens and one empty string, find the empty string so
    //AI may make a move in that square for the win
    if (filtered !== -1) {
      const targetIndex = array[filtered].map((c, i) => c === "").indexOf(true);
      console.log("targetIndex", targetIndex);

      const element = this.stateReferenceConverter(filtered, targetIndex);
      console.log("element", element);

      let ai_token = this.state.computer_token;

      this.ai_MoveUpdate(element, ai_token);
    } else {
      return false;
    }
  };
  stateReferenceConverter(a, b) {
    console.log("inside ref converter", a, b);
    return a === 0 && b === 0
      ? 0
      : a === 0 && b === 1
        ? 1
        : a === 0 && b === 2
          ? 2
          : a === 1 && b === 0
            ? 3
            : a === 1 && b === 1
              ? 4
              : a === 1 && b === 2
                ? 5
                : a === 2 && b === 0
                  ? 6
                  : a === 2 && b === 1
                    ? 7
                    : a === 2 && b === 2
                      ? 8
                      : a === 3 && b === 0
                        ? 0
                        : a === 3 && b === 1
                          ? 3
                          : a === 3 && b === 2
                            ? 6
                            : a === 4 && b === 0
                              ? 1
                              : a === 4 && b === 1
                                ? 4
                                : a === 4 && b === 2
                                  ? 7
                                  : a === 5 && b === 0
                                    ? 2
                                    : a === 5 && b === 1
                                      ? 5
                                      : a === 5 && b === 2
                                        ? 8
                                        : a === 6 && b === 0
                                          ? 0
                                          : a === 6 && b === 1
                                            ? 4
                                            : a === 6 && b === 2
                                              ? 8
                                              : a === 7 && b === 0
                                                ? 2
                                                : a === 7 && b === 1
                                                  ? 4
                                                  : a === 7 && b === 2
                                                    ? 6
                                                    : "";
  }
  shouldAIBlock = arr => {
    console.log("im in shouldAIBlock");
    const array = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]],
      [arr[0], arr[3], arr[6]],
      [arr[1], arr[4], arr[7]],
      [arr[2], arr[5], arr[8]],
      [arr[0], arr[4], arr[8]],
      [arr[2], arr[4], arr[6]]
    ];
    const player_token = this.state.player_token;
    const computer_token = this.state.computer_token;
    const filtered = array
      .map((c, i) => c.filter(d => d === computer_token || d === ""))
      .map(f => f.length === 1 && f.includes(computer_token) === false)
      .indexOf(true);
    console.log("filtered", filtered);
    if (filtered !== -1) {
      const targetIndex = array[filtered].map((c, i) => c === "").indexOf(true);

      const element = this.stateReferenceConverter(filtered, targetIndex);
      console.log("element", element);

      this.ai_MoveUpdate(element, computer_token);
    } else {
      //since there's no place to win or block, AI will just choose a reasonable move
      this.heuristicAIMove(this.state.board);
    }
  };
  heuristicAIMove = arr => {
    //try to take the centre first. If not available, call chooseACorner
    console.log("im in heuristicAIMove", arr);
    let ai_token = this.state.computer_token;
    arr[4] === ""
      ? this.ai_MoveUpdate(4, ai_token)
      : this.chooseACorner(this.state.board);
  };
  chooseACorner = arr => {
    console.log("im in chooseACorner");
    let arrayOfCorners = [];

    arr.map(
      (c, i) =>
        c === "" && i === 0
          ? arrayOfCorners.push(i)
          : c === "" && i === 2
            ? arrayOfCorners.push(i)
            : c === "" && i === 6
              ? arrayOfCorners.push(i)
              : c === "" && i === 8
                ? arrayOfCorners.push(i)
                : ""
    );
    console.log("arrayOfCorners", arrayOfCorners);

    if (arrayOfCorners.length === 0) {
      this.chooseFromRemainingCells();
    } else {
      console.log("length", arrayOfCorners.length);
      let num = Math.floor(Math.random() * arrayOfCorners.length + 0);
      let choice = arrayOfCorners[num];
      let ai_token = this.state.computer_token;
      this.ai_MoveUpdate(choice, ai_token);
    }
  };
  chooseFromRemainingCells = arr => {
    console.log("chooseFromRemainingCells");
    let remainingCells = [];
    arr.map((c, i) => (c === "" ? remainingCells.push(i) : false));
    console.log(remainingCells);
    let num = Math.floor(Math.random() * remainingCells.length + 0);
    let ai_token = this.state.computer_token;
    this.ai_MoveUpdate(num, ai_token);
  };
  ai_MoveUpdate = (int, token) => {
    console.log("im in ai_MoveUpdate");
    let board = [...this.state.board];
    console.log("newArray", board);

    board.splice(int, 1, token);
    console.log("newArray", board);
    let whosTurn = !this.state.whosTurn;
    this.setState(
      {
        board,
        whosTurn
      },
      //() => {this.checkForWinOrDraw(this.state.board, this.state)}
      () => {
        console.log("checkForWinOrDraw", this.state.board, this.state.whosTurn);
      }
    );
  };
  checkForWinOrDraw = arr => {
    console.log("im in checkForWinOrDraw");
    //an array of all the possible winning rows
    const array = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]],
      [arr[0], arr[3], arr[6]],
      [arr[1], arr[4], arr[7]],
      [arr[2], arr[5], arr[8]],
      [arr[0], arr[4], arr[8]],
      [arr[2], arr[4], arr[6]]
    ];
    //map over array of arrays- possible winning rows - and check if all are x or o
    const trueIndexX = array
      .map((c, i, a) => c.every(d => d === "X"))
      .indexOf(true);
    const trueIndexO = array
      .map((c, i, a) => c.every(d => d === "O"))
      .indexOf(true);
    console.log("trueIndexX", trueIndexX);
    console.log("trueIndexO", trueIndexO);
    //this round of code golf just checks to see if any of the arrays within the array are either
    //all Xs or all Os-- if neither, then check for draw before deciding whos turn it is.
    trueIndexX !== -1
      ? this.declareWinner(array[trueIndexX], trueIndexX)
      : trueIndexO !== -1
        ? this.declareWinner(array[trueIndexO], trueIndexO)
        : this.checkForDraw(this.state.board);
  };
  checkForDraw = arr => {
    console.log("im in checkForDraw");
    //check for draw after checking for win
    if (arr.every(c => c !== "")) {
      //logic needed here
      alert("its a draw");
    } else {
      const turn = this.state.whosTurn;
      console.log("turn", turn);
      if (!turn) {
        this.checkForClearBoard(arr);
        //this is where the AI move will end if whosTurn is not AI, and the AI move starts with //checkForClearBoard
      }
    }
  };
  declareWinner = (winningRow, rowIndex) => {
    console.log("im in declare winner");
    console.log("index", rowIndex);
    console.log(winningRow);
    //check to see what player matches the letter in the winningRow and call and post to the screen
    if (winningRow[0] === this.state.player_token) {
      console.log("player wins");
    } else {
      console.log("Computer Wins");
    }
    //light up the winning squares
    this.lightUpSquares(rowIndex);
  };
  lightUpSquares = rowIndex => {
    console.log("im in lightUpSquares");
    let a;
    let b;
    let c;
    console.log("rowIndex", rowIndex);
    switch (rowIndex) {
      case 0:
        a = 0;
        b = 1;
        c = 2;
        break;
      case 1:
        a = 3;
        b = 4;
        c = 5;
        break;
      case 2:
        a = 6;
        b = 7;
        c = 8;
        break;
      case 3:
        a = 0;
        b = 3;
        c = 6;
        break;
      case 4:
        a = 1;
        b = 4;
        c = 7;
        break;
      case 5:
        a = 2;
        b = 5;
        c = 8;
        break;
      case 6:
        a = 0;
        b = 4;
        c = 8;
        break;
      case 7:
        a = 2;
        b = 4;
        c = 6;
        break;
      default:
        a = 0;
        b = 1;
        c = 2;
    }
    this.timingSquareLighting(`square${a}`, `square${b}`, `square${c}`);
  };
  timingSquareLighting = (A, B, C) => {
    console.log("im in timingSquareLighting");
    console.log(A, B, C);
  };
  checkForClearBoard = arr => {
    console.log("im in checkForClearBoard");

    //if the board is clear, call a function to choose a best first move; if not, call
    //checkforaWinningMove
    const boardIsEmpty = this.boardPopulation(this.state);
    console.log("boardIsEmpty", boardIsEmpty);
    boardIsEmpty === 9
      ? this.pickAGoodFirstAIMove()
      : this.checkForAIWinningMove(arr, this.state);
  };
  boardPopulation = state => {
    console.log("im in boardPopulation", state.board);
    return state.board.filter(c => c === "").length;
  };

  render() {
    return (
      <div className="app">
        <header className="app-game-title">Tic Tac Toe</header>
        <Scoreboard />
        <ResetButton />
        <GameBoard
          board={this.state.board}
          player_token={this.state.player_token}
          setSquareState={this.setSquareState}
          whosTurn={this.state.whosTurn}
          square0={this.state.square0}
          toggle={this.toggle}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
