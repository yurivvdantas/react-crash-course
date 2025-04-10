import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({ children }) {
  const navigate = useNavigate();

  function closeModalHandler() {
    navigate('..');
  }

  return (
    <div className={classes.backdrop} onClick={closeModalHandler}>
      <dialog
        open
        className={classes.modal}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
