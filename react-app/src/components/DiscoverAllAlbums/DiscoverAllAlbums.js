import React, { useEffect } from 'react';
import { getAllAlbums } from '../../store/albums';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DiscoverAllAlbums.css';

const DiscoverAllAlbums = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.albums));

    useEffect(() => {
        dispatch(getAllAlbums());
    }, [dispatch]);

    return (
        <div className='allAlbumsPageContainer'>
            {albums.map((album) => (
                <div className='allAlbumsContainer'>
                    <Link className='allAlbumsLinkToAlbum' to={`/album/${album.id}`}>
                        <h3 className='allAlbumsTitle'>{album.title}</h3>
                    </Link>
                    <p className='allAlbumsCreatedBy'>Album created by: <Link to={`/users/${album.user.id}`}><span className='allAlbumsCreatedBySpan'>{album.user.username}</span></Link></p>
                    {album.images.length === 0 &&
                        <p className='allAlbumsNumberOfImages'><span className='allAlbumsNumberOfImagesSpan'>0</span> images</p>
                    }
                    {album.images.length === 1 &&
                        <p className='allAlbumsNumberOfImages'><span className='allAlbumsNumberOfImagesSpan'>1</span> image</p>
                    }
                    {album.images.length > 1 &&
                        <p className='allAlbumsNumberOfImages'><span className='allAlbumsNumberOfImagesSpan'>{album?.images?.length}</span> images</p>
                    }
                    <img className='allAlbumsPhoto' src={album.coverPhotoUrl}/>
                    <p className='allAlbumsDescription'>{album.description}</p>
                </div>
            ))}
        </div>
    )
}

export default DiscoverAllAlbums;
