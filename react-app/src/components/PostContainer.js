import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from './Home/Home.module.css';

const PostContainer = ({post}) => {
    const [openOptions, setOpenOptions] = useState(false);

    const enableOptions = () => {
        if(openOptions) {
            return;
        } else {
            setOpenOptions(true)
        }
    }

    useEffect(() => {
        if (!openOptions) {
            return;
        } else {
            const removeOptions = () => {
                setOpenOptions(false)
            }
            document.addEventListener('click', removeOptions);
            return () => document.removeEventListener('click', removeOptions);
        }
    }, [setOpenOptions])

    return (

        <>
            <div className={styles.postDiv}>
                <button onClick={enableOptions} className={styles.optionsButton}>...</button>
            {openOptions && (
                <div className={styles.optionsDrop}>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            )}
                <p className={styles.eachPostTime}>{post.timeOfPost}</p>
                <h2 className={styles.eachPostPost}>{post.post}</h2>
            </div>
        </>
    )
}
export default PostContainer;
