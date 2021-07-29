import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../store/posts';


const SinglePost = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    

    return (
        <div>

        </div>
    )
}

export default SinglePost;
