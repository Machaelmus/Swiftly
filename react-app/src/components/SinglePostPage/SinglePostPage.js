import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './singlepost.module.css';

const SinglePostPage = () => {
    const {id} = useParams();
    const posts = useSelector(state => Object.values(state.posts));
    const singlePost = posts.find((post) => post.id === +id);
    console.log('SINGLE POST ==>', singlePost);
    
    return (
        <div>

        </div>
    )
}

export default SinglePostPage;
