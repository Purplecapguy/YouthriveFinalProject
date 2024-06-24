import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from "../logos/Meubel.svg"
import Trophy from "../logos/trophy.svg"
import Warrantee from "../logos/warrantee.svg"
import Hand from "../logos/hand.svg"
import Call from "../logos/call.svg"
import Dasharrow from "../logos/dasharrow.svg"

const ProductComparison = () => {
  return (
    <div>
        <section className='contactsection1'>
            <img src={MainLogo} alt="" />
            <h1>Shop</h1>
            <div className='linkdivider'>
                <Link className='linkage' to="/">Home</Link>
                <div>
                  <img src={Dasharrow} alt="" />
                </div>
                <Link className='linkage' to="/shop">Shop</Link>
            </div>
        </section>
        <section className='contactsection3'>
            <div className='icontext'>
                <div className='icontext12'>
                    <img src={Trophy} alt="" />
                    <div>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='icontext12'>
                    <img src={Warrantee} alt="" />
                    <div>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                    </div>
                </div>
                <div className='icontext12'>
                    <img src={Hand} alt="" />
                    <div>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                    </div>
                </div>  
                <div className='icontext12'>
                    <img src={Call} alt="" />
                    <div>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default ProductComparison