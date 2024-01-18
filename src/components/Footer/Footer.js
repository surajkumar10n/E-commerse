import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUpper">
        <div className="AboutUs">
          <h3>About Us</h3>
          <p>This is a E-commerse Website designed in React by Suraj kumar.</p>
          <div className="AboutUs-icon">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
        <div className="ContactUs">
          <h3>Contact Us</h3>
          <i class="fa-solid fa-mobile" >  </i>
          <span>  6204374070</span>
          <br></br>
          <i class="fa-solid fa-envelope"></i>
          <span> surajkumar98n@gmail.com</span>
          <br></br>
          <i class="fa-solid fa-location-dot"></i>
          <span> Noida Sector 15 India</span>
        </div>
        <div className="OurServices">
          <h3>Our Services</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
        </div>
        <div className="QuickLink">
          <h3>Quick Link</h3>
          <p>Hire an expert</p>
          <p>Contact</p>
          <p>FAQ</p>
        </div>
      </div>
      {/* <hr style={{color:"red"}}></hr> */}
      <div className="footerLower">
        <p>
          Copyright &#169;2024 All rights reserved | Website is developed by{" "}
          <span>Suraj kumar</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
