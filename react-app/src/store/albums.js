const GET_ALBUMS = 'albums/GET_ALBUMS';
const CREATE_ALBUM = 'albums/CREATE_ALBUM';
const DELETE_ALBUM = 'albums/DELETE_ALBUM';

const getAlbums = (albums) => ({
    type: GET_ALBUMS,
    albums,
});

const createAlbum = (album) => ({
    type: CREATE_ALBUM,
    album,
});

const deleteAlbum = (album) => ({
    type: DELETE_ALBUM,
    album,
});

export const getAllAlbums = () => async (dispatch) => {
    const response = await fetch('/api/albums');

    if(response.ok) {
        const everyAlbum = await response.json()
        dispatch(getAlbums(everyAlbum))
        return everyAlbum;
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
        return createdAlbum;
    }
}

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
        case GET_ALBUMS:
            const allAlbums = {}
            action.albums.albums.forEach((album) => {
                allAlbums[album.id] = album
            })
            return allAlbums;
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
