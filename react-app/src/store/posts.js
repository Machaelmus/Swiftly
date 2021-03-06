const GET_POSTS = 'posts/GET_POSTS';
const GET_POST = 'posts/GET_POST';
const CREATE_POST = 'posts/CREATE_POST';
const DELETE_POST = 'posts/DELETE_POST';
const EDIT_POST = 'posts/EDIT_POST';

const getPosts = (posts) => ({
    type: GET_POSTS,
    posts,
});

const getPost = (payload) => ({
    type: GET_POST,
    payload,
});

const createPost = (post) => ({
    type: CREATE_POST,
    post,
});

const editPost = (post) => ({
    type: EDIT_POST,
    post,
});

const deletePost = (post) => ({
    type: DELETE_POST,
    post,
});

export const getAllPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts');

    if(response.ok) {
        const allPosts = await response.json();
        dispatch(getPosts(allPosts));
    }
}

export const getOnePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`);

    if(response.ok) {
        const onePost = await response.json();
        dispatch(getPost(onePost));
    }
}

export const createOnePost = (post) => async (dispatch) => {
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    });

    if(response.ok) {
        const createdPost = await response.json()
        dispatch(createPost(createdPost))
        return createdPost;
    }
}

export const editOnePost = (id, post) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })
    if(response.ok) {
        const updatedPost = await response.json();
        dispatch(editPost(updatedPost))
        return updatedPost;
    }
}

export const deleteOnePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        const deletedReview = await response.json()
        dispatch(deletePost(deletedReview))

    }
}

const initialState = {};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POST:
            const onePost = {...state}
            onePost[action.payload.id] = action.payload
            return onePost;
        case GET_POSTS:
            const allPosts = {}
            action.posts.posts.forEach((post) => {
                allPosts[post.id] = post;
            })
            return allPosts;
        case EDIT_POST:
        case CREATE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case DELETE_POST:
            const postToDelete = {...state};
            delete postToDelete[action.post.id];
            return postToDelete;
        default:
            return state;
    }
}

export default postsReducer;
