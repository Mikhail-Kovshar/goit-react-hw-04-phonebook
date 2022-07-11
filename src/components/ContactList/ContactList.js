import s from './ContactList.module.css';


import Contact from 'components/Contact/Contact';

export default  function ContactsList ({contacts, onDeleteContact}) {
 
    return (
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }


