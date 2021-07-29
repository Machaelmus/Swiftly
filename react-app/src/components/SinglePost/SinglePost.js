import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';

const SinglePost = () => {
    const {id} = useParams();
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();
    console.log('SINGLE POST ===>', post)
    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch])

    return (
        <div className={styles.singlePostPageContainer}>
            <div className={styles.returnArrow}><h1>Return</h1></div>
            <div className={styles.singlePostContainer}>
                <h1>Post username</h1>
                <p>Post time</p>
                <p>Post itself</p>
            </div>
        </div>
    )
}

export default SinglePost;
