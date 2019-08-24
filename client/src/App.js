import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav/index";
import SearchPage from "./pages/search/search";
import SavedPage from "./pages/saved/saved";
import Title from "./components/title/index";
import { Jumbotron, Display4, } from "bootstrap-4-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     currentPage: 'search'
  //   }
  // }

  render() {
    // <Route path="" component = {home}/>
    return (
      <Router>
        <div className="wrapper container">
          <div className="navBar">
            <NavBar />
          </div>
          <Jumbotron className="jumbotron">
            <Title />
          </Jumbotron>

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
// Ask professor or TA:
// Why is my API not working
