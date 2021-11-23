
import React, { useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navbar.module.css';
import { Button, Wrapper, Menu } from 'react-aria-menubutton';
import { AiOutlinePlus, AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const NavBar = () => {
  const navDropdown = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const openTheNav = () => navOpen ? setNavOpen(true) : setNavOpen(false);

    if(sessionUser) {
        return (
          <nav ref={navDropdown} className={styles.navContainer}>
            <div className={styles.navUl}>
              <div className={styles.navLogo}></div>
              <h1 className={styles.swiftlyTextName}>Swiftly</h1>
              <Link to="/home">
                  <div className={styles.navGoHome}><AiOutlineHome className={styles.homeLogo}/></div>
              </Link>
              <div className={styles.navRightSide}>
                <img alt='wow' src={sessionUser.profileImage} className={styles.navUserImage}></img>
                <p className={styles.navUsername}>{sessionUser.username}</p>
                <Link to="/users">
                  <div className={styles.navAddFriends}><AiOutlinePlus/></div>
                </Link>
                <Wrapper onSelection={openTheNav}>
                  <Button className={styles.navProfileDropDown}><AiOutlineMenu/></Button>
                  <Menu className={styles.navDropDownMenu}>
                    <Link to={`/users/${sessionUser.id}`}>
                      <button onClick={!!openTheNav} className={styles.navDropDownButtons}>My Profile</button>
                    </Link>
                    <Link to='/about'>
                      <button className={styles.navDropDownButtons}>About</button>
                    </Link>
                    <LogoutButton/>
                  </Menu>
                </Wrapper>

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
