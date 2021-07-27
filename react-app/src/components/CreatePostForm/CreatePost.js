import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CreatePost.module.css';

const CreatePost = () => {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className={styles.createPostDiv}>
            <form className={styles.createPostForm}>
                <textarea className={styles.createPostInput} placeholder={`What\'s on your mind, ${sessionUser.username}?`}></textarea>
                <br/>
                <button className={styles.createPostSubmit}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
