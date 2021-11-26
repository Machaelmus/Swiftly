import React from 'react'
import { DiGithubFull } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutAllContainer}>
                <h1 className={styles.aboutHeading}>About the developer</h1>
                <h2 className={styles.aboutDeveloperHeading}><span className={styles.aboutDevNameSpan}>Michael Tufo</span></h2>
                <div className={styles.flexOnThis}>
                    <div className={styles.aboutGithubIconContainer}>
                        <DiGithubFull className={styles.aboutGithubIcon}/>
                        <a className={styles.linksForSocials} href='https://github.com/Machaelmus'  target='_blank' rel='noreferrer'>
                        <h2 className={styles.aboutMyGitHubLink}>Github</h2>
                        </a>
                    </div>
                    <div className={styles.aboutLinkedInIconContainer}>
                        <AiFillLinkedin className={styles.aboutLinkedInIcon}/>
                        <a className={styles.linksForSocials} href='https://www.linkedin.com/in/michael-tufo-6b0386171/' target='_blank' rel='noreferrer'>
                        <h2 className={styles.aboutLinkedInLink}>LinkedIn</h2>
                        </a>
                    </div>
                    <div>
                        <a href='http://michaeltufo.net' target='_blank' rel='noreferrer'>
                            <h2 className={styles.aboutPortfolioLink}>Portfolio</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
