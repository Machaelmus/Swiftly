import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './userProfile.module.css';
import navstyles from '../Home/Home.module.css';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai';
import {IoPersonOutline} from 'react-icons/io5';
import {BsBook} from 'react-icons/bs';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className={styles.wholeProfcontainer}>
        <div className={styles.profile}>
            <div className={styles.profileUserImageContainer}>
              <img alt='wow' className={styles.profileUserImage} src={user.profileImage}></img>
            </div>
            {/* Profile information */}
            <div className={styles.profileUsernameFollowButtonContainer}>

              {/* Follow button and username */}
              <div className={styles.buttonAndUsername}>
                <p className={styles.profileUsername}>{user.username}</p>
                {/* <button className={styles.profileFollowButton}>Follow</button> */}
              </div>
              <div className={styles.userStats}>
                <p className={styles.userPostStat}>Posts</p>
                <p className={styles.userFollowerStat}>Stories</p>
                <p>Images</p>
              </div>
              {/* Handle and status */}
              <div className={styles.profileHandleAndStatusContainer}>
                <p className={styles.profileUserHandle}>{user.handle}</p>
                <p className={styles.profileUserStatus}>{user.status}</p>
              </div>
            </div>
        </div>
        <div className={styles.secondsidenav}>
          <div className={navstyles.navContain}>
              <div className={navstyles.sideNavHome}>
              <Link className={navstyles.sideNavLinks} to='/home'>
                  <AiOutlineHome /> <p className={navstyles.links}>Home</p>
              </Link>
              </div>
              <div className={navstyles.sideNavStories}>
              <Link className={navstyles.sideNavLinks} to='/albums'>
                  <BsBook/><p className={navstyles.links}>Stories</p>
              </Link>
              </div>
              <div className={navstyles.sideNavFindUsers}>
              <Link className={navstyles.sideNavLinks} to='/users'>
                  <AiOutlineSearch/> <p className={navstyles.links}>Find users</p>
              </Link>
              </div>
              <div className={navstyles.sideNavProfile}>
              <Link className={navstyles.sideNavLinks} to={`/users/${user.id}`}>
                  <IoPersonOutline/> <p className={navstyles.links}>Profile</p>
              </Link>
              </div>
              <button className={navstyles.sideNavPostButton}>Post</button>
              <div className={navstyles.divForProfileStuff}>
                  <img alt='wow' className={navstyles.navProfileImageForUser} src={user.profileImage}></img>
                  <div>
                      <Link to={`/users/${user.id}`}>
                          <p className={navstyles.navProfileUsername}>{user.username}</p>
                      </Link>
                      <p className={navstyles.navProfileHandle}>{user.handle}</p>
                  </div>
              </div>
          </div>
        </div>
        <div className={styles.something}></div>
      </div>

    {/* Whole page */}
      {/* <div className={styles.wholeProfileContainer}> */}
          {/* Profile image container */}
      {/* </div> */}
    </>
  );
}
export default User;
