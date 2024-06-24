import React from 'react'
import { Link } from 'react-router-dom'
import Dasharrow from "../../logos/dasharrow.svg"
import './SingleProduct.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SingleProduct = () => {
  return (
    <div>
      <section className='singlesect'>

        <Link className='linkage' to="/">Home</Link>
        <div>
          <img src={Dasharrow} alt="" />
        </div>
        <Link className='linkage' to="/shop">Shop</Link>
        <div>
          <img src={Dasharrow} alt="" />
        </div>
        <div className='linedivider'></div>
        <p>Asgaard sofa</p>
      </section>
      <section>
        <div>
          <div className='singlesideimage'>
            <div>
              <LazyLoadImage src='' alt='' />
            </div>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/single%20product/qn8n9z8egbrxefiy4ah7' alt='' />
            </div>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/single%20product/tipw0kudqm0fmsylutk0' alt='' />
            </div>
          </div>
            <LazyLoadImage src='' alt='' />
        </div>
        <div></div>
      </section>
      <section>
        <p>Description <span>Additional Information</span> <span>Review[5]</span></p>
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        <div className='singdiv'>
          <div className='singimg' ><LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/single%20product/m8oro45egfzrieynu0c4' alt='' /></div>
          <div className='singimg'><LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/single%20product/nw8nhxplr8csdeh7pfye' alt='' /></div>          
        </div>
      </section>
      <section className='singlesect3'>
        <h2>Related Product</h2>
        <div className='galleryimagesingle'>
        <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
          </div>
        </div>
        <button>Show More</button>
      </section>
    </div>
  )
}

export default SingleProduct