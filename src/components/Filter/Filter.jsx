// import PropTypes from 'prop-types';
import s from './filter.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts.selector';
import { searchFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const handlerFilter = e => {
    dispatch(searchFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={s.filter}>
      <label htmlFor={filterInputId} className={s.title}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={handlerFilter}
        id={filterInputId}
        value={filter}
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
