import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../../../store/posts';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MyPosts.module.css';

const MyPosts = () => {
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(state => Object.values(state.posts));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
        {/* <h1>My Posts</h1> */}
        <div className={styles.wholeMyPostPageContainer}>
            {posts.map((post) => (
                <div>
                    {post.userId === sessionUser.id &&
                    <div className={styles.myPostsPostContainer}>
                        <p className={styles.myPostUsername}>{post.user.username}</p>
                        <p className={styles.myPostTimeOfPost}>{post.timeOfPost}</p>
                        <p className={styles.myActualPost}>{post.post}</p>
                    </div>
                    }
                </div>
            ))}
        </div>
        </>
    )
}

export default MyPosts;
