import {
  List,
  ListElem,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListElem key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </ListElem>
        );
      })}
    </List>
  );
};
