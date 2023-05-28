import React, { useState } from "react";
import NewContact from "./components/NewContact";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const handleEdit = (taskToEdit) => {
    setModal(true);
    setEditContact(taskToEdit);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const [contact, setContact] = useState([]);
  function list(newObj) {
    let newContact = [...contact, newObj];
    newContact.sort((a, b) => a.name.localeCompare(b.name)); 
    setContact(newContact);
  }

  const handleSaveContact = (updatedContact) => {
    const newContact = contact.map((item) => {
      if (item.id == updatedContact.id) {
        return updatedContact;
      }
    });
    setContact(newContact);
    handleCloseModal();
  };

  const handleDelete = (id) => {
    let newContact = contact.filter((item) => item.id !== id);

    setContact(newContact);
  };

  const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal(true);
  }
  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <div>
      {showModal ? (
        <NewContact list={list} handleHideModal={handleHideModal} />
      ) : null}
      <TodoList
        contact={contact}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleShowModal={handleShowModal}
      />
      {modal ? (
        <EditModal
          editContact={editContact}
          handleCloseModal={handleCloseModal}
          handleSaveContact={handleSaveContact}
        />
      ) : null}
    </div>
  );
};

export default App;
