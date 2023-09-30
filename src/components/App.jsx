import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
