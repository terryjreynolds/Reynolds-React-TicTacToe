import React from "react";

class PlayButtons extends React.Component {
  handleClick = () => {
    this.props.playAgain();
  };
  handleClickReset = () => {
    this.props.reset();
  };
  render() {
    return (
      <div className="playButtons-parent">
        <button
          className="playAgain-button"
          onClick={this.handleClickPlayAgain}
        >
          Play Again
        </button>
        <button className="reset-button" onClick={this.handleClickReset}>
          Reset Game
        </button>
      </div>
    );
  }
}
export default PlayButtons;
