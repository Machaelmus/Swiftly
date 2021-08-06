import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAnAlbum } from '../../store/albums';
import styles from '../Albums/albums.module.css';

const AllAlbums = ({album}) => {
    const dispatch = useDispatch();
    const deleteOneAlbum = (e) => {
        e.preventDefault()

        dispatch(deleteAnAlbum(album.id))
    }

    return (
        <div className={styles.eachAlbumBackground}>
            <Link to={`/album/${album.id}`}>
                <h2>{album.title}</h2>
            </Link>
            <img src={album.coverPhotoUrl}></img>
            <p>{album.description}</p>
            <button className={styles.eachAlbumDelete} onClick={deleteOneAlbum}>Delete Album</button>
        </div>
    )
}

export default AllAlbums;