import React from 'react';
import logo from '../images/gapsi_logo.png';
import '../css/Header.css'

function Header() {
    return (
      <div className='Container-header'> 
        <header >
          
           
              <img src={logo} alt="logo" />
              <div className='Header-text'>
                e-Commerce Gapsi.
              </div> 
           
          
        </header>
        
      </div>
    );
  }

  export default Header;