import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllAlbums } from '../../../../store/albums';
import './MyAlbum.css';

const MyAlbums = () => {
    const albums = useSelector(state => Object.values(state.albums));
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAlbums());
    }, [dispatch])

    return (
        <div>
            {albums.map((album) => (
                <div>
                    {album.userId === sessionUser.id &&
                    <Link to={`/album/${album.id}`}>
                        <div>
                            <p className='myAlbumTitle'>{album.title}</p>
                            <p className='myAlbumDescription'>{album.description}</p>
                        </div>
                    </Link>
                    }
                </div>
            ))}
        </div>
    )
}

export default MyAlbums;
