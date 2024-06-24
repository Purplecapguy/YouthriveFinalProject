import React from 'react'
import { Image } from 'cloudinary-react' 
import { Link } from 'react-router-dom'
import './Blog.css'
import Trophy from "../../logos/trophy.svg"
import Warrantee from "../../logos/warrantee.svg"
import Hand from "../../logos/hand.svg"
import Call from "../../logos/call.svg"
import Dasharrow from "../../logos/dasharrow.svg"
import MainLogo from "../../logos/Meubel.svg"
import logo2 from '../../logos/search.svg';
import { BlogImages, cloudName } from '../../cloudImages/Cloud'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Blogs = () => {
  return (
    <div>
      <section className='contactsection1'>
        <img src={MainLogo} alt="" />
        <h1>Blogs</h1>
        <div className='linkdivider'>
          <Link className='linkage' to="/">Home</Link>
          <div>
            <img src={Dasharrow} alt="" />
          </div>
          <Link className='linkage' to="/blogs">Blogs</Link>
        </div>
      </section>
      <section className='post'>
        <aside>
          <div className='searchbar'>
            <input type="text" /><img src={logo2} />
          </div>
          <div>
            <p className='cate'>Categories</p>
            <p className='asidep1'>Crafts<span>2</span></p>
            <p className='asidep1'>Design<span>8</span></p>
            <p className='asidep1'>Handmade<span>7</span></p>
            <p className='asidep1'>Interior<span>1</span></p>
            <p className='asidep1'>Wood<span>6</span></p>
          </div>
          <div className='postimage'>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/qfwjbnxcjza2z4eonvav' alt='side' />
              <p>Going all-in with millennial design</p>
              <p>03 Aug 2022</p>
            </div>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/fswki0pe9oncu20aaukj' alt='side1' />
              <p>Exploring new ways of decorating</p>
              <p>03 Aug 2022</p>
            </div>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/m4usrdhi3weeylwrdqxp' alt='side2' />
              <p>Handmade pieces that took time to make</p>
              <p>03 Aug 2022</p>
            </div>
            <div>
              <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/kpjr6bl5mqpny5miwatf' alt='side3' />
              <p>Modern home in Milan</p>
              <p>03 Aug 2022</p>
            </div>
            <div>
             <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/xkfqnauslazet4zddhvg' alt='side4' />
              <p>Colorful office redesign</p>
              <p>03 Aug 2022</p>
            </div>
          </div>
        </aside>
        <div className='blogpost'>
          <div>
            <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/b7sdaztaznmu6hqlp4uu' alt='post1' />
            <p>Going all-in with millennial design</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          </div>
          <div>
            <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/dcg5pf10bk2spd94jmfv' alt='post2' />
            <p>Exploring new ways of decorating</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          </div>
          <div>
            <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/blog/ktpqg5uxq8kjr2kkerjv' alt='post3' />
            <p>Handmade pieces that took time to make</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
          </div>
        </div>
        <div className='postbtn'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className='next'>Next</button>
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

export default Blogs