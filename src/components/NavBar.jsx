import React from "react";
import { Link } from "react-router-dom";
import logo from '../logos/logo.svg';
import logo1 from '../logos/Vector.svg';
import logo2 from '../logos/search.svg';
import logo3 from '../logos/heart.svg';
import logo4 from '../logos/cart-outlined.svg';
import './NavBar.css'


const Navbar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={logo} />
        <nav className="nav1">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/shop">Shop</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/contact">Contact</Link></li>
          <li><Link className="link" to="/blogs">Blogs</Link></li>
        </nav>
        <div className="navicon">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <Link to="/cart"><img src={logo4} /></Link>
        </div>
    </div>
  )
}

export default Navbar