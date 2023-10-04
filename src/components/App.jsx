import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useSelector } from 'react-redux';

export const App = () => {
  // const defaultContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  // );
  // const [filter, setFilters] = useState('');

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <Phonebook></Phonebook>
      <h2>Contacts</h2>
      <Filter />
      {visibleItems.length > 0 ? (
        <ContactsList contacts={visibleItems}></ContactsList>
      ) : (
        <span>We didn't find this person</span>
      )}

      <GlobalStyle />
    </Layout>
  );
};
