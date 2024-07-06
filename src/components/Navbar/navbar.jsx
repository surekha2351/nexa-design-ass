import React from 'react';
import logo from '../../assets/logo.png';
import { FaAngleDown } from 'react-icons/fa'; // Importing dropdown icon
import './Navbar.css'; // Importing CSS file

const Navbar = () => {
  return (
    <header className='header headefixed'>
      <div className='container'>
        <div className='navbar-container'>
          <div className='logo-container'>
            <a href='/'>
              <img src={logo} alt='Logo' className='logo hauto' loading='lazy' width='102' height='46' />
            </a>
          </div>
          <div className='nav-container'>
            <div className='collapse navbar-collapse' id='navbar-collapse'>
              <ul className='nav core-menu'>
                <li className='drop'>
                  <a href='/' className='with-icon '> 
                    Courses
                    <FaAngleDown className='dropdown-icon' /> 
                  </a>
                  <ul className='dropdown'>
                    <li className='drop-item'>VFX</li>
                    <li className='drop-item'>AR & VR</li>
                    <li className='drop-item'>UX Design</li>
                    <li className='drop-item'>Interior Design</li>
                    <li className='drop-item'>Fashion Design</li>
                    <li className='drop-item'>Gaming Design & Art</li>
                    <li className='drop-item'>Game Development</li>
                    <li className='drop-item'>Digital Marketing</li>
                  </ul>
                </li>
                <li>Internships</li>
                <li>ShowCase</li>
                <li>Campus</li>
                <li>Contact</li>
                <li className='login'>Login</li>
                <li className='start'>Start Now</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
