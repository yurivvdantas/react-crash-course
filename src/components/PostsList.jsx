import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

function PostsList() {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  console.log(posts);

  function addPostsHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
