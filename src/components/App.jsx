
import { useState, useEffect } from 'react';
import s from './App.module.css'
import ContactsList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';


export default function App () {

  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ??
      [])

      const [filter, setFilter] = useState('');


      useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);



      const saveContact = newContact => {
        contacts.find(
          contact =>
            contact.name === newContact.name || contact.number === newContact.number
        )
          ? showAlert(newContact.name)
          : setContacts(prevState => [{ id: nanoid(5), name: newContact.name, number: newContact.number }, ...prevState]);
      };

  const showAlert = name => {
    const message = `${name} is already in contacts`;
    alert(message);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  };


  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 18,
        }}
      >
        <h2 className={s.title}>Phonebook</h2>
        <div className={s.wrapper__phonebook}>
          <Form saveContact={saveContact} />
        </div>

        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <div className={s.wrapper__contacts}>
          {contacts.length !== 0 ? (
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }



