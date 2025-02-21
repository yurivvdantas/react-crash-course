import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Yuri" body="Lol" />
      </ul>
    </>
  );
}

export default PostsList;
