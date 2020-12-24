import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getProduct,
  handleWish,
  handleCartAddRemoveAction,
} from "../action/product";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";
import "../../css/product/test.css";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Products = (props) => {
  const width = useWindowWidth();
  const height = useWindowHeight();
  const [user, setUser] = useState();
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const test = [1, 2, 3, 4, 5, 6];

  const { products, isLoading, isAuthenticated, userId } = useSelector(
    (state) => ({
      products: state.product.products,
      isLoading: state.product.isLoading,
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(props.data, userId));
  }, []);
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
  const handleCartAddRemove = (item, index) => {
    let new1 = item;
    if (new1.in_cart === false) {
      new1.in_cart = true;

      dispatch(handleCartAddRemoveAction(new1, index));
    } else {
      new1.in_cart = false;
      dispatch(handleCartAddRemoveAction(new1, index));
    }
  };
  return (
    <React.Fragment>
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
              {products &&
                products.map((item, index) => (
                  <div className="item col-lg-6">
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
                    <Link>
                      <div
                        className="product-des-right abs-right"
                        onClick={
                          isAuthenticated
                            ? () => handleCartAddRemove(item, index)
                            : ""
                        }
                        onMouseEnter={() => setIsShownRight(true)}
                        onMouseLeave={() => setIsShownRight(false)}
                      >
                        {item.in_cart ? (
                          <React.Fragment>
                            {isAuthenticated ? (
                              <h4>Remove from cart</h4>
                            ) : (
                              <h4>Login to romeve from Cart</h4>
                            )}

                            <MdShoppingCart size="1.3rem" />
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {isAuthenticated ? (
                              <h4>Add to cart</h4>
                            ) : (
                              <h4>Login for Adding to Cart</h4>
                            )}

                            <MdAddShoppingCart size="1.3rem" />
                          </React.Fragment>
                        )}
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
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;

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
function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleHeight = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  });
  return height;
}
