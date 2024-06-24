import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from "../../logos/Meubel.svg"
import Dasharrow from "../../logos/dasharrow.svg"
import Trophy from "../../logos/trophy.svg"
import Warrantee from "../../logos/warrantee.svg"
import Hand from "../../logos/hand.svg"
import Call from "../../logos/call.svg"
import shopping2 from "../../logos/shopping2.svg"
import { Image } from 'cloudinary-react'
import { CartImages, cloudName } from '../../cloudImages/Cloud'

const Cart = () => {
    return (
        <div>
            <section className='contactsection1'>
                <img src={MainLogo} alt="" />
                <h1>Cart</h1>
                <div className='linkdivider'>
                    <Link className='linkage' to="/">Home</Link>
                    <div>
                        <img src={Dasharrow} alt="" />
                    </div>
                    <Link className='linkage' to="/shop">Shop</Link>
                </div>
            </section>
            <section>
                <aside>
                    <h2>Cart Totals</h2>
                    <p>Subtotal<span>Rs. 250,000.00</span></p>
                    <p>Total<span>Rs. 250,000.00</span></p>
                    <button><Link to="/checkout">Check Out</Link></button>
                </aside>
                <div>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quality</p>
                    <p>Subtotal</p>
                </div>
                <div>
                    <div>
                        <Image cloudName={cloudName} publicId={CartImages.asgaard}></Image>
                    </div>
                    
                    <p>Asgaard sofa</p>
                    <p>Rs. 250,000.00</p>
                    <button>1</button>
                    <p>Rs. 250,000.00</p>
                    <img src={shopping2} />
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

export default Cart