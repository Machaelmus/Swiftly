import React from 'react'
import { NavLink } from 'react-router-dom';
import {DiGithubFull} from 'react-icons/di';
import {AiFillLinkedin} from 'react-icons/ai';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutAllContainer}>
                <h1 className={styles.aboutHeading}>About</h1>
                <h2 className={styles.aboutDeveloperHeading}>Developer: <span className={styles.aboutDevNameSpan}>Michael Tufo</span></h2>
                <div className={styles.flexOnThis}>
                    <div className={styles.aboutGithubIconContainer}>
                        <DiGithubFull className={styles.aboutGithubIcon}/>
                        <NavLink className={styles.linksForSocials} to='https://github.com/Machaelmus'>
                        <h2 className={styles.aboutMyGitHubLink}>Github</h2>
                        </NavLink>
                    </div>
                    <div className={styles.aboutLinkedInIconContainer}>
                        <AiFillLinkedin className={styles.aboutLinkedInIcon}/>
                        <NavLink className={styles.linksForSocials} to='https://www.linkedin.com/in/michael-tufo-6b0386171/'>
                        <h2 className={styles.aboutLinkedInLink}>LinkedIn</h2>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
