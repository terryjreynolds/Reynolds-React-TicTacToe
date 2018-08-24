import React from "react";

class TokenSelector extends React.Component {
  handleClickX = () => {
    const level = this.props.level;
    const goTo = this.props.history.push;
    level === 1 ? goTo(`/game/X1/`) : goTo(`/game/X2/`);
  };
  handleClickO = () => {
    const level = this.props.level;
    const goTo = this.props.history.push;
    level === 1 ? goTo(`/game/O1/`) : goTo(`/game/O2/`);
  };
  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className="selector-buttons">
          <span>Choose </span>
          <button className="sm-button" onClick={this.handleClickX}>
            X
          </button>
          <span> or </span>
          <button className="sm-button" onClick={this.handleClickO}>
            O
          </button>
          ?
        </div>
      </div>
    );
  }
}

export default TokenSelector;
