import React from 'react';
import styles from './Splash.module.css';

const Splash = () => {
    return (
        <>
            <div className={styles.splashContainer}>
                <h1>The power to connect with <span>anyone</span> in the world</h1>
                <p>Join today</p>
            </div>
            <div className={styles.splashButtons}>
                <button className={styles.splashLogin1}>Log in</button>
                <button className={styles.splashSignup}>Sign up</button>
            </div>
        </>
    )
}

export default Splash;
