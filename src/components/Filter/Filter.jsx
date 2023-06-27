import css from './Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.Filter__label} htmlFor="filter">
      Find contacts by name
      <input
        className={css.Filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};