import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { createOneReply } from '../../store/replies';
import styles from './CreateReply.module.css';

const CreateReplyForm = () => {
    const {id} = useParams()
    const [replyText, setReplyText] = useState('');
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const posts = useSelector(state => Object.values(state.posts))
    const createReply = async (e) => {
        e.preventDefault();

        const replyInfo = {
            reply: replyText,
            userId: sessionUser.id,
            postId: id,
            timeOfReply: Date.now()
        }
        dispatch(createOneReply(replyInfo));
    }

    return (
        <div className={styles.createReplyDiv}>
            <div className={styles.createReplyPersonContainer}>
                <img className={styles.createReplyImage} src={sessionUser.profileImage}></img>
                <h3 className={styles.createReplyUser}>{sessionUser.username}</h3>
            </div>
            <form className={styles.createReplyForm} onSubmit={createReply}>
                <textarea required className={styles.createReplyTextArea} onChange={(e) => setReplyText(e.target.value)} placeholder="Reply here"></textarea>
                <br/>
                <button className={styles.createReplySubmitButton} type="submit">Reply</button>
            </form>
        </div>
    )
}

export default CreateReplyForm;
