import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAnAlbum } from '../../store/albums';
import styles from '../Albums/albums.module.css';

const CreateAlbumForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [coverPhotoUrl, setCoverPhotoUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();


    const createOneAlbum = (e) => {
        e.preventDefault();

        const albumInfo = {
            userId: sessionUser.id,
            coverPhotoUrl: coverPhotoUrl,
            title: title,
            description: description,
            albumCreatedAt: new Date()
        }
        dispatch(createAnAlbum(albumInfo))
    }

    return (
        <div className={styles.albumsCreateFormContainer}>
            <h2 className={styles.albumsFormHeading}>Create an album</h2>
            <div className={styles.albumsFormBackground}>
                <form onSubmit={createOneAlbum} className={styles.albumsForm}>
                    <label className={styles.createAlbumLabel}>Photo URL</label>
                    <input placeholder='Cover Photo URL' onChange={(e) => setCoverPhotoUrl(e.target.value)} className={styles.albumsInputPhotoUrl} type='text'></input>
                    <label className={styles.createAlbumLabel}>Album Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} className={styles.albumsInputTitle} type='text' ></input>
                    <label className={styles.createAlbumLabel}>Description</label>
                    <textarea placeholder='Description' onChange={(e) => setDescription(e.target.value)} className={styles.albumsDescription}></textarea>
                    <button className={styles.albumsCreateSubmit} type='submit'>Create Album</button>
                </form>
            </div>
            <div className={styles.albumsDiscoverContainer}>
                <button className={styles.albumsDiscoverButton}>Discover more albums</button>
            </div>
        </div>
    )
}

export default CreateAlbumForm;
