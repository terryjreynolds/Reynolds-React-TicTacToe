import React from "react";

class TokenSelector extends React.Component {
  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className="selector-buttons">
        <span>Choose </span>
        <button
          className="sm-button"
          
          onClick={e => {
            this.props.action("btn1");
            this.props.buttonToggleOne();
          }}
        >
          X
        </button>
        <span>or </span>
        <button
          className="sm-button"
          
          onClick={e => {
            this.props.action("btn2");
            this.props.buttonToggleTwo();
          }}
        >
          O
        </button>
        ?
        </div>
      </div>
    );
  }
}

export default TokenSelector;
