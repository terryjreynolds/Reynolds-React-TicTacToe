import React from "react";

class LevelSelector extends React.Component {
  handleClickOne = () => {
    this.props.history.push(`/tokenselector1/`);
  };
  handleClickTwo = () => {
    this.props.history.push(`/tokenselector2/`);
  };
  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className="selector-buttons">
          <span>Level </span>
          <button className="sm-button" onClick={this.handleClickOne}>
            1
          </button>
          <span>or </span>
          <button className="sm-button" onClick={this.handleClickTwo}>
            2
          </button>
          ?
        </div>
      </div>
    );
  }
}

export default LevelSelector;
