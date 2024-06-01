import React, { useState } from 'react';
import './LandingPage.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Font Awesome icons


const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="header">
      <div className="container">
       
        
        <div className="header-text">
          <h1 className='nunito-sans-unique'>BookNexus</h1>
          <p className='nunito-sans-unique'>Welcome to Fantasy-Lib, the ultimate e-library for fantasy literature, where magic comes to life through a vast collection of spellbinding tales, epic adventures, and mythical creatures. Whether you seek the heroics of valiant knights, the intrigue of ancient prophecies, or the wonder of magical realms, Fantasy-Lib offers a treasure trove of stories that transport you beyond the ordinary into the extraordinary</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;