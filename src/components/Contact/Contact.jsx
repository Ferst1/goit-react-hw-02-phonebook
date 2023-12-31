import PropTypes from 'prop-types';
import { Item } from './Contact.styled';

export function Contact({ contact, onDelete }) {
  const { name, number } = contact;
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelItem: PropTypes.func,
};