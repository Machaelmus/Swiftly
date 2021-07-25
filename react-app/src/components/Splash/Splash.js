import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
    return (
        <>
        <div className="backgroundImage">
            <div className="splashContainer">
                <h1 className="splashHeading">The power to connect with <span className="splashPurpleWord">anyone</span> in the world</h1>
                <p className="splashJoin">Join today</p>
            </div>
            <div className="splashButtons">
                <Link to="/login">
                    <button className="splashLogin1">Log in</button>
                </Link>
                <Link to="/signup">
                    <button className="splashSignup">Sign up</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Splash;
