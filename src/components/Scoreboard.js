import React from "react";

class Scoreboard extends React.Component {
  render() {
    return (
      <h2 className="scoreboard">
        Player:
        <span className="player-integer"> {this.props.player_score}</span>{" "}
        Computer:{" "}
        <span className="computer-integer"> {this.props.computer_score}</span>{" "}
        Draw: <span className="draw-integer"> {this.props.draw_score}</span>
      </h2>
    );
  }
}
export default Scoreboard;
