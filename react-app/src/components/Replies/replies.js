import React, {useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../SinglePost/singlepost.module.css';
import { deleteOneReply, editOneReply } from '../../store/replies';
import Modal from 'react-modal';
import { BsThreeDots } from 'react-icons/bs';

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

const ReplyBox = ({reply}) => {
    const replyEditAndDeleteDropDown = useRef(null);
    const { id } = useParams();
    const [editReplyText, setEditReplyText] = useState('')
    const [openReplyOptions, setOpenReplyOptions] = useState(false);
    const [openReplyModal, setOpenReplyModal] = useState(false);
    const posts = useSelector(state => Object.values(state.posts));
    const post = posts.find((post) => post.id === +id);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const deleteReply = (e) => {
        e.preventDefault()
        dispatch(deleteOneReply(reply.id))
    }

    const editReply = (e) => {
        e.preventDefault();

        const replyInfomation = {
            reply: editReplyText,
            userId: sessionUser.id,
            postId: id,
            timeOfReply: Date.now()
        }
        dispatch(editOneReply(reply.id, replyInfomation))
        setOpenReplyModal(false)
        setOpenReplyOptions(false)
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
        return () => {
            body.removeEventListener('click', clickOutsideMenu)
        }
    }, [replyEditAndDeleteDropDown])


    return (
        <div>{reply.postId === post.id &&
            <div className={styles.repliesToSinglePostContainer}>
                <div className={styles.profileImageForRepliesContainer}>
                    <div className={styles.replyAuthorAndProfileImage}>
                        <img alt='wow' className={styles.replyUserImage} src={reply?.user.profileImage}></img>
                        <p className={styles.replyUsername}>{reply?.user.username}</p>
                    </div>
                    <br/>
                </div>
                <p>{reply?.timeOfReply}</p>
                <p>{reply?.reply}</p>
                {sessionUser.id === reply?.user.id &&
                <div ref={replyEditAndDeleteDropDown} >
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
    )
}


export default ReplyBox;
