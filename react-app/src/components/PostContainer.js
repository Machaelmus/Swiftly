import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { useParams } from 'react-router-dom';
import { deleteOnePost } from '../store/posts';
import styles from './Home/Home.module.css';

const PostContainer = ({post}) => {
    const dispatch = useDispatch();
    console.log('INSIDE THE COMPONENT', post)

    const deletePostFunc = () => {
        dispatch(deleteOnePost(post.id))
    }

    return (
        <>
            <div className={styles.postDiv}>
                <p>{post.timeOfPost}</p>
                <h2>{post.post}</h2>
                <button onClick={deletePostFunc}>Delete</button>
            </div>
        </>
    )
}
export default PostContainer;