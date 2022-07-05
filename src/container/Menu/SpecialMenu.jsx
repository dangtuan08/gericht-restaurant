import React from "react";
import { MenuItem, SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={"Menu That Fits Your Palatte"} />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex-center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu-items">
          {data.wines.map((wine, index) => {
            return <MenuItem item={wine} />;
          })}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_wine flex-center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu-items">
          {data.cocktails.map((cocktails, index) => {
            return <MenuItem item={cocktails} />;
          })}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-viewmore">
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
