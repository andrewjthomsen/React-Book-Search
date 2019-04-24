import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav/index";
import SearchPage from "./pages/search/search";
import SavedPage from "./pages/saved/saved";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentPage: 'search'
    }
  }

  render() {
    // <Route path="" component = {home}/>
    return (
      <Router>
        <div className="wrapper">
          <div className="navBar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
