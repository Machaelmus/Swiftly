import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editOnePost, deleteOnePost } from '../../store/posts';
import Modal from 'react-modal';
import styles from './EditPost.module.css'
// import PostContainer from '../PostContainer';
import Select from 'react-select';

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

const EditPostForm = ({post}) => {
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
        dispatch(editOnePost(post.id, formInfo))
        setOpen(false)
    }

    function openModalOnClick() {
        setOpen(true);
    }

    function closeModalOnClick() {
        setOpen(false);
    }

    const deletePostFunc = () => {
        dispatch(deleteOnePost(post.id))
    }

    return (
        <>
            <div className={styles.bigChungusContainer}>
                <button className={styles.firstEditButton} onClick={openModalOnClick}>Options</button>
                <Modal
                style={editModalStyles}
                isOpen={open}
                onRequestClose={closeModalOnClick}
                >
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
            </div>
        </>
    )
}

export default EditPostForm;
