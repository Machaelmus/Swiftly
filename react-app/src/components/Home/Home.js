import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { createOnePost } from '../../store/posts';
import { getAllPosts } from '../../store/posts';
import CreatePost from '../CreatePostForm/CreatePost';
import styles from './Home.module.css';
import PostContainer from '../PostContainer';
import EditPostForm from '../EditPostForm/EditPostForm';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts));
    // const sessionUser = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);

    return (
        <>
        {/* CONTAINER */}
        <div class={styles.homeContainer}>
            {/* NAVIGATION */}
            <div class={styles.navigation}></div>
            {/* FEED */}
            <div class={styles.feed}>
                <CreatePost/>
                <div className={styles.bigDiv}>
                    {posts.map((post) => (
                        <div>
                        <PostContainer className={styles.postContainerContainer} post={post} key={post.id}/>
                        <EditPostForm post={post}/>
                        </div>
                    ))}
                </div>
            </div>
            {/* EXTRA */}
            <div class={styles.extra}></div>
        </div>
        </>
    )
}

export default Home;
