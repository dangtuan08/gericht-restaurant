import React from "react";
import {
  ToLefttWhenVisible,
  ToRightWhenVisible,
} from "../../components/FramerMotionComp";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";
import "./Laurels.css";

const Adward = ({ adward }) => {
  return (
    <div className="app__laurels_award-card">
      <img src={adward.imgUrl} alt="award img" />
      <div className="app__laurels_award-card_content">
        <p className="p__cormorant">{adward.title}</p>
        <p className="p__opensans">{adward.subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div
    className="app__bg app__wrapper section__padding app__laurels"
    id="awards"
  >
    <div className="app__laurels_info">
      <ToRightWhenVisible>
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((item, index) => {
            return <Adward key={index} adward={item} />;
          })}
        </div>
      </ToRightWhenVisible>
    </div>

    <div className="app__laurels_img">
      <ToLefttWhenVisible>
        <img src={images.laurels} alt="laurels image" />
      </ToLefttWhenVisible>
    </div>
  </div>
);

export default Laurels;
