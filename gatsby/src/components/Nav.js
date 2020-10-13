import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pizzas/">Pizzas</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slicemasters</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
