import React, { useRef } from "react";

import "./Gallery.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { BsInstagram, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  ToLefttWhenVisible,
  ToRightWhenVisible,
} from "../../components/FramerMotionComp";

const galleryImage = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const CardImage = ({ image }) => {
  return (
    <div className="app__gallery-images_card flex__center">
      <img src={image} alt="image gallery" />
      <BsInstagram className="gallery__image-icon" />
    </div>
  );
};

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <ToRightWhenVisible>
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
            Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
          </p>
          <button className="custom__button">View more</button>
        </ToRightWhenVisible>
      </div>

      <div className="app__gallery-images_wrapper">
        <ToLefttWhenVisible>
          <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
              {galleryImage.map((image, index) => {
                return <CardImage key={index} image={image} />;
              })}
            </div>
            <div className="app__gallery-images_arrows">
              <BsArrowLeft
                className="gallery__arrow-icon"
                onClick={() => scroll("left")}
              />
              <BsArrowRight
                className="gallery__arrow-icon"
                onClick={() => scroll("right")}
              />
            </div>
          </div>
        </ToLefttWhenVisible>
      </div>
    </div>
  );
};

export default Gallery;
