import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, fetchBookDetails } from "../actions/booksActions";
import Button from "@material-ui/core/Button";
import { addToCart } from "../actions/cartActions";
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
        <CardImg top src={book.image} width="10%" />
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
          <Button
            onClick={() => this.props.addToCart(book.isbn13)}
            style={{ backgroundColor: "#f44336" }}
            variant="contained"
          >
            Buy
          </Button>
        </CardBody>
      </Card>
    ));
    return (
      <div>
        <h3>Browse our new books :</h3>
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
  fetchBooks,
  addToCart
};

fetchBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchBooks);
