import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';
import { getAllReplies } from '../../store/replies';
import { deleteOneReply } from '../../store/replies';
import CreateReplyForm from '../CreateReplyForm/CreateReplyForm';
import { BsChat } from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

const SinglePost = () => {
    const { id } = useParams();
    const replies = useSelector(state => Object.values(state.replies))
    const singleReply = replies.find((reply) => reply.id)
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const deleteReply = (e) => {
        e.preventDefault()
        dispatch(deleteOneReply(singleReply.id))
    }
    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch])

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
                            <img className={styles.userImage} src={post?.user.profileImage}></img>
                            <h1>{post?.user.username}</h1>
                        </div>
                        <p>{post?.timeOfPost}</p>
                        <p>{post?.post}</p>
                    </div>
                </div>

                <CreateReplyForm post={post}/>
                {/* POST A REPLY COMPONENT HERE */}
                    {replies && replies.map((reply) => (
                        <div key={reply.id}>{reply?.postId === post?.id &&
                            <div className={styles.repliesToSinglePostContainer}>
                                <div className={styles.profileImageForRepliesContainer}>
                                    <img className={styles.replyUserImage} src={post?.user.profileImage}></img>
                                    <p className={styles.replyUsername}>UsernameHere</p>
                                </div>
                                <p>{reply.timeOfPost}</p>
                                <p>{reply.reply}</p>
                                {(sessionUser.id === post.user.id) &&
                                    <button onClick={deleteReply}>Delete</button>}
                            </div>
                        }</div>
                    ))}
            </div>
        </div>
    )
}

export default SinglePost;
