import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
