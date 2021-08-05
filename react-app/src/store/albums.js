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
