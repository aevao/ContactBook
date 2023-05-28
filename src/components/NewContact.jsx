import React, { useState } from "react";
import "./Newcontact.css";

const NewContact = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleInputName(e) {
    setName(e.target.value);
  }
  function handleInputSurname(e) {
    setSurname(e.target.value);
  }
  function handleInputphone(e) {
    setPhone(e.target.value);
  }
  function handleInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleContact() {
    if (name && surname && phone && email) {
      let contact = {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        id: Date.now(),
      };
      props.list(contact);
      setName("");
      setSurname("");
      setPhone("");
      setEmail("");
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div className="createcontact">
      <button className="closeBtn" onClick={props.handleHideModal}>
        X
      </button>
      <h2>Add new contact</h2>
      <input
        className="createInput"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleInputName}
      />
      <input
        className="createInput"
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={handleInputSurname}
      />
      <input
        className="createInput"
        type="number"
        placeholder="Phone number"
        value={phone}
        onChange={handleInputphone}
      />
      <input
        className="createInput"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInputEmail}
      />
      <button className="createButton" onClick={handleContact} >
        Add
      </button>
    </div>
  );
};

export default NewContact;
