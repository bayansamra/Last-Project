import React from "react";
import Facebook from "../../assets/images/Facebook.png";
import Youtube from "../../assets/images/Youtube.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import GrayApple from "../../assets/images/GrayApple.png";
import Android from "../../assets/images/Android.png";

import { Footer2, Icon, Icons, StyledFooter, Ul } from "./style";

const Footer = ({ form }) => {
  if (form) {
    return (
      <StyledFooter>
        <Footer2>&copy; 2015 - 2023 Upwork® Global Inc. • Privacy Policy</Footer2>
      </StyledFooter>
    );
  }
  return (
    <StyledFooter>
      <Ul>
        <div>
          <ul>
            <li>About Us</li>
            <li>Feedback</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Trust, Safety & Security</li>
            <li>Help & Support</li>
            <li>Freelance Foundation</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Accessibility</li>
            <li>Desktop App</li>
            <li>Cookie Policy</li>
            <li>Enterprise Solutions</li>
          </ul>
        </div>
      </Ul>
      <Icons>
        <div>
          Follow Us
          <Icon src={Facebook} alt="Facebook" />
          <Icon src={Twitter} alt="Twitter" />
          <Icon src={LinkedIn} alt="LinkedIn" />
          <Icon src={Instagram} alt="Instagram" />
          <Icon src={Youtube} alt="Youtube" />
        </div>
        <div>
          Mobile App
          <Icon src={GrayApple} alt="GrayApple" />
          <Icon src={Android} alt="Android" />
        </div>
      </Icons>
      <Footer2>&copy; 2015 - 2023 Freelance Platform® Global Inc.</Footer2>
    </StyledFooter>
  );
};


export default Footer;