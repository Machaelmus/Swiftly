const GET_ALBUMS = 'albums/GET_ALBUMS';
const GET_ALBUM = 'albums/GET_ALBUM';
const CREATE_ALBUM = 'albums/CREATE_ALBUM';
// const EDIT_ALBUM = 'albums/EDIT_ALBUM';
const DELETE_ALBUM = 'albums/DELETE_ALBUM';


const getAlbums = (albums) => ({
    type: GET_ALBUMS,
    albums,
});

const getAlbum = (album) => ({
    type: GET_ALBUM,
    album,
});

const createAlbum = (album) => ({
    type: CREATE_ALBUM,
    album,
});

// const editAlbum = (album) => ({
//     type: EDIT_ALBUM,
//     album,
// });

const deleteAlbum = (album) => ({
    type: DELETE_ALBUM,
    album,
});

export const getAllAlbums = () => async (dispatch) => {
    const response = await fetch('/api/albums');
    if(response.ok) {
        const everyAlbum = await response.json()
        dispatch(getAlbums(everyAlbum))
    }
}

export const getSingleAlbum = (id) => async (dispatch) => {
    const response = await fetch(`/api/albums/${id}`);
    if(response.ok) {
        const oneAlbum = await response.json()
        dispatch(getAlbum(oneAlbum))
    }
}

export const createAnAlbum = (album) => async (dispatch) => {
    const response = await fetch('/api/albums', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(album),
    })

    if(response.ok) {
        const createdAlbum = await response.json()
        dispatch(createAlbum(createdAlbum))
    }
}

// export const editAnAlbum = (id, album) => async (dispatch) => {
//     const response = await fetch(`/api/albums/${id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(album)
//     })

//     if(response.ok) {
//         const editedAlbum = await response.json()
//         dispatch(editAlbum(editedAlbum))
//         return editedAlbum;
//     }
// }

export const deleteAnAlbum = (id) => async (dispatch) => {
    const response = await fetch(`/api/albums/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    if(response.ok) {
        const deletedAlbum = await response.json()
        dispatch(deleteAlbum(deletedAlbum))
    }
}

const initialState = {}

const albumsReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ALBUM:
            const oneAlbum = {...state};
            oneAlbum[action.album.id] = action.album
            return oneAlbum;
        case GET_ALBUMS:
            const allAlbums = {}
            action.albums.albums.forEach((album) => {
                allAlbums[album.id] = album
            })
            return allAlbums;
        // case EDIT_ALBUM:
        case CREATE_ALBUM:
            return {
                ...state,
                [action.album.id]: action.album
            }
        case DELETE_ALBUM:
            const albumToDelete = {...state}
            delete albumToDelete[action.album.id];
            return albumToDelete;
        default:
            return state;
    }
}

export default albumsReducer;
