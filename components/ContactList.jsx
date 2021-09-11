import ContactCard from "./ContactCard";

function ContactList(props) {
    console.log(props);
    const deleteConactHandler = (id) => {
        props.getContactId(id);
    }; const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHander={deleteConactHandler} />
        );
    });
    return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;