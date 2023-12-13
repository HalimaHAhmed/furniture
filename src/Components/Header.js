import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import logoImage from '../assets/halimah.png';
import bodyImage from '../assets/bgimage.png';
import card from '../assets/image 106.png'
import centeredImage  from '../assets/image 100.png'
import leftImage from '../assets/image 101.png'
import product from '../assets/image 1.png'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/f4.png'
import f5 from '../assets/f5.png'
import f6 from '../assets/f6.png'
import f7 from '../assets/f7.png'

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
          <span>Furniture</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="icons">
          <FaUser />
          <FaSearch />
          <FaHeart />
          <FaShoppingCart />
        </div>
      </header>
      <div className="image-container">
        <p className='arrival'>New Arrival</p>
        <h1 className='discover'>Discover Our New Collection</h1>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='btn'>Buy Now</button>
      </div>
      <img src={bodyImage} alt="Body Image" className="full-width" />

      <div className='browser'>
        <h1>Browse the Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisLorem ipsum dolor sit amet.</p>
      </div>

        <div className='container'>
        <div className="left-image">
            <img src={card} alt="Left Image" />
            <div className="image-text">Dining</div>

        </div>

        <div className="centered-image">
            <img src={centeredImage} alt="Centered Image" />
            <div className="image-text">Living</div>
        </div>
        <div className="left-image">
            <img src={leftImage} alt="Left Image" />
            <div className="image-text">Bedroom</div>

        </div>
        </div>


        <div className='products'>
        <h1>Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisLorem ipsum dolor sit amet.</p>
      </div>




      <div className='container'>
        <div className="left-image">
            <img src={product} alt="Left Image" />
            <div className="image-texts">Syltherine
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 2.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>
        </div>

        <div className="centered-image">
            <img src={f1} alt="Centered Image" />
            <div className="image-texts">Syltherine
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 1.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>
        </div>
        <div className="left-image">
            <img src={f2} alt="Left Image" />
              <div className="image-texts">Respira
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 4.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>

        </div>
        <div className="left-image">
            <img src={f3} alt="Left Image" />
            <div className="image-texts">Lolito
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 5.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>

        </div>
        </div>

        <div className='container'>
        <div className="left-image">
            <img src={f4} alt="Left Image" />
            <div className="image-texts">Syltherine
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 7.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>
        </div>

        <div className="centered-image">
            <img src={f5} alt="Centered Image" />
            <div className="image-texts">Syltherine
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 2.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>
        </div>
        <div className="left-image">
            <img src={f6} alt="Left Image" />
            <div className="image-texts">Grifo
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 4.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>

        </div>
        <div className="left-image">
            <img src={f7} alt="Left Image" />
            <div className="image-texts">Pingky
            <div>
            <span className='style'>Stylish cafe chair</span>
            <div className="price">Rp 8.500.000 <span className='rp'>Rp 3.500.000</span> </div>
            </div>
            </div>

        </div>
        </div>
        <button className="showcenter" >Show More</button>

        <div className="cenetrcard">
            <h1 className="rooms">50+ Beautiful rooms<br/>inspiration</h1>
            <p className="roo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisLorem ipsum dolor sit amet.</p>
          <button className='explore'>Explore More</button>

          </div>

        </div>

  );
}

export default Header;