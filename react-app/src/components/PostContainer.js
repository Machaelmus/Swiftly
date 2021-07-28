import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editOnePost, deleteOnePost } from '../store/posts';
import Modal from 'react-modal';
import styles from './Home/Home.module.css';

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
    const [openOptions, setOpenOptions] = useState(false);
    const dispatch = useDispatch()
    const [editText, setEditText] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const [open, setOpen] = useState(false);

    // Edit Post Form dispatch function
    const editFormInfo = (e) => {
        e.preventDefault()
        const formInfo = {
            post: editText,
            userId: sessionUser.id,
            timeOfPost: Date.now()
        }
        dispatch(editOnePost(post.id, formInfo))
        setOpen(false)
    }

    // Delete Post dispatch function
    const deletePostFunc = () => {
        dispatch(deleteOnePost(post.id))
    }

    // Functions to change state of modal
    function openModalOnClick() {
        setOpen(true);
    }
    function closeModalOnClick() {
        setOpen(false);
    }
    // Function to enable options dropdown
    const enableOptions = () => {
        if(openOptions) return;
        setOpenOptions(true)

    }
    // Use effect for opening and closing the modal based on click events
    const removeOptions = () => {
        if(!openOptions) return;
        setOpenOptions(false)
    }
    useEffect(() => {
        if (!openOptions) return;
        document.addEventListener('click', removeOptions);
        return () =>document.removeEventListener('click', removeOptions)
    }, [setOpenOptions, removeOptions])

    useEffect(() => {
        if(!openOptions) return;
        document.addEventListener('click', setOpenOptions(true))
    }, [setOpenOptions])

    return (
        <>
            <div className={styles.postDiv}>
                <button onClick={enableOptions} className={styles.optionsButton}>...</button>
            {openOptions && (
                <div className={styles.optionsDrop}>
                    <p onClick={openModalOnClick}>Edit</p>
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
                    <p>Delete</p>
                </div>
            )}
                <p className={styles.eachPostTime}>{post.timeOfPost}</p>
                <h2 className={styles.eachPostPost}>{post.post}</h2>
            </div>
        </>
    )
}
export default PostContainer;
