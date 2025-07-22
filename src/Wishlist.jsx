// Wishlist.jsx
import React from 'react';
import { useWishlist } from './WishlistContext';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container wishlist-container">
      <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h1 className="heading">Your Wishlist</h1>
            </div>
          </div>
        </div>
        
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.detail}</p>
                <h5>${item.price}</h5>
                <h5>
                  <i className="fas fa-star"></i>
                  <span id="average-rating">{item.rating}</span>/5
                </h5>
                <button  onClick={() => removeFromWishlist(item.name)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
