import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getHomeImages } from "../action/landing";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import "../../css/landing/landing.css";
import axios from "axios";

const Landing = () => {
  // const [items, setItems] = useState([]);
  // const homeImages = useSelector((state) => state.landing.homeImages);
  const { homeImages, isLoading } = useSelector(
    (state) => ({
      homeImages: state.landing.homeImages,
      isLoading: state.landing.isLoading,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  let history = useHistory();

  // useEffect(async () => {
  //   const var1 = await axios
  //     .get("http://localhost:8000/accounts/users/")
  //     .then((res) => {
  //       setItems(res.data);
  //     }, console.log("clicked"))
  //     .catch((err) => console.log(err));
  //   console.log(var1);
  // });
  useEffect(() => {
    console.log(history);
    dispatch(getHomeImages());
  }, []);

  return (
    <React.Fragment>
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
        <div className="row row-main">
          {homeImages.map((item) => {
            return item.img_catagory === "BOUTIQUE" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Boutique</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "FITNESS_APPARELS" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Fitness Apparels</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "FITNESS_ACCESSORIES" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Fitness Accessories</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "SHOES" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Shoes</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "MATERNITY_STORE" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Maternity Store</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "BAGS" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Bags</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "JEWELLERY" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Jewellery</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
          {homeImages.map((item) => {
            return item.img_catagory === "UNDERGARMENTS" ? (
              <div className="col-12 no-padding">
                <div className="landing-item">
                  <div className="image-contain">
                    <div className="lazyloaded">
                      <img src={item.img} alt="" />
                      <div className="img-content abs-center">
                        <a href="/" className="slide-button btn">
                          <span>Undergarments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      )}
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     homeImages: state.landing.homeImages,
//   };
// };
// const mapDispatchToProps = { getHomeImages };

export default Landing;
