import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './userProfile.module.css';

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
    {/* Whole page */}
      <div className={styles.wholeProfileContainer}>
          {/* Profile image container */}
          <div className={styles.profileUserImageContainer}>
            <img className={styles.profileUserImage} src={user.profileImage}></img>
          </div>
          {/* Profile information */}
          <div className={styles.profileUsernameFollowButtonContainer}>


            {/* Follow button and username */}
            <div className={styles.buttonAndUsername}>
              <p className={styles.profileUsername}>{user.username}</p>
              <button className={styles.profileFollowButton}>Follow</button>
            </div>
            <div className={styles.userStats}>
              <p className={styles.userPostStat}>Posts</p>
              <p className={styles.userFollowerStat}>Followers</p>
              <p>Following</p>
            </div>
            {/* Handle and status */}
            <div className={styles.profileHandleAndStatusContainer}>
              <p className={styles.profileUserHandle}>{user.handle}</p>
              <p className={styles.profileUserStatus}>{user.status}</p>
            </div>

          </div>
      </div>
    </>
  );
}
export default User;

