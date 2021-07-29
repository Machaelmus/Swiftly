const GET_REPLIES = 'replies/GET_REPLIES';

const getReplies = (replies) => ({
    type: GET_REPLIES,
    replies,
});

export const getAllReplies = () => async (dispatch) => {
    const response = await fetch('/api/replies');

    if(response.ok) {
        const allReplies = await response.json();
        dispatch(getReplies(allReplies))
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
        default:
            return state;
    }
}

export default repliesReducer;
