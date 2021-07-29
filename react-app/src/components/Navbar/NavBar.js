
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
            <div className={styles.navUl}>
              <div className={styles.navLogo}></div>
              <div className={styles.navRightSide}>
                <div className={styles.navUserImage}></div>
                <p className={styles.navUsername}>{sessionUser.username}</p>
                <div className={styles.navAddFriends}>+</div>
                <div className={styles.navProfileDropDown}>v</div>
                {/* <li className={styles.navLogout}>
                  <LogoutButton />
                </li> */}
              </div>
            </div>
          </nav>
        );
    } else {
      return (
        <nav className={styles.navSplashContainer}>
            <ul className={styles.navSplashUl}>
              <li className={styles.navSplashHome}>
                  <div className={styles.logoAndText}>
                    <div className={styles.cheetah}></div>
                    <h1 className={styles.swiftText}>Swiftly</h1>
                  </div>
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
