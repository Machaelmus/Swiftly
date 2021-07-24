
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navbar.module.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
    if(sessionUser) {
        return (
          <nav className={styles.navContainer}>
            <ul className={styles.navUl}>
              <li className={styles.navHome}>
                <NavLink to='/' exact={true} activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className={styles.navLogin}>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
              </li>
              <li className={styles.navSignup}>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </li>
              <li className={styles.navLogout}>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        );
    } else {
      return (
        <nav className={styles.navSplashContainer}>
            <ul className={styles.navSplashUl}>
              <li className={styles.navSplashHome}>
                <NavLink className={styles.navSplashHomeLink} to='/' exact={true} activeClassName='active'>
                  {/* Image of the cheetah goes here */}
                  <p>Hi</p>
                </NavLink>
              </li>
              <li className={styles.navSplashLogin}>
                <NavLink className={styles.navSplashLoginLink} to='/login' exact={true} activeClassName='active'>
                  <button className={styles.navSplashLoginButton}>Log in</button>
                </NavLink>
              </li>
            </ul>
          </nav>
      )
    }
}

export default NavBar;
