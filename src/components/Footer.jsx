import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
      <>
     <section className="info_section layout_padding2">
  <div className="container">
    <div className="row info_form_social_row">
      <div className="col-md-8 col-lg-9">
        <div className="info_form">
          <form action="">
            <input className="form-control me-2" type="email" placeholder="Enter your email" aria-label="Search" />
            <button>
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="social_box">
          <a href="#">
            <i className="fab fa-facebook" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
    <div className="row info_main_row">
    <div className="col-md-6 col-lg-3 pb-3">
   <div>
  <div className="info_detail">
  <a className="navbar-brand" href="index.html">Home<span>Styler</span> </a>
    <p className="mb-2">
      HomeStyler provides engaging content that inspires and guides users in designing.
    </p>
  </div>
  </div>

        <div className="info_contact info_links">
          <p>
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>
              Location
            </span>
          </p>
          <p>
            <i className="fa fa-phone" aria-hidden="true" />
            <span>
              Call +01 1234567890
            </span>
          </p>
          <p>
            <i className="fa fa-envelope" />
            <span>
              home.styler@gmail.com
            </span>
          </p>
        </div>
      </div>
    <div className="col-md-6 col-lg-3 pb-3">
        <div className="info_links">
          <h4>
            QUICK LINKS
          </h4>
          <div className="info_links_menu">
          <Link to='/home'>Home</Link>
          <Link to='/designer'>Designer Gallery</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/feedback'>Feedback</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 pb-3">
        <div className="info_links">
          <h4>
            DESIGNS STYLE
          </h4>
          <div className="info_links_menu">
          <Link to='/design-bed'>Design Bedroom</Link>
          <Link to='/design-B'>Design Bathroom</Link>
          <Link to='/design-K'>Design Kitchen</Link>
          <Link to='/design-L'>Design Living Room</Link>
          <Link to='/design-D'>Design Dining Room</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 pb-3">
        <div className="info_links">
          <h4>
            PRODUCT LIST
          </h4>
          <div className="info_links_menu">
          <Link to='/furniture'>Furniture</Link>
          <Link to='/kitchen'>Kitchen</Link>
          <Link to='/lighting'>Lighting</Link>
          <Link to='/decor'>Decor</Link>
          <Link to='/bathroom'>Bathroom</Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <hr />
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <p style={{textAlign: 'center'}}>© 2024 HomeStyler. All rights reserved.</p>
      </div>
    </div>
  </div>
</section>

      </>
    );
}

export default Footer;