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
            <h1 className={styles.addToStory}>Add to story</h1>
            <form onSubmit={createAnImage} className={styles.addImageForm}>
                <select className={styles.selectMenu} onChange={(e) => setSelect(e.target.value) }>
                    <option defaultValue='selected'>Choose an album</option>
                    {albums.map((album) => (
                        <option key={album.id} value={select}>{album.title}</option>
                        ))}
                </select>
                <label>Upload image</label>
                <input className={styles.imageURLInput} onChange={(e) => setImageUrl(e.target.value)} type='text'></input>
                <button className={styles.submitAddImage} type='submit'>Add Image</button>
            </form>
        </div>
    )
}

export default AddImageForm;
