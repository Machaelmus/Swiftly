import React from 'react';
import styles from '../Albums/albums.module.css';

const AllAlbums = ({album}) => {

    return (
        <div>
            <h1>{album.title}</h1>
            <img src={album.coverPhotoUrl}></img>
            <p>{album.description}</p>
        </div>
    )
}

export default AllAlbums;
