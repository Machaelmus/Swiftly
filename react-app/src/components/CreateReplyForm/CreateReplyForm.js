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
        <div className={}>
            <h3>Hey {sessionUser.username}!</h3>
            <form onSubmit={createReply}>
                <textarea onChange={(e) => setReplyText(e.target.value)} placeholder="Reply here"></textarea>
                <br/>
                <button type="submit">Reply</button>
            </form>
        </div>
    )
}

export default CreateReplyForm;
