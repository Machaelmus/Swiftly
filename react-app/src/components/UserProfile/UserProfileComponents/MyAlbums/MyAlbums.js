import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllAlbums } from '../../../../store/albums';

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
                    <div>
                        <p>{album.title}</p>
                        <p>{album.description}</p>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default MyAlbums;
