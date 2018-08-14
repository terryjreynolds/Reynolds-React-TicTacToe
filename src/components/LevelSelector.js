import React from "react";

class LevelSelector extends React.Component {
  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className="selector-buttons">
        <span>Level </span>
        <button
          className="sm-button"
          id="button1"
          onClick={e => {
            this.props.action("btn1");
            this.props.buttonToggleOne();
          }}
        >
          1
        </button>
        <span>or </span>
        <button
          className="sm-button"
          id="button2"
          onClick={e => {
            this.props.action("btn2");
            this.props.buttonToggleTwo();
          }}
        >
          2
        </button>
        ?
        </div>
      </div>
    );
  }
}

export default LevelSelector;
