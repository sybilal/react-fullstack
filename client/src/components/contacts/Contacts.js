import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map((elm) => (
        <ContactItem key={elm.id} contact={elm}/>
        
      ))}
    </>
  );
};

export default Contacts;
