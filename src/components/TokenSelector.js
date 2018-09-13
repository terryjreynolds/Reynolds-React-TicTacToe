import React from "react";

class TokenSelector extends React.Component {
  state = {
    smbutton: true
  };
  handleClickX = () => {
    this.setState({
      smbutton: false
    });
    const level = this.props.level;
    const goTo = this.props.history.push;
    function changeClass(level, goTo) {
      level === 1 ? goTo(`/game/X1/`) : goTo(`/game/X2/`);
    }
    setTimeout(changeClass, 300, level, goTo);
  };
  handleClickO = () => {
    this.setState({
      smbutton: false
    });
    const level = this.props.level;
    const goTo = this.props.history.push;
    function changeClass(level, goTo) {
      level === 1 ? goTo(`/game/O1/`) : goTo(`/game/O2/`);
    }
    setTimeout(changeClass, 300, level, goTo);
  };
  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className={this.state.smbutton ? "selector-buttons" : "slideOut"}>
          <span>Choose </span>
          <button className="smbutton" onClick={this.handleClickX}>
            X
          </button>
          <span> or </span>
          <button className="smbutton" onClick={this.handleClickO}>
            O
          </button>
          ?
        </div>
      </div>
    );
  }
}

export default TokenSelector;
