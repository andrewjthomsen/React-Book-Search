import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav/index";
import SearchPage from "./pages/search/search";
import SavedPage from "./pages/saved/saved";
// import { Router, Route, IndexRoute } from 'react-router';
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentPage: 'search'
    }

    this.onNavClicked = this.onNavClicked.bind(this);
  }

  onNavClicked(page) {
    this.setState({ currentPage: page });
  }

  render() {
    // <Route path="" component = {home}/>
    return (
      <div className="wrapper">
        <div className="navBar">
          <NavBar onNavClick={this.onNavClicked} />
        </div>
        {
          this.state.currentPage == 'search' ?
          <SearchPage /> :
          <SavedPage />
        }
      </div>
    );
  }
}

export default App;
