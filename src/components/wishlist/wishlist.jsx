import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getWishlist, removeFromWishlist } from "../action/wishlist";
import "../../css/wishlist/wishlist.css";
import { VscChromeClose } from "react-icons/vsc";
import Loader from "react-loader-spinner";
import { Link, Redirect } from "react-router-dom";
import Empty from "./empty";

const Wishlist = () => {
  const { wishlistItems, isLoading, isAuthenticated, token } = useSelector(
    (state) => ({
      wishlistItems: state.wishlist.wishlistItems,
      isLoading: state.wishlist.isLoading,
      isAuthenticated: state.auth.user,
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

  const [price, setPrice] = useState(100000);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlist());
  }, []);
  const handleRemove = (item, id, index) => {
    const new1 = wishlistItems.filter((item) => item.id !== id);
    dispatch(removeFromWishlist(id, new1));
  };

  return (
    <React.Fragment>
      <div className="container-fluid" style={{ marginBottom: "5px" }}>
        <header className="page-header">
          <h1>
            <span>Wish List</span>
          </h1>
        </header>
      </div>
      <div className="container">
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
          <div className="wishlist-wrapper">
            {wishlistItems.length > 0 ? (
              <div className="wishlist-product">
                <div className="wrapper-overflow">
                  <div className="wishlist-header t-header">
                    <div className="row">
                      <h4 className="column col-img col-title">Image</h4>
                      <h4 className="column col-prod col-title">Product</h4>
                      <h4 className="column col-price col-title">Price</h4>
                      <h4 className="column col-add col-title">Add</h4>
                      <h4 className="column col-remove col-title">Remove</h4>
                    </div>
                  </div>

                  <div className="wishlist-content t-body">
                    {wishlistItems
                      ? wishlistItems.map((item, index) => (
                          <div className="grid-item">
                            <div className="row">
                              <div className="item-img">
                                {item.product.img && (
                                  <img
                                    src={item.product.img[0].img}
                                    alt={item.product.title}
                                  />
                                )}
                              </div>
                              <div className="item-name">
                                <a href="/">{item.product.title}</a>
                              </div>
                              <div className="item-price">
                                <span href="/">
                                  USD{"  "}
                                  {item.product.price_new.toLocaleString(
                                    undefined,
                                    {
                                      maximumFractionDigits: 2,
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="item-add">
                                <Link
                                  to={`/product/${item.product.slug}`}
                                  className="btn"
                                >
                                  Select Option
                                </Link>
                              </div>
                              <div
                                className="item-remove"
                                onClick={() =>
                                  handleRemove(item, item.id, index)
                                }
                              >
                                <span>
                                  <VscChromeClose size="1.5rem" />
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Empty data="Wishlist" />
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Wishlist;
