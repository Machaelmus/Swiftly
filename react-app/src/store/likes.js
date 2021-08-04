// const LIKE_POST = 'posts/LIKE_POST';
// const UNLIKE_POST = 'posts/UNLIKE_POST';

// //Create
// const likePost = (like) => ({
//     type: LIKE_POST,
//     like,
// });

// //Delete
// const unlikePost = (liked) => ({
//     type: UNLIKE_POST,
//     liked,
// });


// export const likeOnePost = (id, like) => async (dispatch) => {
//     const response = await fetch(`/api/posts/${id}`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(like)
//     })
//     if(response.ok) {
//         const likedPost = await response.json();
//         dispatch(likePost(likedPost))
//         return likedPost;
//     }
// }

// export const unlikeOnePost = (id) => async (dispatch) => {
//     const response = await fetch(`/api/posts/like/${id}`, {
//         method: 'DELETE',
//         headers: {'Content-Type': 'application/json'},
//     })
//     if(response.ok) {
//         const unlikedPost = await response.json()
//         dispatch(unlikePost(unlikedPost))
//         return unlikedPost;
//     }
// }


// const initialState = {}

// const likesReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case LIKE_POST:
//             const oneLike = {...state}
//             oneLike[action.like.id] = action.like
//             return oneLike;
//         case UNLIKE_POST:
//             const unlike = {...state};
//             delete unlike[action.like.id];
//             return unlike;
//         default:
//             return state;
//     }
// }

// export default likesReducer;
