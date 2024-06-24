import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='last'>
        <div className='text'>
          <p className='ppp'>Funiro.</p>
          <p className='pp'>400 University Drive Suite 200 Coral <br></br> Gables,<br></br> FL 33134 USA</p>
        </div>
        <div className='link33'>
          <p>Links</p>
          <nav className="nav11">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/shop">Shop</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li> 
          </nav>
        </div>
        <div className='link44'>
          <p>Help</p>
          <nav className="nav11">
            <li><Link className="link" to="/payment">Payment Option</Link></li>
            <li><Link className="link" to="/returns">Returns</Link></li>
            <li><Link className="link" to="/privacy">Privacy policies</Link></li> 
          </nav>
        </div>
        <div className='link45'>
            <p>Newsletter</p>
            <input type="text" placeholder='Enter Your Email Address' /> <button className='btnfoot'>SUBSCRIBE</button>
        </div>  
      </div> 
      <hr className='divider' />
      <p>2023 furino. All rights reverved</p>
    </div>
  )
}

export default Footer