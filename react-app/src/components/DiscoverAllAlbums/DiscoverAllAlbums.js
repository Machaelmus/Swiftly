import React, {useEffect} from 'react';
import { getAllAlbums } from '../../store/albums';
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
                    <h3 className='allAlbumsTitle'>{album.title}</h3>
                    <p className='allAlbumsCreatedBy'>Album created by: <span className='allAlbumsCreatedBySpan'>{album.user.username}</span></p>
                    <img className='allAlbumsPhoto' src={album.coverPhotoUrl}/>
                    <p className='allAlbumsDescription'>{album.description}</p>
                </div>
            ))}
        </div>
    )
}

export default DiscoverAllAlbums;
