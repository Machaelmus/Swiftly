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
