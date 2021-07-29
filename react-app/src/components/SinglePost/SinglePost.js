import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';
import { BsChat } from 'react-icons/bs';


const SinglePost = () => {
    const { id } = useParams();
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();
    console.log('SINGLE POST ===>', post)
    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.feed}>
                <div className={styles.singlePostPageContainer}>
                    <div className={styles.returnArrow}>
                        <Link to="/home">
                            <h1>Return</h1>
                        </Link>
                    </div>
                    <div className={styles.singlePostContainer}>
                        <h1>Post username</h1>
                        <p>{post?.timeOfPost}</p>
                        <p>{post?.post}</p>
                    </div>
                </div>
                <div className={styles.repliesToSinglePostContainer}>
                    <p>reply from this person</p>
                    <p>reply time</p>
                    <p>reply message goes here, whatever they may say</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;
