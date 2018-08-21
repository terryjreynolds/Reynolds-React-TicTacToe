import React from "react";

class PlayButtons extends React.Component {
  render() {
    return (
      <div className="playButtons-parent">
        <button className="playAgain-button">Play Again</button>
        <button className="reset-button">Reset Game</button>
      </div>
    );
  }
}
export default PlayButtons;
