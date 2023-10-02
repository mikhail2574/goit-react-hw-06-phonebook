import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { filterItems } from '../../redux/counter/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const searchFocus = () => {
    document.querySelector('form').style.display = 'none';
  };
  const searchOffFocus = () => {
    document.querySelector('form').style.display = 'flex';
  };
  function filterItem(e) {
    dispatch(filterItems(e.target.value));
  }

  return (
    <div className={styles.search}>
      <h2>Find contact by name</h2>
      <input
        className={styles.inputSearch}
        type="text"
        name="search"
        onInput={filterItem}
        onFocus={searchFocus}
        onBlur={searchOffFocus}
      />
    </div>
  );
};

Filter.propTypes = {
  filterItem: PropTypes.func,
};

export default Filter;
