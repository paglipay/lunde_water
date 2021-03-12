import React, { useState, useEffect, Fragment } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdInvertColors } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { logout } from '../../features/auth/redux/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    // return {
    //   window.removeEventListener('resize', showButton)
    // }
  }, []);

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/profile' className='nav-links'>
          <i className='fas fa-user' /> <span className='hide-sm'>Profile</span>
        </Link>
      </li>
      <li>
        <Link to='/homepagelayout' className='nav-links' onClick={logout}>
          <Icon namee='sign out' /> <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'><Icon name='user menu-icon' style={{ paddingRight: '5px' }}></Icon>Login</Link>
      </li>
      <li className='nav-btn'>
        {button ? (
          <Link to='/register' className='nav-links'>
            <Button buttonStyle='btn--outline'>SIGN UP</Button>
          </Link>
        ) : (
          <Link to='/register' className='nav-links'>
            <Button
              buttonStyle='btn--outline'
              buttonSize='btn--mobile'
              onClick={closeMobileMenu}
              disabled
            >
              SIGN UP
            </Button>
          </Link>
        )}
      </li>
    </Fragment>
  );

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link
              to='/herosections'
              className='navbar-logo'
              onClick={closeMobileMenu}
            >
              <MdInvertColors className='navbar-icon' />
              LUNDE WATER
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/herosections'
                  className='nav-links home'
                  onClick={closeMobileMenu}
                >
                  {/* <Icon name='home' /> */}
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links services'
                  onClick={closeMobileMenu}
                >
                  {/* <Icon name='briefcase' /> */}
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/placeorder'
                  className='nav-links order'
                  onClick={closeMobileMenu}
                >
                  {/* <Icon name='calendar outline' /> */}
                  Order Form
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/orders'
                  className='nav-links order'
                  onClick={closeMobileMenu}
                >
                  {/* <Icon name='shopping cart' /> */}
                  Orders
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li> */}
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
