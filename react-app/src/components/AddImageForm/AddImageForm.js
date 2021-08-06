import React from 'react';
import {useSelector} from 'react-redux';
import styles from './addimageform.module.css';

const AddImageForm = () => {
    const albums = useSelector(state => Object.values(state.albums));
    const sessionUser = useSelector(state => state.session.user)
    return (
        <div className={styles.addImageFormContainer}>
            <h1>Add to story</h1>
            <form className={styles.addImageForm}>
                <select>
                    <option selected='selected'>Choose an album</option>
                    {albums.map((album) => (
                        <option>{album.title}</option>
                    ))}
                </select>
                <input type='text' placeholder='Image URL'></input>
                <button type='submit'>Add Image</button>
            </form>
        </div>
    )
}

export default AddImageForm;
