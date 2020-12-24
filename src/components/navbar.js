import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getIconCount } from "./action/navbar";
import { getCartItems, clearCart } from "./action/cart";
import { logout, loadUser } from "./action/auth";
import SideBar from "./menu";
import { FaRegHeart } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsBag, BsSearch } from "react-icons/bs";
import "../css/navbar.css";
import Pic from "../pics/Logo1.png";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const width = useWindowWidth();
  const dispatch = useDispatch();
  const { user, icon_count, isAuthenticated, cartItems, token } = useSelector(
    (state) => ({
      user: state.auth.user,
      icon_count: state.navbar1.icon_count,
      token: state.auth.token,
      isAuthenticated: state.auth.isAuthenticated,
      cartItems: state.cart.cartItems,
    }),
    shallowEqual
  );
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const user = localStorage.getItem("_userId");
    if (user) {
      const data = {
        user: parseInt(user),
      };

      dispatch(getIconCount(data));
      dispatch(getCartItems());
    } else {
      dispatch(clearCart());
    }
  }, []);
  useEffect(() => {
    if (!user) {
      dispatch(clearCart());
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <header class="header">
      <SideBar tooltip="Menu" />
      <Headroom>
        <nav class="navbar navbar-light bg-light ">
          <div class="header__logo mx-md-auto mx-sm-auto mx-auto">
            <Link to="/">
              <img src={Pic} alt="" />
            </Link>
          </div>
          <div class="header__right mr-sm-2">
            {!user ? (
              <div class="header__right__auth">
                <Link
                  to="/login"
                  onClick={() => {
                    localStorage.setItem("prev", path);
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => {
                    localStorage.setItem("prev", path);
                  }}
                >
                  Register
                </Link>
              </div>
            ) : null}

            <ul class="header__right__widget">
              <li class="icon">
                <Link to="/wishlist">
                  <FaRegHeart size="1.5em" />
                  {isAuthenticated ? (
                    icon_count.wishlist > 0 ? (
                      <React.Fragment>
                        <div class="tip">{icon_count.wishlist}</div>
                      </React.Fragment>
                    ) : null
                  ) : null}
                </Link>
              </li>
              <li className="user-parent-cart">
                <Link to="/cart">
                  <BsBag size="1.5em" />
                  {isAuthenticated ? (
                    icon_count.cart > 0 ? (
                      <React.Fragment>
                        <div class="tip">{icon_count.cart}</div>
                      </React.Fragment>
                    ) : null
                  ) : null}
                </Link>
                {isAuthenticated &&
                token &&
                cartItems[0] &&
                cartItems[0].items.length > 0
                  ? cartItems.map((item) => (
                      <div className="dropdown">
                        <div className="li">
                          <div id="style-2" class="scrollbar scrollbar1">
                            {item
                              ? item.items.map((item1) => (
                                  <React.Fragment>
                                    <div class="activity-row activity-row1 activity-right">
                                      <div class="cart-left">
                                        <Link
                                          to={`/product/${item1.products.slug}`}
                                        >
                                          <img
                                            src={item1.products.img[0].img}
                                            alt={item1.products.title}
                                            width="30px"
                                            height="40"
                                          />
                                        </Link>
                                      </div>
                                      <div class="cart-right">
                                        <h3>
                                          <Link
                                            to={`/product/${item1.products.slug}`}
                                          >
                                            {item1.products.title}
                                          </Link>
                                        </h3>
                                        <p>
                                          ${item1.products.price_new}
                                          <span>
                                            ${item1.products.price_old}
                                          </span>
                                        </p>
                                      </div>
                                      <div class="clear"></div>
                                    </div>
                                    <hr />
                                  </React.Fragment>
                                ))
                              : null}
                          </div>
                        </div>
                        <div className="lee">
                          <div className="total">
                            <span className="tag">Total</span>
                            <span className="price">
                              USD{" "}
                              <span>
                                {item.total.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                              </span>
                            </span>
                          </div>
                          <div className="highlight">
                            <p>
                              *All orders may take up to 7-20 working days to be
                              delivered to your doorstep
                            </p>
                          </div>
                          <div className="process">
                            <a href="/checkout" className="button">
                              Process Your Order Now
                            </a>
                          </div>
                          <div className="check-cart">
                            <Link to="/cart" className="button">
                              See Shopping Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </li>
              <li className="user-parent">
                <Link to="/account">
                  <BiUser size="1.5em" />
                </Link>

                <div className="user">
                  {!user ? (
                    <React.Fragment>
                      <div className="button">
                        <Link
                          to="/login"
                          onClick={() => {
                            localStorage.setItem("prev", path);
                          }}
                        >
                          LOG IN
                        </Link>
                      </div>
                      <div className="authenticate">
                        <p>
                          You don't have an account?{" "}
                          <Link
                            to="/register"
                            className="sign-up"
                            onClick={() => {
                              localStorage.setItem("prev", path);
                            }}
                          >
                            Sign up now
                          </Link>
                        </p>
                      </div>
                      <hr />
                      <div className="account">
                        <Link to="/account">MY ACCOUNT</Link>
                        <br />
                        <Link to="/account">MY ORDERS</Link>
                      </div>
                    </React.Fragment>
                  ) : null}

                  {user ? (
                    <React.Fragment>
                      <div className="row account-active mx-auto">
                        <Link to="/account">MY ACCOUNT</Link>
                        <br />
                        <Link to="/account">MY ORDERS</Link>
                      </div>
                      <hr />
                      <div className="authenticate-msg">
                        <p>You are logged in as {user.email}</p>
                      </div>
                      <div className="logout">
                        <Link
                          onClick={() => {
                            handleLogout();
                          }}
                        >
                          Disconnect
                        </Link>
                      </div>
                    </React.Fragment>
                  ) : null}
                </div>
              </li>
            </ul>
            <ul class="header__right__widget1">
              <li>
                <Link to="/search">
                  <BsSearch size="1.5em" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Headroom>
    </header>
  );
};

export default Navbar;

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
