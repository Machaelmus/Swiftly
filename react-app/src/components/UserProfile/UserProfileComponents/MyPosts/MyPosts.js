import React, { useEffect } from 'react';
import { getAllPosts } from '../../../../store/posts';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MyPosts.module.css';

const MyPosts = ({userId}) => {
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(state => Object.values(state.posts));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
        <div className={styles.wholeMyPostPageContainer}>
            {posts.map((post) => (
                <div>
                    {console.log(post.userId, 'post', userId, 'userURLId')}
                    {post.user.id === +userId &&
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
