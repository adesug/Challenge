import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Logo from './assets/logo.png';
import Menu from './assets/menu.png';
import CloseButton from './assets/close.svg';
const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };
  const closeButton = () => {
    setActive(false);
    // console.log('tes');
  };

  return (
    
    <header className="header">
      <div className="container">
        <div className="row">
         
          <div className="logo">
            <Link to={`/`}>
            <img  style={{paddingTop:'6px'}} src={Logo} alt="logo RentCar" />
            </Link>
          </div>
        
          <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
          <div className={`sidebar ${active ? 'menu-active' : ''}`}>
            <div className="top-sidebar">
              <h3>BCR</h3>
              <div className={`close-icon ${active ? 'menu-active' : ''}`} onClick={closeButton}>
                <img src={CloseButton} alt="" />
              </div>
            </div>
            <ul hidden className="menu">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">Faq</a>
              </li>
            </ul>
          </div>

          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;