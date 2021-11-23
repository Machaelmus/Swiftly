import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './userList.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.filter((value) => {
    if(searchQuery.value === '') {
      return value;
    } else if (value.username.toLowerCase().includes(searchQuery.toLowerCase())) {
      return value;
    } else if (value.email.toLowerCase().includes(searchQuery.toLowerCase())) {
      return value;
    } else if (value.handle.toLowerCase().includes(searchQuery.toLowerCase())) {
      return value;
    } else if (value.status.toLowerCase().includes(searchQuery.toLowerCase())) {
      return value;
    }}).map((user) => {

    return (

      <div className={styles.allusersContainer} key={user.id}>
          <div className={styles.allusersImageandUsername}>
            <img alt='wow' className={styles.allusersProfileImage} src={user.profileImage}></img>
            <div>
              <NavLink className={styles.allusersUsernames} to={`/users/${user.id}`}>{user.username}</NavLink>
              <p className={styles.handleForUsers}>{user.handle}</p>
            </div>
          </div>
          <div className={styles.allusersFollowButtonContainer}>
          </div>
        </div>
    );
  });

  return (

    <>
      <div className={styles.wholePageContainerForAllUsers}>
        <h1 className={styles.usersToFollow}>Discover users</h1>
        <div className={styles.usersSearchForm}>
          <form className={styles.usersForm}>
            <input onChange={(e) => setSearchQuery(e.target.value)} className={styles.usersSearchFormInput} placeholder='Search users'></input>
          </form>
        </div>
        <div className={styles.wholeBigChungus}>{userComponents}</div>
      </div>
    </>

  );

}

export default UsersList;
