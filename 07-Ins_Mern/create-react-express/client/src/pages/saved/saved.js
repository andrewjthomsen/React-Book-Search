import React, { Component } from "react";
import SavedBooks from "../../components/savedBooks/index";
class saved extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="savedBooks">
          <SavedBooks/>
        </div>
      </div>
    );
  }
}

export default saved;
