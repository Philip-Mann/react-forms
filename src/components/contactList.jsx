import React from 'react';

export default function ContactList ({ contacts }) {

    const formattedContacts = contacts.map((contact, index) => {
        return <li key={index}>{contact.firstName}</li>
    });

    return (
        <ul>
            {formattedContacts}
        </ul>
    );
}