import React, { useState } from 'react';
// { useState } is a hook, a function
import ContactList from './contactList';
import fields from '../mocks/fields.json';


export default function Form() {

    const [contact, setContact] = useState({});
    const [submittedContacts, setSubmittedContacts] = useState([]);

    const handleChange = e => {
        const {id, value} = e.target
        const updatedContact = Object.assign({}, contact, {     // creates a new object for its value
            ...contact,     // ... splits things up into key: value pairs; spread syntax
            [id]: value     // adds to the contact object
        });
        setContact(updatedContact);
    };
    const handleSubmit = e => {
        e.preventDefault();
        const updatedSubmissions = submittedContacts.concat([contact]);
        setSubmittedContacts(updatedSubmissions);
        setContact({});
    }

    const fieldItems = fields.map(field => {        //iterating over fields to pull data from it
        const {id, name, type} = field;
        return (
            <li key={id}>
                <label htmlFor="{id}">{name}</label>
                <input 
                    id={id} 
                    onChange={handleChange} 
                    type={type} 
                    value={contact[id] || ''} 
                />
            </li>
        );
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    {fieldItems}
                </ul>
                <button type="submit">Submit</button>
            </form>
            <hr />
            <h2>Submitted Contacts</h2>
            <ContactList contacts={submittedContacts} />
        </>
    );
}