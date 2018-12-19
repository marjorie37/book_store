import React, { Component } from "react";
import SearchBooks from "../containers/SearchBooks";
import FetchBooks from "../containers/FetchBooks";

class MainBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Welcome to my IT book store</h1>
        <SearchBooks />
        <FetchBooks />
      </div>
    );
  }
}

export default MainBookPage;
