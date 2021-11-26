import React, { useEffect } from 'react';
import { getSingleAlbum } from '../../store/albums';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllImages, deleteOneImage } from '../../store/images';
import AddImageForm from '../AddImageForm/AddImageForm';
import styles from './singlealbum.module.css';

const SingleAlbum = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const images = useSelector(state => Object.values(state.images));
    const image = images.find((image) => image.id)
    const albums = useSelector(state => Object.values(state.albums));
    const album = albums.find((album) => album.id === +id);

    useEffect(() => {
        dispatch(getSingleAlbum(id))
    }, [dispatch, id])

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
                    {album?.images.length === 0 &&
                        <p className={styles.eachAlbumImageCount}>There are <span className={styles.eachAlbumBoldedImageCount}>no</span> images in this album</p>
                    }
                    {album?.images.length === 1 &&
                        <p className={styles.eachAlbumImageCount}>There is <span className={styles.eachAlbumBoldedImageCount}>one</span> image in this album</p>
                    }
                    {album?.images.length > 1 &&
                        <p className={styles.eachAlbumImageCount}>There are <span className={styles.eachAlbumBoldedImageCount}>{album.images.length}</span> images in this album</p>
                    }
                    <p className={styles.eachAlbumDescription}>{album?.description}</p>
                </div>
                <AddImageForm album={album}/>
            </div>
            <div className={styles.wholeImageContainerInAlbum}>
                {images.map((image) => (
                    <div className={styles.eachWholeImageContainer}>
                        {image?.albumId === album?.id &&
                            <div className={styles.eachImageContainer}>
                                <img alt='wow' className={styles.eachImageInAlbum} src={image.imageUrl}></img>
                                <br/>
                                <button className={styles.deleteButtonForImages} onClick={deleteAnImage}>Remove Image</button>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SingleAlbum;
