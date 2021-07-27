import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllPosts } from '../../store/posts';
import CreatePost from '../CreatePostForm/CreatePost';
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts));

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);

    return (
        <>
            <CreatePost/>
                <div className={styles.bigDiv}>
                    {posts.map((post) => (
                        <div key={post.id} className={styles.postDiv}>
                            <p>{post.timeOfPost}</p>
                            <h2>{post.post}</h2>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Home;
