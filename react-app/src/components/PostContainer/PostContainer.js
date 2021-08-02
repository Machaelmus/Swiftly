import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editOnePost, deleteOnePost } from '../../store/posts';
import { likeOnePost, unlikeOnePost } from '../../store/likes';
import Modal from 'react-modal';
import styles from '../Home/Home.module.css';
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineComment, AiOutlineHeart} from 'react-icons/ai';

// REACT-MODAL SETTINGS
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
    // State for the first dropdown containing words "edit, delete"
    const [openOptions, setOpenOptions] = useState(false);
    const dispatch = useDispatch()
    // State for editing a review
    const [editText, setEditText] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    // State for opening the react-modal itself
    const [open, setOpen] = useState(false);

    // Edit Post Form dispatch function
    const editFormInfo = (e) => {
        e.preventDefault()
        const formInfo = {
            post: editText,
            userId: sessionUser.id,
            timeOfPost: Date.now()
        }
        dispatch(editOnePost(post.id, formInfo));
        setOpen(false);
        setOpenOptions(false);
    }

    // Delete Post dispatch function
    const deletePostFunc = () => {
        dispatch(deleteOnePost(post.id))
    }

    // Functions to change state of react-modal
    function openModalOnClick() {
        console.log('OPEN MODAL')
        setOpen(true);
    }
    function closeModalOnClick() {
        setOpenOptions(false)
        setOpen(false);
    }
    // Function to enable options dropdown
    // This dropdown contains the "edit, delete" words
    const enableOptions = () => {
        if(openOptions) return;
        setOpenOptions(true)
    }

    const likeAPost = (e) => {
        e.preventDefault();

        const likeInfo = {
            userId: sessionUser.id,
            postId: post.id,
        }
        dispatch(likeOnePost(post.id, likeInfo))
    }

    const unlikeAPost = (e) => {
        e.preventDefault()
        dispatch(unlikeOnePost(post.id))
    }

    // Use effects for opening and closing the modal based on click events
    useEffect(() => {
        const clickOutside = (event) => {
            if(editDeleteDropdown.current && !editDeleteDropdown.current.contains(event.target)) {
                console.log('Clicking outside the container')
                setOpenOptions(false)
            }
        }
        const body = document.getElementById('root')
        body.addEventListener('click', clickOutside)
        setOpenOptions(false)
        return () => {
            body.removeEventListener('click', clickOutside)
            setOpenOptions(false)
        }
    }, [editDeleteDropdown])

    return (
        <>
            <div ref={editDeleteDropdown} className={styles.postDiv}>
                {(sessionUser.id === post.user.id) &&
                    <button onClick={enableOptions} className={styles.optionsButton}><BsThreeDots className={styles.threeDots}/></button>}
            {openOptions && (
                <div className={styles.optionsDrop}>
                    <p className={styles.editOpenDropdown} onClick={openModalOnClick}>Edit</p>
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
                    {/* <p>Delete</p> */}
                </div>
            )}
                <div className={styles.userProfileImageAndUsernameContainer}>
                    <img className={styles.postUserImageSrc} src={post.user.profileImage}></img>
                    <Link to={`/users/${post.user.id}`}>
                        <h1 className={styles.postUsernameYEH}>{post.user.username}</h1>
                    </Link>
                </div>
                    <div>
                        <p className={styles.eachPostTime}>{post.timeOfPost}</p>
                    <Link to={`/posts/${post.id}`}>
                        <p className={styles.eachPostPost}>{post.post}</p>
                    </Link>
                    <div className={styles.likedPostContainer}>
                        <AiOutlineHeart onClick={likeAPost} className={styles.likedThumbsUp}/>
                        <AiOutlineComment className={styles.commentOnPost}/>
                    </div>
                    </div>
            </div>
        </>
    )
}
export default PostContainer;
