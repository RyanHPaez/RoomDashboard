import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  const { data } = props;
  return (
    <Menu>
      <a className="menu-item" href="/Home">
        About us
      </a>
      <a className="menu-item" href="/Home">
        Pricing
      </a>
      <a className="menu-item" href="/Home">
        Contact
      </a>
    </Menu>
  );
};
