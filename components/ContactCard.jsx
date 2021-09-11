import React from "react";

const ContactCard = (props) => {
    const { id, name, email, phone } = props.contact;
    const image = `${name[0].toUpperCase()}.png`
    console.log(image);
    return (<>
        <li className="w3-bar">
            <span className="w3-bar-item w3-button w3-white w3-xlarge w3-right w3-text-red" onClick={() => props.clickHander(id)}>X</span>
            <img src={`image/${image}`} className="w3-bar-item w3-circle w3-hide-small" width="64" height="64" alt={name} title={name} />
            <div className="w3-bar-item w3-small">
                <span className="w3-large">{name}</span><br />
                <span>{phone}</span><br />
                <span>{email}</span>
            </div>
        </li>
    </>);
};

export default ContactCard;