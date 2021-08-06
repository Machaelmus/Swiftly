import React, {useEffect} from 'react';
import { getSingleAlbum } from '../../store/albums';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllImages, deleteOneImage } from '../../store/images';
import AddImageForm from '../AddImageForm/AddImageForm';
import styles from './singlealbum.module.css';

const SingleAlbum = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const images = useSelector(state => Object.values(state.images));
    const image = images.find((image) => image.id)
    const albums = useSelector(state => Object.values(state.albums));
    const album = albums.find((album) => album.id);
    // const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getSingleAlbum(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])

    const deleteAnImage = (e) => {
        e.preventDefault();
        dispatch(deleteOneImage(image.id))
    }


    return (
        <div className={styles.singleAlbumContainer}>
            <div className={styles.flexThis}>
                <div>
                    <h1 className={styles.eachAlbumTitle}>{album?.title}</h1>
                    <p className={styles.eachAlbumDescription}>{album?.description}</p>
                </div>
                <AddImageForm album={album}/>
            </div>
            <div className={styles.wholeImageContainerInAlbum}>
                {images.map((image) => (
                    <div className={styles.eachImageContainer}>
                        <img alt='wow' className={styles.eachImageInAlbum} src={image.imageUrl}></img>
                        <button onClick={deleteAnImage}>Remove Image</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SingleAlbum;
