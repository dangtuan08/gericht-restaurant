import React from "react";

import "./MenuItem.css";

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-head_name">
          <p className="p__cormorant">{item.title}</p>
        </div>
        <div className="app__menuitem-dash"></div>
        <div className="app__menuitem-price">
          <p className="p__cormorant">{item.price}</p>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans">{item.tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
