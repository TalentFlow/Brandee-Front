import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import "../../css/footer/footer.css";

const Footer = () => {
  const [newsletter, setNewsletter] = useState();
  const handleChange = (e) => {
    setNewsletter(e.target.value);
  };
  return (
    <React.Fragment>
      <footer className="site-footer footer-default">
        <div className="row upper-row">
          <div className="left-section">
            <FaLock />
            <span> Secure Online Payment</span>
          </div>
          {/* <div className="row"> */}
          <div className="shop-guide mx-auto">
            <h6 className="links-title">Shop Guide</h6>
            <ul>
              <li>
                <a href="#">Order Process</a>
              </li>
              <li>
                <a href="#">Feedback/Complaint Form</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="shop-guide ml-auto">
            <h6 className="links-title">About Brand 01</h6>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
        <hr />
        {/* <div className="row middle-row">
          
        </div>
        <hr /> */}
        <div className="row bottom-row">
          <div className="copyright">
            <span> © </span>
            {new Date().getFullYear()}
            <span> Brand 01</span>
          </div>
          <div className="bottom-links">
            <a href="/">Terms and conditions of purchase</a>
            <a href="/">Delivery</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
