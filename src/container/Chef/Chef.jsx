import React from "react";
import { UpWhenVisible } from "../../components/FramerMotionComp";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <UpWhenVisible>
        <img src={images.chef} alt="chef" />
      </UpWhenVisible>
    </div>
    <div className="app__wrapper_info">
      <UpWhenVisible>
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              . Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p className="app__chef-sign_name">Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </UpWhenVisible>
    </div>
  </div>
);

export default Chef;
