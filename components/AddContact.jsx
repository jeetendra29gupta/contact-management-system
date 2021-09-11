import React, { useState } from "react";

function AddContact(props) {
    const [getForm, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setForm((data) => {
            return {
                ...data,
                [name]: value,
            };
        });
    };

    const addContact = (event) => {
        event.preventDefault();
        if (getForm.name === "" || getForm.phone === "" || getForm.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        props.addContactHandler(getForm)
        setForm({ name: "", email: "", phone: "" })
        alert("Done ..!");
    };
    return (<>
        <div className="w3-container">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={addContact}>
                <div className="w3-section">
                    <label><b>Name</b></label>
                    <input className="w3-input w3-border w3-round" type="text" name="name" placeholder="Name" value={getForm.name} onChange={inputEvent} />
                </div>
                <div className="w3-section">
                    <label><b>Phone</b></label>
                    <input className="w3-input w3-border w3-round" type="text" name="phone" placeholder="Phone" value={getForm.phone} onChange={inputEvent} />
                </div>
                <div className="w3-section">
                    <label><b>Email</b></label>
                    <input className="w3-input w3-border w3-round" type="text" name="email" placeholder="Email" value={getForm.email} onChange={inputEvent} />
                </div>
                <div className="w3-section">
                    <button className="w3-input w3-button w3-blue w3-round">Add</button>
                </div>
            </form>
        </div>
    </>);
};

export default AddContact;