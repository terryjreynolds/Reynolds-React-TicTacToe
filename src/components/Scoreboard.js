import React from "react";

class Scoreboard extends React.Component {
  render() {
    return (
      <h2 className="scoreboard">
        <span
          className={
            this.props.winner === "player" ? "playerWordTransition" : "player"
          }
        >
          Player:
        </span>
        <span
          className={
            this.props.winner === "player"
              ? " playerTransition"
              : "player-integer"
          }
        >
          {" "}
          {this.props.player_score}
        </span>{" "}
        <span
          className={
            this.props.winner === "computer"
              ? " scoreWordTransition"
              : "computer"
          }
        >
          Computer:{" "}
        </span>
        <span
          className={
            this.props.winner === "computer"
              ? " scoreTransition"
              : "computer-integer"
          }
        >
          {" "}
          {this.props.computer_score}
        </span>{" "}
        <span
          className={
            this.props.winner === "draw" ? " drawWordTransition" : "draw"
          }
        >
          Draw:
        </span>{" "}
        <span
          className={
            this.props.winner === "draw" ? " drawTransition" : "draw-integer"
          }
        >
          {" "}
          {this.props.draw_score}
        </span>
      </h2>
    );
  }
}
export default Scoreboard;
