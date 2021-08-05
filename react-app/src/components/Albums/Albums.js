import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAlbums, deleteAnAlbum } from '../../store/albums';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import AllAlbums from '../AllAlbums/AllAlbums';
import styles from './albums.module.css';

const Albums = () => {
    const albums = useSelector(state => Object.values(state.albums))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllAlbums())
    }, [dispatch]);


    return (
        <div className={styles.albumContainer}>

            <div className={styles.create}>
                <CreateAlbumForm/>
            </div>
            {/* ========================== */}
            <div className={styles.list}>

                <h1>Hello from the albums page!</h1>
                <div>
                    {albums.map((album) => (
                        <AllAlbums key={album.id} album={album}/>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Albums;
