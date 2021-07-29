import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { createOneReply } from '../../store/replies';
import styles from './CreateReply.module.css';

const CreateReplyForm = () => {
    const [replyText, setReplyText] = useState('');
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const createReply = async (e) => {
        e.preventDefault();

        const replyInfo = {
            reply: replyText,
            userId: sessionUser.id,
            timeOfReply: Date.now()
        }
        dispatch(createOneReply(replyInfo));
    }

    return (
        <div className={styles.createReplyDiv}>
            <h3 className={styles.createReplyUser}>Hey {sessionUser.username}!</h3>
            <form className={styles.createReplyForm} onSubmit={createReply}>
                <textarea className={styles.createReplyTextArea} onChange={(e) => setReplyText(e.target.value)} placeholder="Reply here"></textarea>
                <br/>
                <button className={styles.createReplySubmitButton} type="submit">Reply</button>
            </form>
        </div>
    )
}

export default CreateReplyForm;
