import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editOnePost, deleteOnePost } from '../../store/posts';
import { Button, Wrapper, Menu } from 'react-aria-menubutton';
import Modal from 'react-modal';
import styles from '../Home/Home.module.css';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';

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

const PostContainer = ({post}) => {
    const editDeleteDropdown = useRef(null);
    const [optionsOpen, setOptionsOpen] = useState(false);
    const openTheOptions = () => optionsOpen ? setOptionsOpen(true) : setOptionsOpen(false);
    const dispatch = useDispatch()
    const [editText, setEditText] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const [open, setOpen] = useState(false);

    const editFormInfo = (e) => {
        e.preventDefault()
        const formInfo = {
            post: editText,
            userId: sessionUser.id,
            timeOfPost: Date.now()
        }
        dispatch(editOnePost(post.id, formInfo));
        setOpen(false);
    }

    const deletePostFunc = () => {
        dispatch(deleteOnePost(post.id))
    }

    function openModalOnClick() {
        console.log('OPEN MODAL')
        setOpen(true);
    }
    
    function closeModalOnClick() {
        setOpen(false);
    }

    return (
        <>
            <div ref={editDeleteDropdown} className={styles.postDiv}>
            {(sessionUser.id === post.user.id) &&
                <Wrapper onSelection={openTheOptions}>
                    <Button className={styles.optionsButton}><BsThreeDots className={styles.threeDots}/></Button>
                    <Menu className={styles.optionsDropDownMenu}>
                        <h4>Options</h4>
                        <p className={styles.editOpenDropdown} onClick={openModalOnClick}>Edit Post</p>
                    </Menu>
                </Wrapper>
            }

            <Modal style={editModalStyles} isOpen={open} onRequestClose={closeModalOnClick}>
                <button className={styles.eachPostDeleteButton} onClick={deletePostFunc}>Delete post</button>
                <br/>
                <form onSubmit={editFormInfo}>
                    <h2>Edit Post</h2>
                    <textarea placeholder="Change your post here" className={styles.editTextArea} onChange={(e) => setEditText(e.target.value)}></textarea>
                    <br/>
                    <button className={styles.eachPostEditButton} onClick={editFormInfo}>Done</button>
                    <button className={styles.editCancelButton} onClick={closeModalOnClick}>Cancel</button>
                </form>
            </Modal>

                <div className={styles.userProfileImageAndUsernameContainer}>
                    <img alt='wow' className={styles.postUserImageSrc} src={post.user.profileImage}></img>
                    <Link to={`/users/${post.user.id}`}>
                        <h1 className={styles.postUsernameYEH}>{post.user.username}</h1>
                    </Link>
                </div>
                    <div className={styles.wholePostEntireContainer}>
                        <p className={styles.eachPostTime}>{post.timeOfPost}</p>
                        <Link to={`/posts/${post.id}`}>
                            <p className={styles.eachPostPost}>{post.post}</p>
                        </Link>
                        <div className={styles.likedPostContainer}>
                            <Link className={styles.linkToCommentsOnPosts} to={`/posts/${post.id}`}>
                            <div className={styles.commentCommentContainer}>
                                    <AiOutlineComment className={styles.commentOnPost}/>
                                    <p>Reply</p>
                            </div>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default PostContainer;
