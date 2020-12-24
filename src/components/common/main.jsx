import React, { Component } from "react";
import Navbar from "../navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ProductDeatil from "../product/product-detail";
import Wishlist from "../wishlist/wishlist";
import Cart from "../cart/cart";
import Login from "../auth/login";
import Register from "../auth/register";
import Products from "../product/product-page";
import Landing from "../landing/landing";
import { Provider } from "react-redux";
import Footer from "../footer/footer";
import NotFound from "../not-found/not-found";
import { loadUser } from "../action/auth";
import Reset from "../auth/reset";
import Search from "../search/search";
import Account from "../account/account";
import Addresses from "../account/addresses";
import Checkout from "../checkout/checkout";
import Alert from "./alert";

const Main = () => {
  const options = {
    timeout: 3000,
    position: "top right",
    offset: "5rem",
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <React.Fragment>
        <Router>
          <Navbar />

          <div id="page-wrap" style={{ marginTop: "2rem" }}>
            <Alert />

            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route
                path="/accounts/password-reset/:uidb64/:token"
                component={Reset}
              />

              <Route exact path="/account" component={Account} />
              <Route exact path="/account/addresses" component={Addresses} />
              {/* <Route
                  exact
                  path="/accounts/password-reset/:uidb64/:token"
                  // component={Wishlist}
                  render={(props) => <Reset {...props} />}
                /> */}
              {/* <Route component={NotFound} /> */}
              {/* <Route path="/not-found" component={NotFound} /> */}

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Shoes Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                exact
                path="/shoes/sneakers"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=SNEAKERS" />
                )}
              />
              <Route
                path="/shoes/running-shoes"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=RUNNING_SHOES" />
                )}
              />
              <Route
                path="/shoes/peep-toe-booties"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=PEEP_TOE_BOOTIES" />
                )}
              />
              <Route
                path="/shoes/sandles-and-slides"
                render={(props) => (
                  <Products
                    {...props}
                    data="shoes_catagory=SANDLES_AND_SLIDES"
                  />
                )}
              />
              <Route
                path="/shoes/workout-shoes"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=WORKOUT_SHOES" />
                )}
              />
              <Route
                path="/shoes/hiking-and-outdoor"
                render={(props) => (
                  <Products
                    {...props}
                    data="shoes_catagory=HIKING_AND_OUTDOOR"
                  />
                )}
              />
              <Route
                path="/shoes/golf"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=GOLF" />
                )}
              />
              <Route
                path="/shoes/tennis"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=TENNIS" />
                )}
              />
              <Route
                path="/shoes/volleyball"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=VOLLEYBALL" />
                )}
              />
              <Route
                path="/shoes/soccer"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=SOCCER" />
                )}
              />
              <Route
                path="/shoes/basketball"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=BASKETBALL" />
                )}
              />
              <Route
                path="/shoes/skateboarding"
                render={(props) => (
                  <Products {...props} data="shoes_catagory=SKATEBOARDING" />
                )}
              />
              <Route
                path="/shoes"
                render={(props) => (
                  <Products {...props} data="catagory=SHOES" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Bags Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/bags/purses"
                render={(props) => (
                  <Products {...props} data="bags_catagory=PURSES" />
                )}
              />
              <Route
                path="/bags/clutches"
                render={(props) => (
                  <Products {...props} data="bags_catagory=CLUTCHES" />
                )}
              />
              <Route
                path="/bags/shoulder-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=SHOULDER_BAGS" />
                )}
              />
              <Route
                path="/bags/rucksacks"
                render={(props) => (
                  <Products {...props} data="bags_catagory=RUCKSACKS" />
                )}
              />
              <Route
                path="/bags/cross-body-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=CROSS_BODY_BAGS" />
                )}
              />
              <Route
                path="/bags/beach-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=BEACH_BAGS" />
                )}
              />
              <Route
                exact
                path="/bags/bum-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=BUM_BAGS" />
                )}
              />
              <Route
                path="/bags/shopper-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=SHOPPER_BAGS" />
                )}
              />
              <Route
                path="/bags/tote-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=TOTE_BAGS" />
                )}
              />
              <Route
                path="/bags/travel-bags"
                render={(props) => (
                  <Products {...props} data="bags_catagory=TRAVEL_BAGS" />
                )}
              />
              <Route
                path="/bags"
                render={(props) => <Products {...props} data="catagory=BAGS" />}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Maternity Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/maternity-stuff/maternity-bra"
                render={(props) => (
                  <Products
                    {...props}
                    data="maternity_store_catagory=MATERNITY_BRA"
                  />
                )}
              />
              <Route
                path="/maternity-stuff/baby-shower-dress"
                render={(props) => (
                  <Products
                    {...props}
                    data="maternity_store_catagory=BABY_SHOWER_DRESS"
                  />
                )}
              />
              <Route
                path="/maternity-stuff/maternity-belts"
                render={(props) => (
                  <Products
                    {...props}
                    data="maternity_store_catagory=MATERNITY_BELTS"
                  />
                )}
              />
              <Route
                path="/maternity-stuff/maternity-dress"
                render={(props) => (
                  <Products
                    {...props}
                    data="maternity_store_catagory=MATERNITY_DRESS"
                  />
                )}
              />
              <Route
                path="/maternity-stuff/maternity-paints"
                render={(props) => (
                  <Products
                    {...props}
                    data="maternity_store_catagory=MATERNITY_PAINTS"
                  />
                )}
              />
              <Route
                path="/maternity-stuff"
                render={(props) => (
                  <Products {...props} data="catagory=MATERNITY_STORE" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Boutique Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/boutique/maxi-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=MAXI" />
                )}
              />
              <Route
                path="/boutique/babydoll-dress"
                render={(props) => (
                  <Products
                    {...props}
                    data="boutique_catagory=BABYDOLL_DRESS"
                  />
                )}
              />
              <Route
                path="/boutique/little-black-dress"
                render={(props) => (
                  <Products
                    {...props}
                    data="boutique_catagory=LITTLE_BLACK_DRESS"
                  />
                )}
              />
              <Route
                path="/boutique/floral-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=FLORAL_DRESS" />
                )}
              />
              <Route
                path="/boutique/casual-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=CASUAL_DRESS" />
                )}
              />
              <Route
                path="/boutique/midi-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=MIDI_DRESS" />
                )}
              />
              <Route
                path="/boutique/mrap-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=WRAP_DRESS" />
                )}
              />
              <Route
                path="/boutique/shift-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=SHIFT_DRESS" />
                )}
              />
              <Route
                path="/boutique/solid-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=SOLID_DRESS" />
                )}
              />
              <Route
                path="/boutique/t-shirt-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=T_SHIRT_DRESS" />
                )}
              />
              <Route
                path="/boutique/lace-dress"
                render={(props) => (
                  <Products {...props} data="boutique_catagory=LACE_DRESS" />
                )}
              />
              <Route
                path="/boutique/cocktail-dress"
                render={(props) => (
                  <Products
                    {...props}
                    data="boutique_catagory=COCKTAIL_DRESS"
                  />
                )}
              />
              <Route
                path="/boutique"
                render={(props) => (
                  <Products {...props} data="catagory=BOUTIQUE" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   UnderGarments Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/under-garments/bras"
                render={(props) => (
                  <Products {...props} data="under_garments_catagory=BRAS" />
                )}
              />
              <Route
                path="/under-garments/underwear"
                render={(props) => (
                  <Products
                    {...props}
                    data="under_garments_catagory=UNDERWEAR"
                  />
                )}
              />
              <Route
                path="/under-garments/panties"
                render={(props) => (
                  <Products {...props} data="under_garments_catagory=PANTIES" />
                )}
              />
              <Route
                path="/under-garments/lingerie"
                render={(props) => (
                  <Products
                    {...props}
                    data="under_garments_catagory=LINGERIE"
                  />
                )}
              />
              <Route
                path="/under-garments/sleep"
                render={(props) => (
                  <Products {...props} data="under_garments_catagory=SLEEP" />
                )}
              />
              <Route
                path="/under-garments/lounge"
                render={(props) => (
                  <Products {...props} data="under_garments_catagory=LOUNGE" />
                )}
              />
              <Route
                path="/under-garments"
                render={(props) => (
                  <Products {...props} data="catagory=UNDERGARMENTS" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Fitness Apparel Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/fitness-apparels/exercise-jackets"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=EXERCISE_JACKETS"
                  />
                )}
              />
              <Route
                path="/fitness-apparels/exercise-tops"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=EXERCISE_TOPS"
                  />
                )}
              />
              <Route
                path="/fitness-apparels/sports-bra"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=SPORTS_BRA"
                  />
                )}
              />
              <Route
                path="/fitness-apparels/swim-suits"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=SWIM_SUITS"
                  />
                )}
              />
              <Route
                path="/fitness-apparels/workout-short-panties"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=WORKOUT_SHORTS_PAINTS"
                  />
                )}
              />
              <Route
                path="/fitness-apparels/yoga-apparel"
                render={(props) => (
                  <Products
                    {...props}
                    data="fitness_apparel_catagory=YOGA_APPAREL"
                  />
                )}
              />
              <Route
                path="/fitness-apparels"
                render={(props) => (
                  <Products {...props} data="catagory=FITNESS_APPARELS" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Fitness Accessories Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/fitness-accessories"
                render={(props) => (
                  <Products {...props} data="catagory=FITNESS_ACCESSORIES" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Glasses Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/glasses/computer-glasses"
                render={(props) => (
                  <Products
                    {...props}
                    data="glasses_catagory=COMPUTER_GLASSES"
                  />
                )}
              />
              <Route
                path="/glasses/sunglasses"
                render={(props) => (
                  <Products {...props} data="glasses_catagory=SUNGLASSES" />
                )}
              />
              <Route
                path="/glasses/mazzucchelli-collection"
                render={(props) => (
                  <Products
                    {...props}
                    data="glasses_catagory=MUZZUCCHELLI_COLLECTION"
                  />
                )}
              />
              <Route
                path="/glasses/metal-collection"
                render={(props) => (
                  <Products
                    {...props}
                    data="glasses_catagory=METAL_COLLECTION"
                  />
                )}
              />
              <Route
                path="/glasses"
                render={(props) => (
                  <Products {...props} data="catagory=GLASSES" />
                )}
              />

              {
                /* /*/
                ///////////////////////////////////////// */
                /*   Jewellery Routes */
                /*////////////////////////////////////////// */
              }

              <Route
                path="/jewellery/rings"
                render={(props) => (
                  <Products {...props} data="jewellery_catagory=RINGS" />
                )}
              />
              <Route
                path="/jewellery/earrings"
                render={(props) => (
                  <Products {...props} data="jewellery_catagory=EARRINGS" />
                )}
              />
              <Route
                path="/jewellery/necklaces"
                render={(props) => (
                  <Products {...props} data="jewellery_catagory=NECKLACES" />
                )}
              />
              <Route
                path="/jewellery/bracelets"
                render={(props) => (
                  <Products {...props} data="jewellery_catagory=BRACELETS" />
                )}
              />
              <Route
                path="/jewellery"
                render={(props) => (
                  <Products {...props} data="catagory=JEWELLERY" />
                )}
              />

              {/************************
              PRODUCT  DETAIL
              *********************** */}

              <Route
                path="/product/:slug"
                render={(props) => <ProductDeatil {...props} />}
              />

              {/************************
              CART ROUTE
              *********************** */}

              <Route path="/cart" render={(props) => <Cart {...props} />} />

              {/************************
              SEARCH ROUTE
              *********************** */}

              <Route path="/search" render={(props) => <Search {...props} />} />

              {/************************
              WISHLIST ROUTE
              *********************** */}

              <Route
                path="/wishlist"
                render={(props) => <Wishlist {...props} />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    </AlertProvider>
  );
};

export default Main;
