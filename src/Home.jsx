import React from 'react'
import { Link } from 'react-router-dom';

import img1 from "../src/assets/img/banner2.jpg"
import img2 from "../src/assets/img/banner1.jpg"
import img3 from "../src/assets/img/banner3.jpg"
import card1 from "../src/assets/img/card/img1.jpg"
import card2 from "../src/assets/img/card/img2.jpg"
import card3 from "../src/assets/img/card/img3.jpg"
import card4 from "../src/assets/img/card/img4.jpg"
import card5 from "../src/assets/img/card/img5.jpg"
import card6 from "../src/assets/img/card/img6.jpg"
import card7 from "../src/assets/img/card/img7.jpg"
import card8 from "../src/assets/img/card/img8.jpg"
import card9 from "../src/assets/img/card/img9.jpg"
import gallery1 from "../src/assets/img/gallery/Anna Carin.jpg"
import gallery2 from "../src/assets/img/gallery/Adam Kane.jpg"
import gallery3 from "../src/assets/img/gallery/Christopher Eliott.jpeg"
import gallery4 from "../src/assets/img/gallery/Cassandra Walker.jpeg"


const Home = () => {
   
    return (
      <>
     <div>
  <div className="container-fluid">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-banner"><img src={img1} className="d-block" alt="..." /></div>
          <div className="carousel-caption ">
            <h1>Explore &amp; Review Products</h1>
            <p>Browse a wide range of interior design products. Read user reviews and add products in a wishlist.</p>
          <Link to='/furniture'>Discover Products     &rarr;</Link>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-banner"><img src={img2} className="d-block" alt="..." /></div>
          <div className="carousel-caption">
            <h1>Select a Design Consultation</h1>
            <p>Connect with professional interior designers. Get personalized advice and insights tailored to your space.</p>
            <Link to='/design-bed'>Veiw Designs     &rarr;</Link>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-banner"><img src={img3} className="d-block" alt="..." /></div>
          <div className="carousel-caption">
            <h1>Browse Designer Portfolios</h1>
            <p>View profiles and past projects of top interior designers. Find inspiration and contact designers for your next project!</p>
            <Link to='/designer'>View Designer Gallery      &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* feauture section start */}
  <h1 className="sub-heading mt-5">our <span>Services</span></h1>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 center">
        <div className="card4">
          <div className="icon">
            <i className="fas fa-pencil-ruler" /></div>
          <div className="name">Select a Design Consultation</div>
          <p>Connect with professional interior designers. Get personalized advice and insights tailored to your space.</p>  
          <Link to='/design-bed'>Veiw Designs</Link>
          <div className="bubble" />
        </div>
      </div>
      <div className="col-lg-4 center">
        <div className="card4">
          <div className="icon">
            <i className="fas fa-tag" />
          </div>
          <div className="name">Explore &amp; Review Products</div>
          <p>Browse a wide range of interior design products. Read user reviews and add products in a wishlist.</p>  
          <Link to='/furniture'>Discover Products</Link>
          <div className="bubble" />
        </div>
      </div>
      <div className="col-lg-4 center">
        <div className="card4">
          <div className="icon">
            <i className="fas fa-search" /> 
          </div>
          <div className="name">Browse Designer Portfolios</div>
          <p>View profiles and past projects of top interior designers. Find inspiration and contact designers for your next project!</p>  
          <Link to='/designer'>Designer Gallery</Link>
          <div className="bubble" />
        </div>
      </div>
    </div>
  </div>
  {/* feauture section end */}
  <h1 className="sub-heading mt-5">Products</h1>
  <div className="container-fluid product-list">
  <div className="container">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card1}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Sofas and Couches</h4>
                  <p>Comfortable seating for living rooms, available in various styles and fabrics.</p>
                  <h5>$499</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.8</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card2}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Rugs and Carpets</h4>
                  <p>Soft floor coverings that add warmth and texture to your space.</p>
                  <h5>$600</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.1</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card3}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Ceiling Lights</h4>
                  <p>Stylish overhead lighting for any room, enhancing both function and design.</p>
                  <h5>$450</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.2</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="container"> 
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card4}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Wall Art and Mirrors</h4>
                  <p>Decorative pieces to enhance your walls and reflect light in any room.</p>
                  <h5>$400</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">3.8</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card5}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Table Dining</h4>
                  <p>Functional and decorative tables for dining, relaxing, or accenting your living spaces.</p>
                  <h5>$800</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">3.8</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card6}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Vanities and Cabinets</h4>
                  <p>Bathroom storage solutions with integrated sinks and mirrors.</p>
                  <h5>$1,000</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.9</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card7}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Backsplashes</h4>
                  <p>Decorative kitchen wall coverings to protect and enhance kitchen style.</p>
                  <h5>$150 (per square foot)</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">3.8</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card8}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Beds and Mattresses</h4>
                  <p>Comfortable beds with various mattress options for a perfect night's sleep.</p>
                  <h5>$2,000</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.4</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="product-card">
                <div className="img">
                  <img src={card9}  width="100%" height="300px" />
                </div>
                <div className="card-text">
                  <h4>Outdoor Lighting</h4>
                  <p>Weatherproof lights to illuminate patios, gardens, or pathways.</p>
                  <h5>$300</h5>
                  <div className="flex-p">
                    <h5><i className="fas fa-star" /><span id="average-rating">4.7</span>/5</h5>
                    <button className="favicon"><i className="fas fa-heart" /></button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>

  <div className="container gallery">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h1 className="sub-heading">Design Gallery</h1>
        </div>
      </div>
    </div>
    <div className="row">
  <div className="col-lg-3">
    <div className="design_gallery">
      <figure><img src={gallery1} alt="#" /><figcaption>Designed By Anna Carin</figcaption></figure>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="design_gallery">
      <figure><img src={gallery2} alt="#" /><figcaption>Designed By Adam Kane</figcaption></figure>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="design_gallery">
      <figure><img src={gallery3} alt="#" /><figcaption>Designed By Christopher Eliott</figcaption></figure>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="design_gallery">
      <figure><img src={gallery4} alt="#" /><figcaption>Designed By Cassandra Walker</figcaption></figure>
    </div>
  </div>
</div>

  </div>
</div>

      </>
    );
}

export default Home;