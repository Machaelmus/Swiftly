import React from 'react';
import styles from '../Albums/albums.module.css';

const AllAlbums = ({album}) => {

    return (
        <div className={styles.eachAlbumBackground}>
            <h2>{album.title}</h2>
            <img src={album.coverPhotoUrl}></img>
            <p>{album.description}</p>
        </div>
    )
}

export default AllAlbums;
