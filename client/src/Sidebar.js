/* src/Sidebar.js */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        <img src="https://img.icons8.com/ultraviolet/20/000000/home--v1.png" alt="Home Icon"/>
        Home
      </a>
      <a className="menu-item" href="/profile">
        <img src="https://img.icons8.com/ultraviolet/20/000000/test-account.png" alt="Profile Icon"/>  
        Profile
      </a>
      <a className="menu-item" href="/cart">
      <img src="https://img.icons8.com/ultraviolet/20/000000/shopping-cart.png" alt="Shopping Cart Icon"/>
        Cart
      </a>
      <a className="menu-item" href="/categories">
      <img src="https://img.icons8.com/ultraviolet/20/000000/shirt.png" alt="Categories Icon"/>
        Categories
      </a>
    </Menu>
  );
};