import React from 'react';
import styles from '../Albums/albums.module.css';


const CreateAlbumForm = () => {
    return (
        <div className={styles.albumsCreateFormContainer}>
            <h2 className={styles.albumsFormHeading}>Create an album</h2>
            <div className={styles.albumsFormBackground}>
                <form className={styles.albumsForm}>
                    <input className={styles.albumsInputPhotoUrl} type='text' placeholder='Album Cover Photo'></input>
                    <input className={styles.albumsInputTitle} type='text' placeholder='Title'></input>
                    <textarea className={styles.albumsDescription} placeholder='Description'></textarea>
                    <button className={styles.albumsCreateSubmit} type='submit'>Create Album</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAlbumForm; 
