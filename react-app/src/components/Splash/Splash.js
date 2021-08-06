import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './Splash.css';

const Splash = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const demoLogin = async (e) => {
        e.preventDefault()
        await dispatch(login('tree@branch.com', 'password'));
        history.push('/home')
    }

    return (
        <>
        <div className="backgroundImage">
            <div className="splashContainer">
                <h1 className="splashHeading">The power to connect with <span className="splashPurpleWord">anyone</span> in the world</h1>
                <p className="splashJoin">Join today</p>
            </div>
            <div className="splashButtons">
                    <button onClick={demoLogin} className="splashLogin1">Demo Login</button>
                <Link to="/signup">
                    <button className="splashSignup">Sign up</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Splash;
