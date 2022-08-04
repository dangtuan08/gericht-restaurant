import React from "react";
import FooterOverlay from "../../components/Footer/FooterOverlay";
import Newsletter from "../../components/Footer/Newsletter";
import SubHeading from "../../components/SubHeading/SubHeading";
// import images from "../../constants/images";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./Footer.css";
import { UpWhenVisible } from "../../components/FramerMotionComp";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    {/* <div className="app__footer_newsletter"> */}
      <UpWhenVisible>
        <Newsletter />
      </UpWhenVisible>
    {/* </div> */}

    <UpWhenVisible>
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h2 className="app__footer-headtext ">Contact Us</h2>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-344-1230</p>
        </div>
        <div className="app__footer-links_logo">
          {/* <img src={images.gericht} alt="logo" /> */}
          <h2
            className="headtext__cormorant"
            style={{ textTransform: "uppercase" }}
          >
            Gerícht
          </h2>
          <SubHeading title="The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others" />
          <div className="app__footer-links_logo-social">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h2 className="app__footer-headtext ">Working Hours</h2>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
    </UpWhenVisible>

    <UpWhenVisible>
      <div className="app__footer-copyright">
        <p>2021 Gerícht. All Rights reserved.</p>
      </div>
    </UpWhenVisible>
  </div>
);

export default Footer;
