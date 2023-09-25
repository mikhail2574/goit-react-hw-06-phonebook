import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { filter } from 'components/redux/counter/actions';

const Filter = ({ dispatch }) => {
  const searchFocus = () => {
    document.querySelector('form').style.display = 'none';
  };
  const searchOffFocus = () => {
    document.querySelector('form').style.display = 'flex';
  };
  function filterItem(e) {
    dispatch(filter(e.target.value));
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
