import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getAllPosts} from '../../store/posts';
import CreatePost from '../CreatePostForm/CreatePost';
import styles from './Home.module.css';
import PostContainer from '../PostContainer/PostContainer';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai';
import { getAllAlbums } from '../../store/albums';
import {IoPersonOutline} from 'react-icons/io5';
import {BsBook} from 'react-icons/bs';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts));
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);


    return (
        <>
        {/* CONTAINER */}
        <div className={styles.homeContainer}>
            {/* NAVIGATION */}
            <div className={styles.navigation}>
                <div className={styles.navContain}>
                    <div className={styles.sideNavHome}>
                    <Link className={styles.sideNavLinks} to='/home'>
                        <AiOutlineHome/> <p className={styles.links}>Home</p>
                    </Link>
                    </div>
                    <div className={styles.sideNavStories}>
                    <Link className={styles.sideNavLinks} to='/albums'>
                        <BsBook/><p className={styles.links}>Stories</p>
                    </Link>
                    </div>
                    <div className={styles.sideNavFindUsers}>
                    <Link className={styles.sideNavLinks} to='/users'>
                        <AiOutlineSearch/> <p className={styles.links}>Find users</p>
                    </Link>
                    </div>
                    <div className={styles.sideNavProfile}>
                    <Link className={styles.sideNavLinks} to={`/users/${sessionUser.id}`}>
                        <IoPersonOutline/> <p className={styles.links}>Profile</p>
                    </Link>
                    </div>
                    <button className={styles.sideNavPostButton}>Post</button>
                    <div className={styles.divForProfileStuff}>
                        <img alt='wow' className={styles.navProfileImageForUser} src={sessionUser.profileImage}></img>
                        <div>
                            <Link to={`/users/${sessionUser.id}`}>
                                <p className={styles.navProfileUsername}>{sessionUser.username}</p>
                            </Link>
                            <p className={styles.navProfileHandle}>{sessionUser.handle}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEED */}
            <div className={styles.feed}>
                <div className={styles.homeHeadingContainer}>
                    <h1 className={styles.homeHome}>Home</h1>
                </div>
                <CreatePost/>
                <div className={styles.bigDiv}>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <PostContainer className={styles.postContainerContainer} post={post} key={post.id}/>
                        </div>
                    ))}
                </div>
            </div>
            {/* EXTRA */}
            <div className={styles.extra}></div>
        </div>
        </>
    )
}

export default Home;
