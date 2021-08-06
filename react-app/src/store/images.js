const GET_IMAGES = 'images/GET_IMAGES';
const ADD_IMAGE = 'images/ADD_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGE';

const getImages = (images) => ({
    type: GET_IMAGES,
    images,
});

const addImage = (image) => ({
    type: ADD_IMAGE,
    image,
});

const deleteImage = (image) => ({
    type: DELETE_IMAGE,
    image,
});

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images');

    if(response.ok) {
        const allImages = await response.json()
        dispatch(getImages(allImages))
        return allImages;
    }
}

export const createOneImage = (image) => async (dispatch) => {
    const response = await fetch('/api/images', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(image)
    })

    if(response.ok) {
        const createdImage = await response.json();
        dispatch(addImage(createdImage))
        return createdImage;
    }
}

export const deleteOneImage = (id) => async (dispatch) => {
    const response = await fetch(`/api/images/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    if(response.ok) {
        const deletedImage = await response.json();
        dispatch(deleteImage(deletedImage))
    }
}

const initialState = {};

const imagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_IMAGES:
            const allImages = {}
            action.images.images.forEach((image) => {
                allImages[image.id] = image
            })
            return allImages;
        case ADD_IMAGE:
            return {
                ...state,
                [action.image.id]: action.image
            }
        case DELETE_IMAGE:
            const imageToDelete = {...state}
            delete imageToDelete[action.image.id];
            return imageToDelete;
        default:
            return state;
    }
}

export default imagesReducer;
