import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Pizzas/">Pizzas</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/Slicemasters">Slicemasters</Link>
      </li>
      <li>
        <Link to="/Order">Order</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
