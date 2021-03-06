import React from "react";
import Footer from "./Footer";
import Scoreboard from "./Scoreboard";
import GameBoard from "./GameBoard";
import PlayButtons from "./PlayButtons";
import { emptyIndexies } from "../helpers";
import { winning } from "../helpers";
import { numerizeBoard } from "../helpers";
class App extends React.Component {
  state = {
    level: 0,
    player_token: "",
    computer_token: "",
    board: ["", "", "", "", "", "", "", "", ""],
    whosTurn: true,
    player_score: 0,
    computer_score: 0,
    draw_score: 0,
    gameOver: false,
    square0: false,
    square1: false,
    square2: false,
    square3: false,
    square4: false,
    square5: false,
    square6: false,
    square7: false,
    square8: false,
    winner: ""
  };

  componentDidMount() {
    const whosTurn = this.props.whosTurn;
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
        if (this.state.level === 2) {
          if (this.state.whosTurn === true) {
          } else if (this.state.whosTurn === false) {
            const numerizedBoard = numerizeBoard(this.state.board);
            this.aiMove(numerizedBoard, this.state.computer_token);
          }
        } else {
          if (this.state.whosTurn === true) {
            console.log("player goes first");
          } else {
            this.checkForAIWinningMove(this.state.board, this.state);
          }
        }
      }
    );
  }
  async aiMove(board, token) {
    let perfectMove = await this.minimax(board, token);
    this.ai_MoveUpdate(perfectMove.index, token);
  }
  setSquareState = (string, int) => {
    let board = [...this.state.board];
    board.splice(int, 1, string);
    let whosTurn = !this.state.whosTurn;
    this.setState(
      {
        board,
        whosTurn
      },

      () => {
        this.checkForWinOrDraw(this.state.board, this.state);
      }
    );
  };
  playAgain = () => {
    const compGo = {
      board: ["", "", "", "", "", "", "", "", ""],
      gameOver: false,
      square0: false,
      square1: false,
      square2: false,
      square3: false,
      square4: false,
      square5: false,
      square6: false,
      square7: false,
      square8: false,
      winner: "",
      whosTurn: false
    };
    const playerGo = {
      board: ["", "", "", "", "", "", "", "", ""],
      gameOver: false,
      square0: false,
      square1: false,
      square2: false,
      square3: false,
      square4: false,
      square5: false,
      square6: false,
      square7: false,
      square8: false,
      winner: "",
      whosTurn: true
    };
    //need much more logic here to account for level one or two cases
    if (this.state.winner === "computer") {
      if (this.state.computer_token === "X") {
        this.setState(compGo, () => {
          this.aiMove(
            numerizeBoard(this.state.board),
            this.state.computer_token
          );
        });
      } else {
        this.setState(playerGo);
      }
    } else if (this.state.winner === "player") {
      if (this.state.player_token === "X") {
        this.setState(playerGo);
      } else {
        this.setState(compGo, () => {
          this.aiMove(
            numerizeBoard(this.state.board),
            this.state.computer_token
          );
        });
      }
    } else {
      if (this.state.player_token === "X") {
        this.setState(playerGo);
      } else {
        this.setState(compGo, () => {
          this.aiMove(
            numerizeBoard(this.state.board),
            this.state.computer_token
          );
        });
      }
    }
  };

  reset = () => {
    this.setState({
      level: 0,
      player_token: "",
      computer_token: "",
      board: ["", "", "", "", "", "", "", "", ""],
      whosTurn: true,
      player_score: 0,
      computer_score: 0,
      gameOver: false,
      square0: false,
      square1: false,
      square2: false,
      square3: false,
      square4: false,
      square5: false,
      square6: false,
      square7: false,
      square8: false,
      winner: ""
    });
    this.props.history.push(`/`);
  };
  checkForAIWinningMove = (arr, state) => {
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
    //find an array among arrays that has two AI tokens and one empty string
    const filtered = array
      .map((c, i) => c.filter(d => d === state.player_token || d === ""))
      .map(f => f.length === 1 && f.includes(state.player_token) === false)
      .indexOf(true);

    //if filtered has an array with two AI tokens and one empty string, find the empty string so
    //AI may make a move in that square for the win
    if (filtered !== -1) {
      const targetIndex = array[filtered].map((c, i) => c === "").indexOf(true);
      const element = this.stateReferenceConverter(filtered, targetIndex);

      let ai_token = state.computer_token;

      this.ai_MoveUpdate(element, ai_token);
    } else {
      this.shouldAIBlock(arr, state);
    }
  };
  stateReferenceConverter(a, b) {
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
    const computer_token = this.state.computer_token;
    const filtered = array
      .map((c, i) => c.filter(d => d === computer_token || d === ""))
      .map(f => f.length === 1 && f.includes(computer_token) === false)
      .indexOf(true);
    if (filtered !== -1) {
      const targetIndex = array[filtered].map((c, i) => c === "").indexOf(true);

      const element = this.stateReferenceConverter(filtered, targetIndex);

      this.ai_MoveUpdate(element, computer_token);
    } else {
      //since there's no place to win or block, AI will just choose a reasonable move
      this.heuristicAIMove(this.state.board);
    }
  };
  heuristicAIMove = arr => {
    //try to take the centre first. If not available, call chooseACorner
    let ai_token = this.state.computer_token;
    arr[4] === ""
      ? this.ai_MoveUpdate(4, ai_token)
      : this.chooseACorner(this.state.board);
  };
  chooseACorner = arr => {
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

    if (arrayOfCorners.length === 0) {
      this.chooseFromRemainingCells(arr);
    } else {
      let num = Math.floor(Math.random() * arrayOfCorners.length + 0);
      let choice = arrayOfCorners[num];
      let ai_token = this.state.computer_token;
      this.ai_MoveUpdate(choice, ai_token);
    }
  };
  chooseFromRemainingCells = arr => {
    let remainingCells = [];
    arr.map((c, i) => (c === "" ? remainingCells.push(i) : false));
    //choose a random cell from the array of remaining cells
    let num = remainingCells[Math.floor(Math.random() * remainingCells.length)];
    let ai_token = this.state.computer_token;
    this.ai_MoveUpdate(num, ai_token);
  };
  //to delay AI moves as to appear more human, I had to store the result of splicing function
  //in a promise variable. Once the promise variable was fulfilled, then the doTheUpdate function
  //could run on a setTimeout of 800
  ai_MoveUpdate = (int, token) => {
    let board = [...this.state.board];
    splicingBoard(board, int, token, this.doTheUpdate);

    async function splicingBoard(board, int, token, tool) {
      let promise = await splicing(board, int, token);
      setTimeout(tool, 400, promise);

      function splicing(board, int, token) {
        let newBoard = board;
        newBoard.splice(int, 1, token);
        return newBoard;
      }
    }
  };

  doTheUpdate = board => {
    let whosTurn = !this.state.whosTurn;

    this.setState(
      {
        board,
        whosTurn
      },
      () => {
        this.checkForWinOrDraw(this.state.board, this.state);
      }
    );
  };
  checkForWinOrDraw = (arr, state) => {
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
    //this round of code golf just checks to see if any of the arrays within the array are either
    //all Xs or all Os-- if neither, then check for draw before deciding whos turn it is.
    trueIndexX !== -1
      ? this.declareWinner(array[trueIndexX], trueIndexX)
      : trueIndexO !== -1
        ? this.declareWinner(array[trueIndexO], trueIndexO)
        : this.checkForDraw(arr, state);
  };
  checkForDraw = (arr, state) => {
    //check for draw after checking for win
    if (arr.every(c => c !== "")) {
      this.setState(prevState => {
        return {
          draw_score: prevState.draw_score + 1,
          gameOver: true,
          winner: "draw"
        };
      });
    } else {
      const turn = state.whosTurn;
      if (turn === false) {
        if (state.level === 1) {
          this.checkForClearBoard(arr, state);
        } else {
          const perfectMove = this.minimax(
            numerizeBoard(state.board),
            state.computer_token
          );
          const perfectMoveIndex = perfectMove.index;
          this.ai_MoveUpdate(perfectMoveIndex, state.computer_token);
        }
        //this is where the AI move will end if whosTurn is not AI, and the AI move starts with //checkForClearBoard
      }
    }
  };
  declareWinner = (winningRow, rowIndex) => {
    //check to see what player matches the letter in the winningRow and call and post to the screen
    if (winningRow[0] === this.state.player_token) {
      this.setState(prevState => {
        return {
          player_score: prevState.player_score + 1,
          winner: "player",
          gameOver: true
        };
      });
    } else {
      this.setState(prevState => {
        return {
          computer_score: prevState.computer_score + 1,
          winner: "computer",
          gameOver: true
        };
      });
    }
    //light up the winning squares
    this.lightUpSquares(rowIndex);
  };

  lightUpSquares = rowIndex => {
    switch (rowIndex) {
      case 0:
        this.setState({
          square0: true,
          square1: true,
          square2: true
        });
        break;
      case 1:
        this.setState({
          square3: true,
          square4: true,
          square5: true
        });
        break;
      case 2:
        this.setState({
          square6: true,
          square7: true,
          square8: true
        });
        break;
      case 3:
        this.setState({
          square0: true,
          square3: true,
          square6: true
        });
        break;
      case 4:
        this.setState({
          square1: true,
          square4: true,
          square7: true
        });
        break;
      case 5:
        this.setState({
          square2: true,
          square5: true,
          square8: true
        });
        break;
      case 6:
        this.setState({
          square0: true,
          square4: true,
          square8: true
        });
        break;
      case 7:
        this.setState({
          square2: true,
          square4: true,
          square6: true
        });
        break;
      default:
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
  };
  checkForClearBoard = (arr, state) => {
    //if the board is clear, call a function to choose a best first move; if not, call
    //checkforaWinningMove
    const boardIsEmpty = this.boardPopulation(state);
    boardIsEmpty === 9
      ? this.pickAGoodFirstAIMove()
      : this.checkForAIWinningMove(arr, state);
  };
  boardPopulation = state => {
    return state.board.filter(c => c === "").length;
  };
  //------------------------------MINIMAX------------------------
  minimax = (newBoard, contestant) => {
    //available spots
    const availSpots = emptyIndexies(newBoard);

    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (winning(newBoard, this.state.player_token)) {
      return { score: -10 };
    } else if (winning(newBoard, this.state.computer_token)) {
      return { score: 10 };
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }

    // an array to collect all the objects
    let moves = [];

    // loop through available spots
    for (let i = 0; i < availSpots.length; i++) {
      //create an object for each and store the index of that spot that was stored as a number in the object's index key
      let move = {};
      move.index = newBoard[availSpots[i]];

      // set the empty spot to the current player
      newBoard[availSpots[i]] = contestant;

      //if collect the score resulted from calling minimax on the opponent of the current player
      if (contestant === this.state.computer_token) {
        let result = this.minimax(newBoard, this.state.player_token);
        move.score = result.score;
      } else {
        let result = this.minimax(newBoard, this.state.computer_token);
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[availSpots[i]] = move.index;

      // push the object to the array
      moves.push(move);
    }

    // if it is the computer's turn loop over the moves and choose the move with the highest score
    let bestMove;
    if (contestant === this.state.computer_token) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      // else loop over the moves and choose the move with the lowest score
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
  };

  render() {
    return (
      <div className="app">
        <header className="app-game-title">Tic Tac Toe</header>
        <Scoreboard
          player_score={this.state.player_score}
          computer_score={this.state.computer_score}
          draw_score={this.state.draw_score}
          winner={this.state.winner}
        />
        <PlayButtons
          initialState={this.initialState}
          reset={this.reset}
          playAgain={this.playAgain}
        />
        <GameBoard
          board={this.state.board}
          player_token={this.state.player_token}
          setSquareState={this.setSquareState}
          winner={this.state.winner}
          whosTurn={this.state.whosTurn}
          gameOver={this.state.gameOver}
          square0={this.state.square0}
          square1={this.state.square1}
          square2={this.state.square2}
          square3={this.state.square3}
          square4={this.state.square4}
          square5={this.state.square5}
          square6={this.state.square6}
          square7={this.state.square7}
          square8={this.state.square8}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
