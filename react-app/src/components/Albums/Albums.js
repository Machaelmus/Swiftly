import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAlbums } from '../../store/albums';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import styles from './albums.module.css';

const Albums = () => {
    const albums = useSelector(state => state.albums)
    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(getAllAlbums())
    // }, [dispatch]);


    return (
        <div className={styles.albumContainer}>

            <div className={styles.create}>
                <CreateAlbumForm/>
            </div>
            {/* ========================== */}
            <div className={styles.list}>

                <h1>Hello from the albums page!</h1>

            </div>


        </div>
    )
}

export default Albums;
