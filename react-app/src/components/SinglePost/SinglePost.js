import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';
import { BsChat } from 'react-icons/bs';
import { getAllReplies } from '../../store/replies';

const SinglePost = () => {
    const { id } = useParams();
    const replies = useSelector(state => Object.values(state.replies))
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();
    console.log('SINGLE POST ===>', post)
    
    useEffect(() => {
        dispatch(getAllReplies())
    }, [dispatch])

    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.feed}>
                <div className={styles.returnArrow}>
                    <Link to="/home">
                        <h1>Return</h1>
                    </Link>
                </div>
                <div className={styles.singlePostPageContainer}>
                    <div className={styles.singlePostContainer}>
                        <h1>Post username</h1>
                        <p>{post?.timeOfPost}</p>
                        <p>{post?.post}</p>
                    </div>
                </div>
                {/* POST A REPLY COMPONENT HERE */}
                {replies.map((reply) => (
                    <div className={styles.repliesToSinglePostContainer}>
                        <p>reply from this person</p>
                        <p>{reply.timeOfPost}</p>
                        <p>{reply.reply}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SinglePost;
