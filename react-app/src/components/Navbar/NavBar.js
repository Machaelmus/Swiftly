
import React, {useRef, useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navbar.module.css';
import {AiOutlinePlus, AiOutlineMenu} from 'react-icons/ai';
import {IoSettingsOutline } from 'react-icons/io5';
import {GoLightBulb} from 'react-icons/go';


const NavBar = () => {
  const navDropdown = useRef(null);
  const [navOptions, setNavOptions] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const enableNavOptions = () => {
    if(navOptions) return;
    setNavOptions(true);
  }

  useEffect(() => {
    const clickOutsideNavOptions = (event) => {
      if(navDropdown.current && !navDropdown.current.contains(event.target)) {
        setNavOptions(false)
      }
    }
    const body = document.getElementById('root')
    body.addEventListener('click', clickOutsideNavOptions)
    setNavOptions(false)
    return () => {
      body.removeEventListener('click', clickOutsideNavOptions)
      setNavOptions(false)
    }
  }, [navDropdown])

    if(sessionUser) {
        return (
          <nav ref={navDropdown} className={styles.navContainer}>
            <div className={styles.navUl}>
              <div className={styles.navLogo}></div>
              <h1 className={styles.swiftlyTextName}>Swiftly</h1>
              <div className={styles.navRightSide}>
                <img alt='wow' src={sessionUser.profileImage} className={styles.navUserImage}></img>
                <p className={styles.navUsername}>{sessionUser.username}</p>
                <Link to="/users">
                  <div className={styles.navAddFriends}><AiOutlinePlus/></div>
                </Link>
                <div onClick={enableNavOptions} className={styles.navProfileDropDown}><AiOutlineMenu/></div>
                {navOptions && (
                  <div className={styles.insideDropdown}>
                    <Link className={styles.profileSettingsLink} to={`/users/${sessionUser.id}`}>
                      <p><IoSettingsOutline className={styles.logoTop}/>Profile & Settings</p>
                    </Link>
                    <p className={styles.themeButton}><GoLightBulb className={styles.logoTop}/>Dark Mode</p>
                    <LogoutButton/>
                  </div>
                )}
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
