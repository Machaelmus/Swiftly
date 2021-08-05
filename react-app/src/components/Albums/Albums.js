import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAlbums } from '../../store/albums';
import styles from './albums.module.css';

const Albums = () => {
    const albums = useSelector(state => state.albums)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllAlbums())
    }, [dispatch]);


    return (
        <div className={styles.albumsWholeContainer}>
            <div className={styles.albumsCreateFormContainer}>
                <h2 className={styles.albumsFormHeading}>Create an album</h2>
                <div className={styles.albumsFormBackground}>
                    <form className={styles.albumsForm}>
                        <input type='text' placeholder='Album Cover Photo'></input>
                        <input className={styles.albumsInputTitle} type='text' placeholder='Title'></input>
                        <textarea className={styles.albumsDescription} placeholder='Description'></textarea>
                        <button className={styles.albumsCreateSubmit} type='submit'>Create Album</button>
                    </form>
                </div>
            </div>
            <h1>Hello from the albums page!</h1>
        </div>
    )
}

export default Albums;
