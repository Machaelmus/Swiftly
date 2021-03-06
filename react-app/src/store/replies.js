const GET_REPLIES = 'replies/GET_REPLIES';
const CREATE_REPLY = 'replies/CREATE_REPLY';
const EDIT_REPLY = 'replies/EDIT_REPLY';
const DELETE_REPLY = 'replies/DELETE_REPLY';

const getReplies = (replies) => ({
    type: GET_REPLIES,
    replies,
});

const createReply = (reply) => ({
    type: CREATE_REPLY,
    reply,
});

const editReply = (reply) => ({
    type: EDIT_REPLY,
    reply,
});

const deleteReply = (reply) => ({
    type: DELETE_REPLY,
    reply,
});

export const getAllReplies = () => async (dispatch) => {
    const response = await fetch('/api/replies');

    if(response.ok) {
        const allReplies = await response.json();
        dispatch(getReplies(allReplies))
    }
}

export const createOneReply = (reply) => async (dispatch) => {
    const response = await fetch('/api/replies', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reply)
    });

    if(response.ok) {
        const createdReply = await response.json();
        dispatch(createReply(createdReply))
        return createdReply;
    }
}

export const editOneReply = (id, reply) => async (dispatch) => {
    const response = await fetch(`/api/replies/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reply)
    });
    if(response.ok) {
        const editedReply = await response.json();
        dispatch(editReply(editedReply))
        return editedReply;
    }

}

export const deleteOneReply = (id) => async (dispatch) => {
    const response = await fetch(`/api/replies/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok) {
        const deletedReply = await response.json();
        dispatch(deleteReply(deletedReply))

    }
}

const initialState = {};

const repliesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_REPLIES:
            const allReplies = {}
            action.replies.replies.forEach((reply) => {
                allReplies[reply.id] = reply;
            })
            return allReplies;
        case EDIT_REPLY:
        case CREATE_REPLY:
            return {
                ...state,
                [action.reply.id]: action.reply
            }
        case DELETE_REPLY:
            const replyDeletion = {...state}
            delete replyDeletion[action.reply.id]
            return replyDeletion;
        default:
            return state;
    }
}

export default repliesReducer;
