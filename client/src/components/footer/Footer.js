import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdInvertColors } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/homepagelayout'>How it works</Link>
            <Link to='/homepagelayout'>Testimonials</Link>
            <Link to='/homepagelayout'>Careers</Link>
            <Link to='/homepagelayout'>Investors</Link>
            <Link to='/homepagelayout'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/homepagelayout'>Contact</Link>
            <Link to='/homepagelayout'>Support</Link>
            <Link to='/homepagelayout'>Destinations</Link>
            <Link to='/homepagelayout'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/homepagelayout'>Submit Video</Link>
            <Link to='/homepagelayout'>Ambassadors</Link>
            <Link to='/homepagelayout'>Agency</Link>
            <Link to='/homepagelayout'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/homepagelayout'>Instagram</Link>
            <Link to='/homepagelayout'>Facebook</Link>
            <Link to='/homepagelayout'>Youtube</Link>
            <Link to='/homepagelayout'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/homepagelayout' className='social-logo'>
              <MdInvertColors className='navbar-icon' />
              LUNDE WATER
            </Link>
          </div>
          <small className='website-rights'>Lunde Water © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/homepagelayout'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/homepagelayout'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/homepagelayout'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/homepagelayout'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
