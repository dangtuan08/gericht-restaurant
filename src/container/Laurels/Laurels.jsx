import React from "react";
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
  <div className="app__bg app__wrapper section__padding app__laurels">
    <div className="app__laurels_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((item, index) => {
          return <Adward key={index} adward={item} />;
        })}
      </div>
    </div>
    <div className="app__laurels_img">
      <img src={images.laurels} alt="laurels image" />
    </div>
  </div>
);

export default Laurels;
