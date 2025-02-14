import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
    return (<ul className={classes.posts}>
            <Post author="Yuri" body="Amazing!" />
            <Post author="Max" body="lol!!" />
    </ul>
    );
}

export default PostsList;