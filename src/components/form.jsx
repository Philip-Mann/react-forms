import React, { useState } from 'react';
// { useState } is a hook, a function


export default function Form() {

    const [contact, setContact] = useState({});

    const handleChange = e => {
        const value = e.target.value;
        const id = e.target.id;
        const updatedContact = Object.assign({}, contact, {
            ...contact,     // ... splits things up into key: value pairs
            [id]: value     // adds to the contact object
        });
        setContact(updatedContact);
    };

    return (
        <form>
            <ul>
                <li>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={handleChange} value={contact.firstName || ''} id="firstName" />
                </li>

                <li>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={handleChange} value={contact.lastName} id="lastName" />
                </li>

                <li>  
                    <label htmlFor="street1">Street 1</label>
                    <input type="text" onChange={handleChange} value={contact.street1} id="street1" />
                </li>

                <li>
                    <label htmlFor="street2">Street 2</label>
                    <input type="text" onChange={handleChange} value={contact.street2} id="street2" />
                </li>

                <li>
                    <label htmlFor="city">City</label>
                    <input type="text" onChange={handleChange} value={contact.city} id="city" />
                </li>

                <li>
                    <label htmlFor="state">State</label>
                    <input type="text" onChange={handleChange} value={contact.state} id="state" />
                </li>

                <li>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" onChange={handleChange} value={contact.zip} id="zip" />
                </li>

                <li>
                    <label htmlFor="tel">Telephone</label>
                    <input type="text" onChange={handleChange} value={contact.tel} id="tel" />
                </li>

                <li>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleChange} value={contact.email} id="email" />
                </li>
            </ul>
            <button type="submit">Submit</button>
        <p>{contact.firstName}</p>
        </form>
    );
}