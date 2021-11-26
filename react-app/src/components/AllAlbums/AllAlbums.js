import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAnAlbum } from '../../store/albums';
import styles from '../Albums/albums.module.css';
import { BsThreeDots } from 'react-icons/bs';
import homestyles from '../Home/Home.module.css';


const AllAlbums = ({album}) => {
    const [openOptions, setOpenOptions] = useState(false);
    const dispatch = useDispatch();
    const deleteAlbumDrop = useRef(null);

    const deleteOneAlbum = (e) => {
        e.preventDefault()

        dispatch(deleteAnAlbum(album.id))
    }

    const enableOptions = () => {
        if(openOptions) return;
        setOpenOptions(true)
    }

    useEffect(() => {
        const clickOutside = (event) => {
            if(deleteAlbumDrop.current && !deleteAlbumDrop.current.contains(event.target)) {
                setOpenOptions(false)
            }
        }
        const body = document.getElementById('root')
        body.addEventListener('click', clickOutside)
        setOpenOptions(false)
        return () => {
            body.removeEventListener('click', clickOutside)
            setOpenOptions(false)
        }
    }, [deleteAlbumDrop])

    return (
        <>
            <div ref={deleteAlbumDrop} className={styles.eachAlbumBackground}>
                <button onClick={enableOptions} className={homestyles.optionsButton}><BsThreeDots className={homestyles.threeDots}/></button>
            {openOptions && (
                <div className={homestyles.optionsDrop}>
                    <h4>Options</h4>
                    <button className={styles.eachAlbumDelete} onClick={deleteOneAlbum}>Delete</button>
                </div>
            )}
                <Link className={styles.albumTitleName} to={`/album/${album.id}`}>
                    <h2>{album.title}</h2>
                </Link>
                <img alt='wow' src={album.coverPhotoUrl}></img>
                <p>{album.description}</p>
            </div>
            <div>
            </div>
        </>
    )
}

export default AllAlbums;
