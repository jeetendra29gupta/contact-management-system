import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";

function HomePage() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [getContacts, setContacts] = useState([]);
    const d = new Date();

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...getContacts, { id: d.getTime(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = getContacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setContacts(retriveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getContacts));
    }, [getContacts]);


    return (<>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <div className="w3-container">
            <h2>Contact list</h2>
            <ul className="w3-ul w3-card w3-round">
                <ContactList contacts={getContacts} getContactId={removeContactHandler} />
            </ul>
            <br/>
        </div>
    </>);
};

export default HomePage;