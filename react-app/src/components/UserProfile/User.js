import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyPosts from './UserProfileComponents/MyPosts/MyPosts';
import MyAlbums from './UserProfileComponents/MyAlbums/MyAlbums';
import MyReplies from './UserProfileComponents/MyReplies/MyReplies';
import styles from './userProfile.module.css';

function User() {
  const [setting, setSetting] = useState('my-posts');
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

  const myPostsClickHandler = () => {
    setSetting('my-posts');
  };

  const myRepliesClickHandler = () => {
    setSetting('my-replies');
  };

  const myAlbumsClickHandler = () => {
    setSetting('my-albums');
  };

  return (
    <>
      <div className={styles.wholeProfcontainer}>
        <div className={styles.profile}>
            <div className={styles.profileUserImageContainer}>
              <img alt='wow' className={styles.profileUserImage} src={user.profileImage}></img>
            </div>

            <div className={styles.profileUsernameFollowButtonContainer}>
              <div className={styles.buttonAndUsername}>
                <p className={styles.profileUsername}>{user.username}</p>
              </div>

              <div className={styles.profileHandleAndStatusContainer}>
                <p className={styles.profileUserHandle}>{user.handle}</p>
                <p className={styles.profileUserStatus}>{user.status}</p>
              </div>

              <div className={styles.userStats}>
                <p onClick={myPostsClickHandler} className={styles.userPostStat}>Posts</p>
                <p onClick={myAlbumsClickHandler} className={styles.userFollowerStat}>Stories</p>
                <p onClick={myRepliesClickHandler} className={styles.userRepliesStats}>Replies</p>
              </div>

            </div>
        </div>
        
        <div className={styles.something}>
          {setting === 'my-posts' &&
            (<MyPosts/>)
          }
          {setting === 'my-replies' &&
            (<MyReplies/>)
          }
          {setting === 'my-albums' &&
            (<MyAlbums/>)
          }
        </div>

      </div>
    </>
  );
}
export default User;
