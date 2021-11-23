import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReplies } from '../../../../store/replies';

const MyReplies = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const replies = useSelector(state => Object.values(state.replies));

    useEffect(() => {
        dispatch(getAllReplies());
    }, [dispatch]);

    return (
        <div>
            {replies.map((reply) => (
                <div>
                    {reply.userId === sessionUser.id &&
                        <div>
                            <p>{reply.user.username}</p>
                            <p>{reply.reply}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default MyReplies;
