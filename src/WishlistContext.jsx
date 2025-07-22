// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    if (!wishlist.find((wishlistItem) => wishlistItem.name === item.name)) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
      alert(`${item.name} has been added to your wishlist.`);
    } else {
      alert(`${item.name} is already in your wishlist.`);
    }
  };

  const removeFromWishlist = (name) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.name !== name));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
