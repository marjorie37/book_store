import React from "react";
import { connect } from "react-redux";
import { searchBook } from "../actions/booksActions";
import Button from "@material-ui/core/Button";

// const suggestions = [
//   { value: "react" },
//   { value: "angular" },
//   { value: "php" },
//   { value: "java" },
//   { value: "javascript" },
//   { value: "web" },
//   { value: "windows" },
//   { value: "api" },
//   { value: "ios" },
//   { value: "node" },
//   { value: "mongodb" }
// ];

const SearchBooks = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h3>Search for a book by title, author, ISBN or keywords :</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(searchBook(input.value));
        }}
      >
        <input type="text" ref={node => (input = node)} />

        <Button color="secondary" variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default connect()(SearchBooks);
