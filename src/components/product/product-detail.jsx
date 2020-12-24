import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getProductDetail,
  handleWish,
  handleCartAddRemoveActionDetail,
} from "../action/product";

import { Carousel } from "react-responsive-carousel";

import "../../css/product/detail.css";
import Loader from "react-loader-spinner";
import { Markup } from "interweave";
import { Link } from "react-router-dom";

const ProductDeatil = (props) => {
  const [val, setVal] = useState(1);
  const [switches, setSwitches] = useState();
  const [selectedOption, setSelectedOption] = useState([]);
  const [addrtype, setAddrtype] = useState(["6", "7", "8"]);
  const Add = addrtype.map((Add) => Add);
  const { products, isLoading, isAuthenticated } = useSelector(
    (state) => ({
      products: state.product.products,
      isLoading: state.product.isLoading,
      isAuthenticated: state.auth.user,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail(props.match.params.slug));
  }, []);
  const handleAddrTypeChange = (e) => {
    console.clear();
    console.log(addrtype[e.target.value]);
    setSelectedOption(addrtype[e.target.value]);
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
  const handleCartAddRemove = (item, index) => {
    let new1 = item;
    let quantity = val;
    if (new1.in_cart === false) {
      new1.in_cart = true;

      dispatch(handleCartAddRemoveActionDetail(new1, index, quantity));
    } else {
      new1.in_cart = false;
      dispatch(handleCartAddRemoveActionDetail(new1, index, quantity));
    }
  };

  // useEffect(() => setSwitches(["6", "7", "8", "9"]));

  return (
    <React.Fragment>
      <div class="showcase-grid">
        <div class="container">
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
              <div class="col-lg-7 showcase">
                <div class="carousel">
                  {products
                    ? products.map((item) => {
                        return (
                          <Carousel
                            autoPlay
                            showArrows={true}
                            showStatus={false}
                            showIndicators={false}
                            infiniteLoop={true}
                          >
                            {/* <React.Fragment> */}
                            {item.img.map((image) => (
                              <div>
                                <img src={image.img} alt="" />
                              </div>
                            ))}
                            {/* </React.Fragment> */}
                          </Carousel>
                        );
                      })
                    : null}
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-lg-5 showcase">
                <div class="showcase-rt-top">
                  <div class="pull-left shoe-name">
                    {products
                      ? products.map((item) => {
                          return (
                            <div>
                              <h3>{item.title}</h3>
                              <p>{item.catagory}</p>
                              <p>{item.color}</p>

                              <div class="product__details__price">
                                $ {item.price_new}{" "}
                                <span>$ {item.price_old}</span>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>

                  <div class="clearfix"></div>
                </div>
                <hr class="featurette-divider" />
                <div class="shocase-rt-bot">
                  <div class="float-qty-chart">
                    <div class="product__details__button">
                      <ul>
                        <li class="qty">
                          <h3>Size Chart</h3>
                          {products
                            ? products.map((item) => {
                                return (
                                  <select
                                    onChange={(e) => handleAddrTypeChange(e)}
                                    class="form-control siz-chrt"
                                  >
                                    {item.sizes.map((size, key) => (
                                      <option key={key} value={key}>
                                        {size.size}
                                      </option>
                                    ))}
                                  </select>
                                );
                              })
                            : null}
                        </li>
                        <li class="qty">
                          <div class="quantity">
                            <h3>Quantity</h3>
                            <div class="pro-qty">
                              <span
                                class="dec qtybtn"
                                onClick={(e) =>
                                  setVal(
                                    val > parseInt(0)
                                      ? parseInt(val - 1)
                                      : parseInt(0)
                                  )
                                }
                              >
                                -
                              </span>
                              <input
                                type="text"
                                value={val}
                                onChange={(e) =>
                                  setVal(
                                    e.target.value === ""
                                      ? parseInt(0)
                                      : parseInt(e.target.value)
                                  )
                                }
                              />
                              <span
                                class="inc qtybtn"
                                onClick={() => setVal(parseInt(val + 1))}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <ul>
                    {products
                      ? products.map((item, index) => {
                          return (
                            <li class="ad-2-crt simpleCart_shelfItem">
                              {item.in_cart ? (
                                <Link
                                  class="btn item_add"
                                  role="button"
                                  onClick={
                                    isAuthenticated
                                      ? () => handleCartAddRemove(item, index)
                                      : ""
                                  }
                                >
                                  Remove from Cart
                                </Link>
                              ) : (
                                <Link
                                  class="btn item_add"
                                  role="button"
                                  onClick={
                                    isAuthenticated
                                      ? () => handleCartAddRemove(item, index)
                                      : ""
                                  }
                                >
                                  Add To Cart
                                </Link>
                              )}

                              {item.wishlisted ? (
                                <Link
                                  class="btn item_add"
                                  role="button"
                                  onClick={
                                    isAuthenticated
                                      ? () => handleWishlist(item, index)
                                      : ""
                                  }
                                >
                                  Remove from Wishlist
                                </Link>
                              ) : (
                                <Link
                                  class="btn item_add"
                                  role="button"
                                  onClick={
                                    isAuthenticated
                                      ? () => handleWishlist(item, index)
                                      : ""
                                  }
                                >
                                  Add To Wishlist
                                </Link>
                              )}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
                <div class="showcase-last">
                  <h3>product details</h3>
                  {products
                    ? products.map((item) => {
                        return (
                          <React.Fragment>
                            <Markup content={item.information[0].description} />

                            {/* <ul>
                              <li>
                                Internal bootie wraps your foot for a sock-like
                                fit
                              </li>
                              <li>
                                Unique eyestays work with the Flywire cables to
                                create an even better glove-like fit
                              </li>
                              <li>
                                Waffle outsole for durability and multi-surface
                                traction
                              </li>
                              <li>
                                Sculpted Cushlon midsole combines plush
                                cushioning and springy resilience for impact
                                protection
                              </li>
                              <li>
                                Midsole flex grooves for greater forefoot
                                flexibility
                              </li>
                            </ul> */}
                          </React.Fragment>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          )}

          <div class="clearfix"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDeatil;
