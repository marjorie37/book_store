import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, fetchBookDetails } from "../actions/booksActions";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class FetchBooks extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }
  render() {
    const bookItem = this.props.books.map(book => (
      <Card key={book.isbn13}>
        <CardImg src={book.image} />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.subtitle}</CardSubtitle>
          <CardText>{book.price}</CardText>
          <Link to={`/details/${book.isbn13}`}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => this.props.fetchBookDetails(book.isbn13)}
            >
              more details
            </Button>
          </Link>
        </CardBody>
      </Card>
    ));
    return (
      <div>
        <h3>New books :</h3>
        {bookItem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

const mapDispatchToProps = {
  fetchBookDetails,
  fetchBooks
};

fetchBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchBooks);
