import NewPost from './NewPost';
import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
    
    return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
            <Post author="Yuri" body="Amazing!" />
            <Post author="Max" body="lol!!" />
    </ul>
    </>    
    );
}

export default PostsList;
