import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  );
  const [filter, setFilters] = useState('');

  const addToContacts = contact => {
    const existingContact = contacts.find(
      c =>
        c.name.toLowerCase() === contact.name.toLowerCase() ||
        c.number === contact.number
    );

    if (existingContact) {
      alert('Contact already exists!');
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: nanoid(), ...contact },
      ]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleChange = filter => {
    setFilters(filter);
  };

  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <Phonebook onAdd={addToContacts}></Phonebook>
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChange}></Filter>

      {visibleItems.length > 0 ? (
        <ContactsList
          componentsData={visibleItems}
          onDelete={deleteContact}
        ></ContactsList>
      ) : (
        <span>We didn't find this person</span>
      )}

      <GlobalStyle />
    </Layout>
  );
};
