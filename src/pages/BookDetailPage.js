import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../apiService";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../redux/actions/book.actions";
import { cartActions } from "../redux/actions/cart.actions";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const BookDetailPage = () => {
  const params = useParams();
  const bookId = params.id;
  const book = useSelector((state) => state.books.selectedBook);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  const addToReadingList = (book) => {
    dispatch(bookActions.addToFavorite(book));
  };
  const addToCart = () => {
    dispatch(cartActions.addToCart(book));
  };

  useEffect(() => {
    dispatch(bookActions.selectBook(bookId));
  }, [bookId, dispatch]);

  return (
    <Container>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row className="border border-info mt-5">
          <Col md={3}>
            {book && (
              <img
                className="w-100"
                src={`${BACKEND_API}/${book.imageLink}`}
                alt=""
              />
            )}
          </Col>
          <Col md={9}>
            {book && (
              <>
                <h2>{book.title}</h2>
                <div>
                  <strong>Author:</strong> {book.author}
                </div>
                <div>
                  <strong>Year:</strong> {book.year}
                </div>
                <div>
                  <strong>Country:</strong> {book.country}
                </div>
                <div>
                  <strong>Pages:</strong> {book.pages}
                </div>
                <div>
                  <strong>Language:</strong> {book.language}
                </div>
                <Button onClick={() => addToReadingList(book)}>
                  Add to Reading List
                </Button>{" "}
                <Button variant="success" onClick={() => addToCart()}>
                  Add to cart
                </Button>{" "}
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookDetailPage;