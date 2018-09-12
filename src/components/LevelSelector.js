import React from "react";

class LevelSelector extends React.Component {
  state = {
    smbutton: true
  };
  handleClickOne = () => {
    this.setState({
      smbutton: false
    });
    const target = this.props.history;
    function changeClass(tar) {
      tar.push(`/tokenselector1/`);
    }

    setTimeout(changeClass, 400, target);
  };
  handleClickTwo = () => {
    this.props.history.push(`/tokenselector2/`);
  };

  render() {
    return (
      <div className="selector">
        <header className="game-title">Tic Tac Toe</header>
        <div className={this.state.smbutton ? "selector-buttons" : "slideOut"}>
          <span>Level </span>
          <button className="smbutton" onClick={this.handleClickOne}>
            1
          </button>
          <span> or </span>
          <button className="smbutton" onClick={this.handleClickTwo}>
            2
          </button>
          ?
        </div>
      </div>
    );
  }
}

export default LevelSelector;
