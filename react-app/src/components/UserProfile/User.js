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
    <div className={styles.wholeProfileContainer}>
      <div className={styles.profileUserImageContainer}>
        <img className={styles.profileUserImage} src={user.profileImage}></img>
      </div>
      <div className={styles.profileUsernameFollowButtonContainer}>
        <p className={styles.profileUsername}>{user.username}</p>
        <button className={styles.profileFollowButton}>Follow</button>
      </div>
      {/* <div> */}
        {/* DISPLAY NUMBER OF POSTS AND FOLLOWERS HERE */}
      {/* </div> */}
      <div className={styles.profileHandleAndStatusContainer}>
        <p className={styles.profileUserHandle}>{user.handle}</p>
        <p className={styles.profileUserStatus}>{user.status}</p>
      </div>
    </div>
    </>
  );
}
export default User;
