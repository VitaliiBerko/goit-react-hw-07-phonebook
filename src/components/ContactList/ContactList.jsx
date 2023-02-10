import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/contacts.selector';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  

  const findedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {findedContacts &&
        findedContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
