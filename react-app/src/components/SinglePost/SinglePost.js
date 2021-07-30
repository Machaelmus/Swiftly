import React, {useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../store/posts';
import styles from './singlepost.module.css';
import { getAllReplies } from '../../store/replies';
import { deleteOneReply, editOneReply } from '../../store/replies';
import Modal from 'react-modal';
import CreateReplyForm from '../CreateReplyForm/CreateReplyForm';
import { BsThreeDots } from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

Modal.setAppElement('#root')

const editModalStyles = {
    content: {
        height: '500px',
        width: '450px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'white',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.281)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column-reverse',
    }
}

const SinglePost = () => {
    const replyEditAndDeleteDropDown = useRef(null);
    const { id } = useParams();
    const [editReplyText, setEditReplyText] = useState('')
    const [openReplyOptions, setOpenReplyOptions] = useState(false);
    const [openReplyModal, setOpenReplyModal] = useState(false);
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

    const editReply = (e) => {
        e.preventDefault();

        const replyInfomation = {
            reply: editReplyText,
            userId: sessionUser.id,
            postId: id,
            timeOfReply: Date.now()
        }
        setOpenReplyModal(false);
        setOpenReplyOptions(false);
        dispatch(editOneReply(singleReply.id, replyInfomation))
    }

    function openReplyModalOnClick() {
        setOpenReplyModal(true)
    }

    function closeReplyModalOnClick() {
        setOpenReplyModal(false);
    }

    const enableReplyOptions = () => {
        if(openReplyOptions) return;
        setOpenReplyOptions(true);
    }

    useEffect(() => {
        const clickOutsideMenu = (event) => {
            if(replyEditAndDeleteDropDown.current && !replyEditAndDeleteDropDown.current.contains(event.target)) {
                setOpenReplyOptions(false);
            }
        }
        const body = document.getElementById('root')
        body.addEventListener('click', clickOutsideMenu)
        setOpenReplyOptions(false)
        return () => {
            body.removeEventListener('click', clickOutsideMenu)
            setOpenReplyOptions(false)
        }
    }, [replyEditAndDeleteDropDown])

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
                                    <div className={styles.replyAuthorAndProfileImage}>
                                        <img className={styles.replyUserImage} src={reply.user.profileImage}></img>
                                        <p className={styles.replyUsername}>{reply.user.username}</p>
                                    </div>
                                    <br/>
                                </div>
                                <p>{reply.timeOfReply}</p>
                                <p>{reply.reply}</p>
                                 {sessionUser.id === reply.user.id &&
                                    <div ref={replyEditAndDeleteDropDown}>
                                        <button className={styles.editReplyThreeDots} onClick={enableReplyOptions}><BsThreeDots/></button>
                                        {openReplyOptions && (
                                            <div className={styles.replyOptionsDrop}>
                                                <p className={styles.openEditMenu} onClick={openReplyModalOnClick}>Edit</p>
                                                <Modal style={editModalStyles} isOpen={openReplyModal} onRequestClose={closeReplyModalOnClick}>
                                                    <button className={styles.deleteReplyButton} onClick={deleteReply}>Delete</button>
                                                    <br/>
                                                    <form className={styles.modalEditReplyForm} onSubmit={editReply}>
                                                        <h2 className={styles.editModalReplyHeading}>Edit Reply</h2>
                                                        <textarea className={styles.modalEditReplyTextArea} placeholder="Change your reply here" onChange={(e) => setEditReplyText(e.target.value)}></textarea>
                                                        <br/>
                                                        <button className={styles.editReplyButtonInsideModal} onClick={editReply}>Edit</button>
                                                        <button className={styles.cancelEditReplyModalButton} onClick={closeReplyModalOnClick}>Cancel</button>
                                                    </form>
                                                </Modal>
                                            </div>
                                        )
                                        }
                                    </div>
                                 }
                            </div>
                        }</div>
                    ))}
            </div>
        </div>
    )
}

export default SinglePost;
