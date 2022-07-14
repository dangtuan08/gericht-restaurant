import React from "react";
import {
  ToLefttWhenVisible,
  ToRightWhenVisible,
} from "../../components/FramerMotionComp";

import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <ToRightWhenVisible>
        <SubHeading title="Chase the new flavaur" />
        <h1 className="app__header-h1">The key to Fine Dinning</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </ToRightWhenVisible>
    </div>

    <div className="app__wrapper_img">
      <ToLefttWhenVisible>
        <img src={images.welcome} alt="welcome" />
      </ToLefttWhenVisible>
    </div>
  </div>
);

export default Header;
