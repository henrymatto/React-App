import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const dropdownItemsDesigns = [
  { name: 'Bedroom', path: '/design-bed' },
  { name: 'Kitchen', path: '/design-K' },
  { name: 'Living Room', path: '/design-L' },
  { name: 'Bathroom', path: '/design-B' },
  { name: 'Dining Room', path: '/design-D' },
];

const dropdownItemsProducts = [
  { name: 'Furniture', path: '/furniture' },
  { name: 'Kitchen', path: '/kitchen' },
  { name: 'Lighting', path: '/lighting' },
  { name: 'Decor', path: '/decor' },
  { name: 'Bathroom', path: '/bathroom' },
];

const Dropdown = ({ dropdownItems, label, linkTo }) => {
  const handleMouseEnter = (e) => {
    const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.add('show');
    }
  };

  const handleMouseLeave = (e) => {
    const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
    }
  };

  return (
    <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink to={linkTo} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-expanded="false">
        {label}
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className="dropdown-item">{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 pr-5 px-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">Home<span>Styler</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">Home</NavLink>
            </li>
            <Dropdown dropdownItems={dropdownItemsDesigns} label="Designs" linkTo="/design-bed" />
            <li className="nav-item">
              <NavLink to="/designer" className="nav-link">Designer Gallery</NavLink>
            </li>
            <Dropdown dropdownItems={dropdownItemsProducts} label="Product List" linkTo="/furniture" />
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wishlist" className="nav-link">
                <div className="favicon">
                  <i className="fas fa-heart icon"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
