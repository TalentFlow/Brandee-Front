import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getCartItems,
  addToCartSingle,
  removeFromCartSingle,
  removeFromCart,
} from "../action/cart";
import { Link, Redirect } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../css/cart/cart.css";
import Loader from "react-loader-spinner";
import Empty from "../wishlist/empty";

const Cart = () => {
  const { cartItems, isLoading, isAuthenticated, token } = useSelector(
    (state) => ({
      cartItems: state.cart.cartItems,
      isLoading: state.cart.isLoading,
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (!isAuthenticated && !token) {
      window.location.href = "/login";
      return <Redirect to="/login" />;
    }
  });
  const width = useWindowWidth();
  const [val, setVal] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const handleAddToCart = (data, index) => {
    const item = data;
    item.items[index].quantity += 1;
    item.items[index].total = item.items[index].total + item.items[index].price;
    item.total += item.items[index].price;
    console.log(item);
    dispatch(addToCartSingle(item, index));
  };
  const handleRemoveFromCartSingle = (data, index, id) => {
    const item = data;
    item.items[index].quantity -= 1;
    item.items[index].total = item.items[index].total - item.items[index].price;
    item.total -= item.items[index].price;
    console.log(item);
    dispatch(removeFromCartSingle(item, index, id));
  };

  const handleRemoveFromCart = (data, index, id) => {
    const item = data;
    item.total -= item.items[index].total;
    const item1 = data.items.filter((item) => item.id !== id);
    item.items = item1;
    console.log(item);
    dispatch(removeFromCart(id, item));
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <header className="cart-page-header">
          <h1>
            <span>Shopping Cart</span>
          </h1>
        </header>
      </div>

      <div className="container-fluid main-cart">
        {isLoading ? (
          <Loader
            type="Bars"
            color="#000"
            height={100}
            width={100}
            timeout={8000}
            style={{ marginTop: "5rem", marginBottom: "3rem" }}
          />
        ) : (
          <React.Fragment>
            <form className="cart-form" id="wrapper-cart-desktop">
              {cartItems[0] && cartItems[0].items.length > 0 ? (
                cartItems.map((item) => (
                  <React.Fragment>
                    <table className="cart-items desktop">
                      <tbody>
                        <tr>
                          <th>Item</th>
                          <th></th>
                          <th>Size</th>
                          <th>Color</th>
                          <th>Units</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                        <hr />
                        <React.Fragment>
                          {item.items.map((item1, index) => {
                            return (
                              <React.Fragment>
                                <tr className="cart-item-row">
                                  <td className="cart-item-image">
                                    <Link href="/">
                                      <img
                                        src={item1.products.img[0].img}
                                        alt={item1.products.title}
                                      />
                                    </Link>
                                  </td>
                                  <td className="cart-item-title">
                                    <a href="/" className="product-name">
                                      <span>{item1.products.title}</span>
                                    </a>
                                  </td>
                                  <td className="cart-item-size">
                                    <small>{item1.size}</small>
                                  </td>
                                  <td className="cart-item-color">
                                    <small>{item1.products.color}</small>
                                  </td>
                                  <td className="cart-item-quantity">
                                    <div className="pro-qty">
                                      <span
                                        className="dec qtybtn"
                                        onClick={(e) =>
                                          handleRemoveFromCartSingle(
                                            item,
                                            index,
                                            item1.id
                                          )
                                        }
                                      >
                                        -
                                      </span>
                                      <input
                                        type="text"
                                        value={item1.quantity}
                                        onChange={(e) =>
                                          setVal(
                                            e.target.value === ""
                                              ? parseInt(0)
                                              : parseInt(e.target.value)
                                          )
                                        }
                                      />
                                      <span
                                        className="inc qtybtn"
                                        onClick={() =>
                                          handleAddToCart(item, index)
                                        }
                                      >
                                        +
                                      </span>
                                    </div>
                                  </td>
                                  <td className="cart-item-price">
                                    <div className="price-box">
                                      <span>
                                        <span
                                          className="money"
                                          data-currency-pkr="PKR 4,490 "
                                        >
                                          USD{" "}
                                          {item1.total.toLocaleString(
                                            undefined,
                                            {
                                              maximumFractionDigits: 2,
                                            }
                                          )}{" "}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="cart-item-remove">
                                    <div className="remove-box">
                                      <span>
                                        <span
                                          className="money"
                                          data-currency-pkr="PKR 4,490 "
                                          onClick={() =>
                                            handleRemoveFromCart(
                                              item,
                                              index,
                                              item1.id
                                            )
                                          }
                                        >
                                          Remove{" "}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <hr />
                              </React.Fragment>
                            );
                          })}
                        </React.Fragment>
                      </tbody>
                    </table>
                    <div className="row max-end">
                      <div className="cart-end mr-auto">
                        <Link to="/">
                          <div className="end-left">
                            <h6>
                              <span>
                                <FaArrowLeft size="0.8rem" />{" "}
                              </span>
                              Continue Shopping
                            </h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className={`end-right ${
                          width < 1154 ? "mr-auto" : "ml-auto"
                        }`}
                      >
                        <div className="row end-right-price">
                          <div className="mr-auto">
                            <h5 className="total">Total:</h5>
                          </div>
                          <div className="ml-auto">
                            <h5 className="total-price">
                              USD{" "}
                              {item.total.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}
                            </h5>
                          </div>
                        </div>
                        <div className="row end-cart-button">
                          <a href="/checkout" className="button-end">
                            Proceed To Order
                          </a>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <div>
                  <Empty data="Cart" />
                </div>
              )}
            </form>
            <form
              id="wrapper-cart"
              class="cart-form wrapper-cart-template form-cart-mobile"
            >
              {cartItems.length > 0 && cartItems ? (
                <div
                  className="container-fluid"
                  style={{
                    backgroundColor: "#FAFAFA",
                    borderBottom: "1px solid #e7e7e7",
                  }}
                >
                  <div className="mobile-header">
                    <div className="row">
                      <h6 className="header-title">Items</h6>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="container-fluid mobile-mini">
                {cartItems.length > 0 && cartItems ? (
                  cartItems.map((item) => (
                    <React.Fragment>
                      {item.items.map((item1, index) => {
                        return (
                          <React.Fragment>
                            <div className="row mobile-cart">
                              <div className="img-mini">
                                <Link href="/">
                                  <img
                                    src={`http://localhost:8000${item1.products.img[0].primary}`}
                                    alt={item1.products.title}
                                  />
                                </Link>
                              </div>
                              <div className="info-mini">
                                <h3 className="title-mini">
                                  {item1.products.title}
                                </h3>
                                <h6 className="col-size-mini">
                                  <small>
                                    {item1.products.color} / {item1.size}
                                  </small>
                                </h6>
                                <div class="pro-qty1">
                                  <span
                                    class="dec1 qtybtn1"
                                    onClick={(e) =>
                                      handleRemoveFromCartSingle(
                                        item,
                                        index,
                                        item1.id
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    value={item1.quantity}
                                    onChange={(e) =>
                                      setVal(
                                        e.target.value === ""
                                          ? parseInt(0)
                                          : parseInt(e.target.value)
                                      )
                                    }
                                  />
                                  <span
                                    class="inc1 qtybtn1"
                                    onClick={() => handleAddToCart(item, index)}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                              <div className="info-right-mini ml-auto">
                                <div className="info-price-right">
                                  <h6>
                                    USD{" "}
                                    <span>
                                      {item1.total.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                      })}
                                    </span>
                                  </h6>
                                </div>
                                <div className="info-remove-right">
                                  <a href="/">Remove</a>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </React.Fragment>
                        );
                      })}
                      <div className="row max-end">
                        <div className="cart-end mr-auto">
                          <Link href="/">
                            <div className="end-left">
                              <h6>
                                <span>
                                  <FaArrowLeft size="0.8rem" />{" "}
                                </span>
                                Continue Shopping
                              </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="row pricing-order-mini">
                        <div
                          className={`end-right ${
                            width < 1154 ? "mr-auto" : "ml-auto"
                          }`}
                        >
                          <div className="row end-right-price">
                            <div className="mr-auto">
                              <h5 className="total">Total:</h5>
                            </div>
                            <div className="ml-auto">
                              <h5 className="total-price">
                                USD{" "}
                                {item.total.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                              </h5>
                            </div>
                          </div>
                          <div className="row end-cart-button">
                            <a href="/checkout" className="button-end">
                              Place Order
                            </a>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                ) : (
                  <div>
                    <Empty data="Cart" />
                  </div>
                )}
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return width;
}
