import React, { Component } from "react";
import Title from "../../components/title";
// import api from "../../api/api";
import SearchBook from "../../components/search/index";
class Search extends Component {
  // handleFormSubmit = event =>  {
  //   console.log(event);
  //   api.getBooks(this.state.search).then(res =>
  //     { let results = res.data.item
  //       results = results.map(results =>{
  //         results = {title:results.title,
  //         authors: results.authors,
  //       description: results.description,
  //     image: results.image,
  //     link: results.link
  //   }
  //   return results;
  //       })

  //   }
  //   )};
  render() {
    return (
      <div className="wrapper">
        <div className="title">
          <Title/>
          </div>
          <div className="search">
          <SearchBook/>
          </div>
      </div>
    );
  }
}

export default Search;
