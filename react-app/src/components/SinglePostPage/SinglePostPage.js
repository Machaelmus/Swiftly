import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getIndividualPost } from '../../store/posts';
import {BsArrowLeft} from 'react-icons/bs'
import styles from './singlepost.module.css';

const SinglePostPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const posts = useSelector(state => Object.values(state.posts));

    const singlePost = posts.find((post) => post.post);
    // console.log('SINGLE POST ==>', singlePost);
    // useEffect(() => {
    //     console.log(singlePost.post, 'INSIDE THE USEEFFECT')
    // }, [singlePost])

    useEffect(() => {
        dispatch(getIndividualPost(id))
        // console.log('INSIDE THE COMPONENT', singlePost)
    }, [dispatch, id])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navigation}></div>
            <div className={styles.feed}>
                <div className={styles.singlePostContainer}>
                    <h1 className={styles.returnToHome}><BsArrowLeft className={styles.returnArrow}/>Return</h1>
                    <h2>{singlePost?.user?.username}</h2>
                    <p>{singlePost?.post?.post}</p>
                    <p>{singlePost?.post?.timeOfPost}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;
