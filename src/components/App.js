import React from "react";
import Footer from "./Footer";
import Scoreboard from "./Scoreboard";
import ResetButton from "./ResetButton";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    level: 1,
    player_token: "",
    computer_token: "",
    board: ["", "", "", "", "", "", "", "", ""],
    whosTurn: "player",
    player_score: 0,
    computer_score: 0
  };
  render() {
    return (
      <div className="app">
        <header className="app-game-title">Tic Tac Toe</header>
        <Scoreboard />
        <ResetButton />
        <GameBoard board={this.state.board} />
        <Footer />
      </div>
    );
  }
}

export default App;
