import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1"> The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet
        tortor dolor, a aliquet sem fringilla eget. Mauris ac ligula tellus.
        Integer pellentesque enim nec purus tristique euismod vel eu risus. Ut
        nec orci lacinia, scelerisque lacus quis, faucibus purus.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
