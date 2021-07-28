import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIndividualPost } from '../../store/posts';
import styles from './singlepost.module.css';

const SinglePostPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const posts = useSelector(state => Object.values(state.posts));
    const singlePost = posts.find((post) => post.id === +id);
    console.log('SINGLE POST ==>', posts);

    useEffect(() => {
        dispatch(getIndividualPost(id))
    })

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default SinglePostPage;
