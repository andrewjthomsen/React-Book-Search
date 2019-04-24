import React, { Component } from "react";
import Title from "../../components/title";

class Search extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="title">
          <Title/>
        </div>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Search;
