import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useSelector, shallowEqual } from "react-redux";
import "../css/menu1.css";
import "../css/menu.css";
import "../css/navbar2.css";
import { FaRegHeart } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsBag, BsSearch } from "react-icons/bs";
import ShopProductCatogries from "./menu-list";
import Pic from "../pics/Logo1.png";

const Menu1 = (props) => {
  const { icon_count, isAuthenticated } = useSelector(
    (state) => ({
      user: state.auth.user,
      icon_count: state.navbar1.icon_count,
      isLoading: state.navbar1.isLoading,
      isAuthenticated: state.auth.isAuthenticated,
      cartItems: state.cart.cartItems,
    }),
    shallowEqual
  );
  useEffect(() => {});

  return (
    // Pass on our props

    <React.Fragment>
      <Menu {...props}>
        <div class="header__logo1" style={{ textAlign: "center" }}>
          <a href="/">
            <img src={Pic} alt="" />
          </a>
        </div>
        <br />
        <div class="header__right1 mr-sm-2">
          <ul class="header__right__widget1">
            <li>
              <a href="/wishlist">
                <FaRegHeart />
                {isAuthenticated ? (
                  icon_count.wishlist > 0 ? (
                    <React.Fragment>
                      <div class="tip">{icon_count.wishlist}</div>
                    </React.Fragment>
                  ) : null
                ) : null}
              </a>
            </li>
            <li>
              <a href="/cart">
                <BsBag />
                {isAuthenticated ? (
                  icon_count.cart > 0 ? (
                    <React.Fragment>
                      <div class="tip">{icon_count.cart}</div>
                    </React.Fragment>
                  ) : null
                ) : null}
              </a>
            </li>
            <li>
              <a href="/account">
                <BiUser />
              </a>
            </li>
            <li className="search-switch">
              <a href="/search">
                <BsSearch />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ShopProductCatogries />
        </div>
      </Menu>
    </React.Fragment>
  );
};
export default Menu1;
