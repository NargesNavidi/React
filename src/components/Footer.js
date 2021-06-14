import React from 'react';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join the Advanture...</p>
        <p className='footer-subscription-text'>You can unsubscribe anytime</p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              className='footer-input'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/bio'>Bio</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/bio'>Bio</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/bio'>Bio</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/bio'>Bio</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-lofo">
              NNAVIDI <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">
            NNAVIDI &copy; 2021
          </small>
          <div className="social-icons">
            <Link 
              className="social-icon-link facebook"
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link 
              className="social-icon-link linkedin"
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
