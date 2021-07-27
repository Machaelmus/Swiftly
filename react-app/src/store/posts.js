const GET_POSTS = 'posts/GET_POSTS';
const CREATE_POST = 'posts/CREATE_POST';
const DELETE_POST = 'posts/DELETE_POST';

const getPosts = (posts) => ({
    type: GET_POSTS,
    posts,
});

const createPost = (post) => ({
    type: CREATE_POST,
    post,
});

const deletePost = (post) => ({
    type: DELETE_POST,
    post
})

export const getAllPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts');

    if(response.ok) {
        const allPosts = await response.json();
        dispatch(getPosts(allPosts));
    }
}

export const createOnePost = (club) => async (dispatch) => {
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(club)
    });

    if(response.ok) {
        const createdPost = await response.json()
        // if(createdPost.errors) {
        //     return createdPost;
        // }
        dispatch(createPost(createdPost))
        return createdPost;
    }
}

export const deleteOnePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        const deletedPost = await response.json()
        console.log('BHFDUIKBFHUDSBHUFSDBUYFBDJKSA',deletedPost)
        dispatch(deletePost(deletedPost))
    }
}

const initialState = {};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            const allPosts = {}
            action.posts.posts.forEach((post) => {
                allPosts[post.id] = post;
            })
            return allPosts;
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
