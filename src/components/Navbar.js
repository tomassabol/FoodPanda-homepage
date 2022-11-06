import React from 'react';
import  panda from '../assets/panda.png';
import './Navbar.css';

function Navbar() {
  return (
    <header>
        <nav>
          <div className='logo'>
            <img src={panda} alt='panda' className='panda'></img>
            <h1 className='pandaLogo'>FoodPanda</h1>
          </div>
        </nav>
    </header>
  );
}

export default Navbar;