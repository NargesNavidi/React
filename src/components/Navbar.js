import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
    showButton()
  }, []);

  // const [scrolled, setScrolled] = useState(window.scrollY);
  
  const changeBackground = () => {
    if (window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  window.addEventListener('resize', showButton);


  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'} >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobMenu}>
            NNAVIDI <i className='fab fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bio' className='nav-links' onClick={closeMobMenu}>
                Bio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
