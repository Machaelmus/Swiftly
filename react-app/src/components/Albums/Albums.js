import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAlbums } from '../../store/albums';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import AllAlbums from '../AllAlbums/AllAlbums';
import styles from './albums.module.css';

const Albums = () => {
    const albums = useSelector(state => Object.values(state.albums))
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllAlbums())
    }, [dispatch]);


    return (
        <>
        <div className={styles.albumContainer}>

            <div className={styles.create}>
                <CreateAlbumForm/>
            </div>
            {/* ========================== */}
            <div className={styles.list}>

                <h1>Your story albums</h1>
                {albums.map((album) => (
                    <div>
                        {album.userId === sessionUser.id &&
                            <AllAlbums key={album.id} album={album}/>
                        }
                    </div>
                ))}

            </div>

        </div>
        </>
    )
}

export default Albums;
