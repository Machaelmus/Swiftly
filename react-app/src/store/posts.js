const GET_POSTS = 'posts/GET_POSTS';


const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
});

export const getAllPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts');

    if(response.ok) {
        const allPosts = await response.json();
        dispatch(getPosts(allPosts));
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
        default:
            return state;
    }
}

export default postsReducer;
