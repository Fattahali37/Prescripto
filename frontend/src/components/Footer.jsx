import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div>
        {/* Left section */}
        <div>
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* center section */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p>GET IN TOUCH</p>
          <li>+1-212-7890</li>
          <li>prescripto@gmail.com</li>
        </div>
      </div>
        {/* Copyright text */}
      <div>
        <hr />
        <p>Copyright © 2024 FattahAli - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
