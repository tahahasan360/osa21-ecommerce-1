/* src/Sidebar.js */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Profile
      </a>
      <a className="menu-item" href="/pizzas">
        Cart
      </a>
      <a className="menu-item" href="/desserts">
        Categories
      </a>
    </Menu>
  );
};