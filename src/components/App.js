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
    whosTurn: "player",
    player_score: 0,
    computer_score: 0
  };
  componentDidMount() {
    console.log("level", this.props.level);
    console.log("player_token", this.props.player_token);
    const level = this.props.level;
    const player_token = this.props.player_token;
    let computer_token = "";
    player_token === "X" ? (computer_token = "O") : (computer_token = "X");
    this.setState(
      {
        level,
        player_token,
        computer_token
      },
      () => {
        console.log("currentstate", this.state);
      }
    );
  }

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
