
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import Splash from '../Splash/Splash';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
    if(sessionUser) {
        return (
          <nav>
            <ul>
              <li>
                <NavLink to='/' exact={true} activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to='/users' exact={true} activeClassName='active'>
                  Users
                </NavLink>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        );
    } else {
      return (
        <nav>
            <ul>
              <li>
                <NavLink to='/' exact={true} activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
      )
    }
}

export default NavBar;
