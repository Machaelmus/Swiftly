import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';
import { getAllReplies } from '../../store/replies';
import CreateReplyForm from '../CreateReplyForm/CreateReplyForm';
import { BsArrowLeft } from 'react-icons/bs';
import ReplyBox from '../Replies/replies';

const SinglePost = () => {
    const { id } = useParams();
    const replies = useSelector(state => Object.values(state.replies))
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllReplies())
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.feed}>
                <div className={styles.returnArrow}>
                    <Link to="/home">
                        <h1 className={styles.returnReturn}><BsArrowLeft className={styles.fatArrow}/>Return</h1>
                    </Link>
                </div>
                <div className={styles.singlePostPageContainer}>
                    <div className={styles.singlePostContainer}>
                        <div className={styles.userImageContainer}>
                            <img alt='wow' className={styles.userImage} src={post?.user.profileImage}></img>
                            <h1>{post?.user.username}</h1>
                        </div>
                        <p>{post?.timeOfPost}</p>
                        <p>{post?.post}</p>
                    </div>
                </div>
                <CreateReplyForm post={post}/>
                {replies.map((reply) => (
                    <ReplyBox reply={reply} key={reply.id}/>
                ))}
            </div>
        </div>
    )
}

export default SinglePost;
