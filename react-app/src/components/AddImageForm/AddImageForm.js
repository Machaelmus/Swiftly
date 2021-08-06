import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createOneImage } from '../../store/images';
import styles from './addimageform.module.css';

const AddImageForm = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [select, setSelect] = useState('')
    const albums = useSelector(state => Object.values(state.albums));
    const album = albums.find((album) => album.id);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const createAnImage = (e) => {
        e.preventDefault();

        const imageInfo = {
            userId: sessionUser.id,
            albumId: album.id,
            imageUrl: imageUrl,
        }

        dispatch(createOneImage(imageInfo))
    }

    return (
        <div className={styles.addImageFormContainer}>
            <h1>Add to story</h1>
            <form onSubmit={createAnImage} className={styles.addImageForm}>
                <select onChange={(e) => setSelect(e.target.value) }>
                    <option defaultValue='selected'>Choose an album</option>
                    {albums.map((album) => (
                        <option value={select}>{album.title}</option>
                    ))}
                </select>
                <input onChange={(e) => setImageUrl(e.target.value)} type='text' placeholder='Image URL'></input>
                <button type='submit'>Add Image</button>
            </form>
        </div>
    )
}

export default AddImageForm;
