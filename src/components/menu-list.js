import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../css/menu1.css";
import { a } from "react-router-dom";

const ShopProductCatogries = () => {
  const width = useWindowWidth();
  useEffect(() => {});
  useEffect(() => {
    $(".collapse").on("shown.bs.collapse", function () {
      $(this).prev().addClass("active");
    });

    $(".collapse").on("hidden.bs.collapse", function () {
      $(this).prev().removeClass("active");
    });
  });

  return (
    <React.Fragment>
      <div class="shop__sidebar">
        <div class="sidebar__categories">
          <div class="section-title1">
            <h4>Products Categories</h4>
          </div>
          <div class="categories__accordion">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseOne">
                    Shoes
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/shoes">All</a>
                      </li>
                      <li>
                        <a href="/shoes/sneakers">Sneakers</a>
                      </li>
                      <li>
                        <a href="/shoes/running-shoes">Running-Shoes</a>
                      </li>
                      <li>
                        <a href="/shoes/peep-toe-booties">Peep-Toe-Booties</a>
                      </li>
                      <li>
                        <a href="/shoes/sandles-and-slides">
                          Sandles-And-Slides
                        </a>
                      </li>
                      <li>
                        <a href="/shoes/workout-shoes">Workout-Shoes</a>
                      </li>
                      <li>
                        <a href="/shoes/hiking-and-outdoor">
                          Hiking-And-Outdoor
                        </a>
                      </li>
                      <li>
                        <a href="/shoes/golf">Golf</a>
                      </li>
                      <li>
                        <a href="/shoes/tennis">Tennis</a>
                      </li>
                      <li>
                        <a href="/shoes/volleyball">VolleyBall</a>
                      </li>
                      <li>
                        <a href="/shoes/soccer">Soccer</a>
                      </li>
                      <li>
                        <a href="/shoes/basketball">BasketBall</a>
                      </li>
                      <li>
                        <a href="/shoes/skateboarding">SkateBoarding</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseSix">
                    Bags
                  </a>
                </div>
                <div
                  id="collapseSix"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/bags">All</a>
                      </li>
                      <li>
                        <a href="/bags/purses">Purses</a>
                      </li>
                      <li>
                        <a href="/bags/clutches">Clutches</a>
                      </li>
                      <li>
                        <a href="/bags/shoulder-bags">Shoulder-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/rucksacks">Rucksacks</a>
                      </li>
                      <li>
                        <a href="/bags/cross-body-bags">Cross-Body-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/beach-bags">Beach-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/bum-bags">Bum-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/shopper-bags">Shopper-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/tote-bags">Tote-Bags</a>
                      </li>
                      <li>
                        <a href="/bags/travel-bags">Travel-Bags</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseFour">
                    Boutique
                  </a>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/boutique">All</a>
                      </li>
                      <li>
                        <a href="/boutique/maxi-dress">Maxi-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/babydoll-dress">Babydoll-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/little-black-dress">
                          Little-Black-Dress
                        </a>
                      </li>
                      <li>
                        <a href="/boutique/floral-dress">Floral-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/casual-dress">Casual-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/midi-dress">Midi-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/mrap-dress">Wrap-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/shift-dress">Shift-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/solid-dress">Solid-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/t-shirt-dress">T-Shirt-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/lace-dress">Lace-Dress</a>
                      </li>
                      <li>
                        <a href="/boutique/cocktail-dress">Cocktail-Dress</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseFive">
                    Glasses
                  </a>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/glasses">All</a>
                      </li>
                      <li>
                        <a href="/glasses/computer-glasses">Computer Glasses</a>
                      </li>
                      <li>
                        <a href="/glasses/sunglasses">Sunglasses</a>
                      </li>
                      <li>
                        <a href="/glasses/mazzucchelli-collection">
                          Mazzucchelli Collection
                        </a>
                      </li>
                      <li>
                        <a href="/glasses/metal-collection">Metal Collection</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-heading">
                  <a href="/fitness-accessories" className="single-a">
                    Fitness Accessories
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseNine">
                    Fitness Apparels
                  </a>
                </div>
                <div
                  id="collapseNine"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/fitness-apparels">All</a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/exercise-jackets">
                          Exersice-Jackets
                        </a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/exercise-tops">
                          Exersice-Tops
                        </a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/sports-bra">Sports-Bra</a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/swim-suits">Swim-Suits</a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/workout-short-panties">
                          Workout-Shorts-Paints
                        </a>
                      </li>
                      <li>
                        <a href="/fitness-apparels/yoga-apparel">
                          Yoga-Apparel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseElev">
                    Maternity Store
                  </a>
                </div>
                <div
                  id="collapseElev"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/maternity-stuff">All</a>
                      </li>
                      <li>
                        <a href="/maternity-stuff/maternity-bra">
                          Maternity-Bra
                        </a>
                      </li>
                      <li>
                        <a href="Baby-Shower-Dress">Baby-Shower-Dress</a>
                      </li>
                      <li>
                        <a href="/maternity-stuff/baby-shower-dress">
                          Maternity-Belts
                        </a>
                      </li>
                      <li>
                        <a href="/maternity-stuff/maternity-belts">
                          Maternity-Dress
                        </a>
                      </li>
                      <li>
                        <a href="/maternity-stuff/maternity-dress">
                          Maternity-Paints
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseTen">
                    Under-Garments
                  </a>
                </div>
                <div
                  id="collapseTen"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/under-garments">All</a>
                      </li>
                      <li>
                        <a href="/under-garments/bras">Bras</a>
                      </li>
                      <li>
                        <a href="/under-garments/underwear">Underwear</a>
                      </li>
                      <li>
                        <a href="/under-garments/panties">Panties</a>
                      </li>
                      <li>
                        <a href="/under-garments/lingerie">Lingerie</a>
                      </li>
                      <li>
                        <a href="/under-garments/sleep">Sleep</a>
                      </li>
                      <li>
                        <a href="/under-garments/lounge">Lounge</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-heading">
                  <a data-toggle="collapse" data-target="#collapseTwl">
                    Jewellery
                  </a>
                </div>
                <div
                  id="collapseTwl"
                  class="collapse"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        <a href="/jewellery">All</a>
                      </li>
                      <li>
                        <a href="/jewellery/rings">Rings</a>
                      </li>
                      <li>
                        <a href="/jewellery/earrings">Earrings</a>
                      </li>
                      <li>
                        <a href="/jewellery/necklaces">Necklaces</a>
                      </li>
                      <li>
                        <a href="/jewellery/bracelets">Bracelets</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {width < 700 ? (
        <div class="shop__sidebar">
          <div class="sidebar__categories">
            <div class="section-title1">
              <h4>Need Help</h4>
            </div>
            <div class="categories__accordion">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-heading">
                    <a data-toggle="collapse" data-target="#collapseThr">
                      Shop Guide
                    </a>
                  </div>
                  <div
                    id="collapseThr"
                    class="collapse"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="/Order-Process">Order Process</a>
                        </li>
                        <li>
                          <a href="Complaint-Form">Feedback/Complaint Form</a>
                        </li>
                        <li>
                          <a href="Privacy">Privacy</a>
                        </li>
                        <li>
                          <a href="Delivery">Delivery</a>
                        </li>
                        <li>
                          <a href="Returns">Returns</a>
                        </li>
                        <li>
                          <a href="terms-and-conditions">
                            Terms {"&"} Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-heading">
                    <a data-toggle="collapse" data-target="#collapseFrt">
                      About Brand 01
                    </a>
                  </div>
                  <div
                    id="collapseFrt"
                    class="collapse"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="about-us">About us</a>
                        </li>
                        <li>
                          <a href="stores">Stores</a>
                        </li>
                        <li>
                          <a href="faqs">FAQ's</a>
                        </li>
                        <li>
                          <a href="news">News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ShopProductCatogries;

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
