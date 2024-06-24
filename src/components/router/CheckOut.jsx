import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import MainLogo from "../logos/Meubel.svg"
import Dasharrow from "../logos/dasharrow.svg"
import Trophy from "../logos/trophy.svg"
import Warrantee from "../logos/warrantee.svg"
import Hand from "../logos/hand.svg"
import Call from "../logos/call.svg"

const CheckOut = () => {
    return (
        <div>
            <section className='contactsection1'>
                <img src={MainLogo} alt="" />
                <h1>Checkout</h1>
                <div className='linkdivider'>
                    <Link className='linkage' to="/">Home</Link>
                    <div>
                        <img src={Dasharrow} alt="" />
                    </div>
                    <Link className='linkage' to="/shop">Shop</Link>
                </div>
            </section>
            <section className='checksect1'>
                <div className='checkdiv'>
                    <h2>Billing Details</h2>
                    <form className='checkdiv' action="" method="post">
                        <div className='formname'>
                            <div>
                                <label htmlFor="firstname">First Name</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label htmlFor="lastname">Last Name</label>
                                <input type='text' />
                            </div>
                        </div>
                        <label htmlFor="company">Company Name Optional</label>
                        <input type='text' />
                        <label htmlFor="country">Country/Region</label>
                        <select name="country" id="country">
                            <option value={1}>Sri Lanka</option>
                            <option value={2}>Nigeria</option>
                            <option value={3}>Togo</option>
                            <option value={4}>Ghana</option>
                        </select>
                        <label htmlFor="street">Street Address</label>
                        <input type='text' />
                        <label htmlFor="town">Town/City</label>
                        <input type='text' />
                        <label htmlFor="province">Province</label>
                        <select name="province" id="province">
                            <option value={1}>Western Province</option>
                            <option value={2}>Northern Province</option>
                            <option value={3}>Eastern Province</option>
                            <option value={4}>Southern Province</option>
                        </select>
                        <label htmlFor="zipcode">Zip code</label>
                        <input type='text' />
                        <label htmlFor="phone">Phone</label>
                        <input type='text' />
                        <label htmlFor="email">Email Address</label>
                        <input type='email' />
                        <input type="text" placeholder='Additional information' />
                    </form>
                </div>
                <div className='checkdiv2'>
                    <div >
                        <p className='checkspan'>Product <span>Subtotal</span></p>
                        <p className='checkspan'>Asgaard sofa x 1 <span>Rs. 250,000.00</span></p>
                        <p className='checkspan'>Subtotal<span >Rs. 250,000.00</span></p>
                        <p className='checkspan'>Total <span >Rs. 250,000.00</span></p>
                    </div>
                    <div className='line'></div>
                    <div className='bank'>
                        <label For="direct">
                            <input type="radio" name='payment-terms' checked />Direct Bank Transfer
                        </label>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <div className='checkpro'>
                            <label For="direct">
                                <input type="radio" name='payment-terms' />Direct Bank Transfer
                            </label>
                            <label For="direct">
                                <input type="radio" name='payment-terms' />Cash On Delivery
                            </label>
                        </div>

                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
                    </div>
                    <button>Place Order</button>
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

export default CheckOut