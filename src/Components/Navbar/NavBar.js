import React from 'react';
import './NavBar.css'; // Make sure to create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/latest">Latest</a></li>
        <li><a href="/my-list">My List</a></li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      <div className="navbar__login">
        <button type="button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
