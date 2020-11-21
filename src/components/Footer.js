import React from "react";
 const year = new Date().getFullYear()
class Footer extends React.Component {
 
  render() {
    return (
      <footer className="footer" >
        Tic Tac Toe in React designed and coded by <a id="portfolioLink" target="blank" href="https://terryjreynolds.dev">T. Reynolds</a>, &copy; {year}.
      </footer>
    );
  }
}
export default Footer;
