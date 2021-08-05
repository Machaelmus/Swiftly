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
