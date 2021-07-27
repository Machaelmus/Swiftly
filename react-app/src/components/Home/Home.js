import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { createOnePost } from '../../store/posts';
import { getAllPosts } from '../../store/posts';
import CreatePost from '../CreatePostForm/CreatePost';
import styles from './Home.module.css';
import PostContainer from '../PostContainer';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts));
    // const sessionUser = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);

    return (
        <>
            <CreatePost/>
            <div className={styles.bigDiv}>
                {posts.map((post) => (
                    <PostContainer post={post} key={post.id}/>
                ))}
            </div>
        </>
    )
}

export default Home;
