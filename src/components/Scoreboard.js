import React from "react";

class Scoreboard extends React.Component {
  render() {
    return (
      <h2 className="scoreboard">
        Player:
        <span className="player-integer"> 0</span> Computer:{" "}
        <span className="computer-integer"> 0</span>
      </h2>
    );
  }
}
export default Scoreboard;
