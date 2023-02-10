import PropTypes from 'prop-types';
import s from './contactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={s.item}>
      {name} : {phone}
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
