import React from "react";

import "./AboutUs.css";
import images from "../../constants/images";
import {
  ToLefttWhenVisible,
  ToRightWhenVisible,
  UpWhenVisible,
} from "../../components/FramerMotionComp";
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <ToRightWhenVisible>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button">Know More</button>
        </ToRightWhenVisible>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <UpWhenVisible>
          <img src={images.knife} alt="knife" />
        </UpWhenVisible>
      </div>

      <div className="app__aboutus-content_history">
        <ToLefttWhenVisible>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>
          <button className="custom__button">Know More</button>
        </ToLefttWhenVisible>
      </div>
    </div>
  </div>
);

export default AboutUs;
