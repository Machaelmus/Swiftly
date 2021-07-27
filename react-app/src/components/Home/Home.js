import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllPosts } from '../../store/posts';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts));

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);

    return (
        <>
            {posts.map((post) => (
                <div>
                    <h2>{post.post}</h2>
                </div>
            ))}
        </>
    )
}

export default Home;
