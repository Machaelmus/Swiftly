import React from 'react';
import styles from './Splash.module.css';

const Splash = () => {
    return (
        <>
        <div className={styles.backgroundImage}>
            <div className={styles.splashContainer}>
                <h1 className={styles.splashHeading}>The power to connect with <span className={styles.splashPurpleWord}>anyone</span> in the world</h1>
                <p className={styles.splashJoin}>Join today</p>
            </div>
            <div className={styles.splashButtons}>
                <button className={styles.splashLogin1}>Log in</button>
                <button className={styles.splashSignup}>Sign up</button>
            </div>
        </div>
        </>
    )
}

export default Splash;
