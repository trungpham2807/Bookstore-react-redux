import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { cartActions } from "../redux/actions/cart.actions";
import { cartReducer} from "../redux/reducers/cart.reducer"
const CartDetail = () => {
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  const books = useSelector((state) => state.cart.books);
  const loading = useSelector((state) => state.cart.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.getCart());
  }, [dispatch]);
  const removeFromCart = (bookId) => {
    dispatch(cartActions.removeFromCart(bookId));
  };
  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <>
          <ul>
            {books.map((book) => (
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
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(book.id)}
                      >
                        Remove
                      </Button>{" "}
                    </>
                  )}
                </Col>
              </Row>
            ))}
          </ul>
          <Button variant="success">Order Now !</Button>
        </>
      )}
    </>
  );
};

export default CartDetail;