import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editOnePost } from '../../store/posts';
import styles from './EditPost.module.css'
const EditPostForm = ({post}) => {
    const dispatch = useDispatch()
    const [editText, setEditText] = useState('');
    const sessionUser = useSelector(state => state.session.user);

    const editFormInfo = (e) => {
        e.preventDefault()

        const formInfo = {
            post: editText,
            userId: sessionUser.id,
            timeOfPost: Date.now()
        }
        dispatch(editOnePost(post.id, formInfo))
    }

    return (
        <>
            <div className={styles.bigChungusContainer}>
                <form onSubmit={editFormInfo}>
                    <h2>Edit Post</h2>
                    <textarea onChange={(e) => setEditText(e.target.value)}></textarea>
                    <br/>
                    <button>Edit Post</button>
                </form>
            </div>
        </>
    )
}

export default EditPostForm;
