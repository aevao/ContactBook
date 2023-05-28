import React, { useState } from "react";
import "./Edit.css";
const ChangeModal = (props) => {
  const [item, setItem] = useState(props.editContact);

  
  function handleEditSurname(e) {
    let newObj = { ...item };
    newObj.surname = e.target.value;
    setItem(newObj);
  }
  
  function handleEditphone(e) {
    let newObj = { ...item };
    newObj.phone = e.target.value;
    setItem(newObj);
  }
  
  function handleEditName(e) {
    let newObj = { ...item }; 
    newObj.name = e.target.value; 
    setItem(newObj); 
  }
  function handleEditEmail(e) {
    let newObj = { ...item };
    newObj.email = e.target.value;
    setItem(newObj);
  }

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button className="close" onClick={props.handleCloseModal}>
            &times;
          </button>
        </div>
        <input
          className="change-modal-input"
          type="text"
          onChange={handleEditName}
          value={item.name}
        />
        <input
          className="change-modal-input"
          type="text"
          onChange={handleEditSurname}
          value={item.surname}
        />
        <input
          className="change-modal-input"
          type="number"
          onChange={handleEditphone}
          value={item.phone}
        />
        <input
          className="change-modal-input"
          type="email"
          onChange={handleEditEmail}
          value={item.email}
        />
        <button className="save" onClick={() => props.handleSaveContact(item)}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ChangeModal;
