import React from 'react';
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
                <button className="splashLogin1">Log in</button>
                <button className="splashSignup">Sign up</button>
            </div>
        </div>
        </>
    )
}

export default Splash;
