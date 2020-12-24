import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { handleWish } from "../action/product";
import { searchProduct, clearSearchProduct } from "../action/product";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../../css/search/search.css";

const Search = () => {
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const [searchText, setsearchText] = useState();
  const [searchHeadingText, setSearchHeadingText] = useState();

  const { searchItems, isLoading, isAuthenticated } = useSelector(
    (state) => ({
      searchItems: state.product.searchItems,
      isLoading: state.product.isLoading,
      isAuthenticated: state.auth.user,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      console.log(searchText);
      dispatch(clearSearchProduct());
      return false;
    }
    if (searchText === undefined) {
      console.log(searchText);
      dispatch(clearSearchProduct());
      return false;
    } else {
      console.log(searchText);
      dispatch(searchProduct(searchText));
      setSearchHeadingText(searchText);
    }
  };
  const handleWishlist = (item, index) => {
    let new1 = item;
    if (new1.wishlisted === false) {
      new1.wishlisted = true;

      dispatch(handleWish(new1, index));
    } else {
      new1.wishlisted = false;
      dispatch(handleWish(new1, index));
    }
  };

  return (
    <React.Fragment>
      <header className="search-header">
        <div className="header-container">
          <h2 className="header-text">SEARCH FOR PRODUCTS ON OUR SITE</h2>
          <div class="form-container">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div class="inner-form">
                <div class="input-field first-wrap">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </div>
                  <input
                    id="search"
                    type="text"
                    value={searchText || ""}
                    onChange={(e) => handleChange(e)}
                    placeholder="What are you looking for?"
                  />
                </div>
                <div class="input-field second-wrap">
                  <button
                    class="btn-search"
                    type="button"
                    onClick={(e) => handleSubmit(e)}
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className="search-items-found">
        <div className="container-fluid">
          <div className="item-container">
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
              <div className="row">
                {searchItems && searchItems.length > 0 ? (
                  <div className="container search-items-header mr-auto">
                    <h3>{`YOUR SEARCH FOR "${searchHeadingText}" REVEALED THE FOLLOWING:`}</h3>
                  </div>
                ) : null}

                {searchItems &&
                  searchItems.map((item, index) => (
                    <div className="item grid-item col-sm-6 col-md-4 col-lg-3 col5 sca-qv-image">
                      <a href={`/product/${item.slug}`}>
                        <img src={item.img[0].img} alt={item.title} />
                      </a>

                      <Link>
                        <div
                          className="product-des abs-left"
                          onClick={
                            isAuthenticated
                              ? () => handleWishlist(item, index)
                              : ""
                          }
                          onMouseEnter={() => setIsShownLeft(true)}
                          onMouseLeave={() => setIsShownLeft(false)}
                        >
                          {/* {isShownLeft ? (
                      <React.Fragment>
                        <FaHeart size="1.3rem" />
                        <h4>Add to Wishlist</h4>
                      </React.Fragment>
                    ) : ( */}
                          {/* <React.Fragment> */}
                          {item.wishlisted ? (
                            <React.Fragment>
                              <FaHeart size="1.3rem" />
                              {isAuthenticated ? (
                                <h4>Remove from Wishlist</h4>
                              ) : (
                                <h4>Login to Remove from Wishlist</h4>
                              )}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <FaRegHeart size="1.3rem" />
                              {isAuthenticated ? (
                                <h4>Add to Wishlist</h4>
                              ) : (
                                <h4>Login to Add this to Wishlist</h4>
                              )}
                            </React.Fragment>
                          )}

                          {/* </React.Fragment> */}
                          {/* )} */}
                        </div>
                      </Link>

                      <div className="bottom-div">
                        <Link className="product-title">{item.title}</Link>
                        <div class="product__details__price">
                          $ {item.price_new} <span>$ {item.price_old}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                {localStorage.getItem("search-status") === "empty" ? (
                  <div className="container search-items-header mr-auto">
                    <h3>No result Found....!!!!</h3>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
