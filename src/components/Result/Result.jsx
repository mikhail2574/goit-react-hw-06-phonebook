import styles from './Result.module.css';
import PropTypes from 'prop-types';
import { remove } from 'redux/counter/actions';
import { useDispatch } from 'react-redux';

const Result = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  return (
    <li className={styles.card}>
      <p className={styles.name}>
        {name} 📞 {number}
      </p>
      <button
        className={styles.deleteBtn}
        data-id={id}
        type="button"
        onClick={() => dispatch(remove(id))}
      >
        🗑️
      </button>
    </li>
  );
};

Result.propTypes = {
  data: PropTypes.object,
  deleteItem: PropTypes.func,
};

export default Result;