import React, { Component } from "react";
import Title from "../../components/title/index";
import SavedBooks from "../../components/savedBooks/index";
class saved extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="title">
          <Title/>
        </div>
        <div className="savedBooks">
          <SavedBooks/>
        </div>
      </div>
    );
  }
}

export default saved;
