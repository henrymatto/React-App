import React, { useState } from 'react';
import data from './assets/js/kitchen'; // Your kitchen data source
import { useWishlist } from './WishlistContext'; // Import the context

const Kitchen = () => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('none');

  const filteredData = data
    .filter(item => (category === 'all' || item.category === category))
    .filter(item => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      return item.name.toLowerCase().includes(lowerCaseSearch) || item.price.toString().includes(lowerCaseSearch);
    })
    .sort((a, b) => {
      if (sortOption === 'priceLowToHigh') return a.price - b.price;
      if (sortOption === 'priceHighToLow') return b.price - a.price;
      if (sortOption === 'highRatings') return b.rating - a.rating;
      return 0; // No sorting
    });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h1 className="heading">Kitchen Products</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Kitchen Category</option>
              <option value="C1">Sinks</option>
              <option value="C2">Storage Solutions</option>
              <option value="C3">cabinets</option>
              <option value="C4">Coutertops</option>
              <option value="C5">Kitchen Island</option>
            </select>
          </div>
          <div className="col-lg-6">
            <div className="search-container">
              <input id="search" type="text"
                placeholder="Search here"
                onChange={(e) => setSearchTerm(e.target.value)} />
              <i className="fas fa-search search-icon" />
            </div>
          </div>
          <div className="col-lg-2">
            <select onChange={(e) => setSortOption(e.target.value)}>
              <option value="none">Filter By</option>
              <option value="priceLowToHigh">Lowest Price</option>
              <option value="priceHighToLow">Highest Price</option>
              <option value="highRatings">Highest Ratings</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container designs">
        <div className="row">
          {filteredData.map((item) => (
            <div className="col-lg-4 p-3" key={item.id}>
              <div className="product-card">
                <img src={item.img} alt={item.name} width="100%" height="300px" />
                <div className="card-text">
                  <h4>{item.name}</h4>
                  <p>{item.detail}</p>
                  <h5>${item.price}</h5>
                  <div className="flex-p">
                    <h5>
                      <i className="fas fa-star"></i>
                      <span id="average-rating">{item.rating}</span>/5
                    </h5>
                    <button 
                      className="favicon" 
                      onClick={() => addToWishlist(item)}
                    >
                      <i className={`fas fa-heart`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
