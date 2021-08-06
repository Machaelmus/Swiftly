import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './userList.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (

      <div className={styles.allusersContainer} key={user.id}>
          <div className={styles.allusersImageandUsername}>
            <img className={styles.allusersProfileImage} src={user.profileImage}></img>
            <NavLink className={styles.allusersUsernames} to={`/users/${user.id}`}>{user.username}</NavLink>
          </div>
          <div className={styles.allusersFollowButtonContainer}>
            {/* <button className={styles.allusersFollowButton}>View profile</button> */}
          </div>
        </div>
    );
  });

  return (
    <>
    <div className={styles.wholePageContainerForAllUsers}>
      <Link to="/home">
        <h2 className={styles.returnHome}>Return</h2>
      </Link>
      <h1 className={styles.usersToFollow}>Users to follow</h1>
      <div className={styles.wholeBigChungus}>{userComponents}</div>
    </div>
    </>
  );
}

export default UsersList;
