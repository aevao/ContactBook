import React from "react";
import "./Todolist.css";
const TodoList = (props) => {
  return (
    <div>
      <ul className="Nav">
        <li className="nav-list">Здесь Храняться Самое Важное</li>
        <li className="nav-list">Ваши Знакомые, Близкие и Друзья </li>
        <li className="nav-list">И Ваши Воспоминания</li>
        <li className="nav-list">
          <button className="Nav-btn" onClick={props.handleShowModal}>Добавить Контакт</button>
        </li>
      </ul>
      <div className="contact">

      {props.contact.map((item) => (
        <ul className="contact-list">
          <li className="contact-list-item">Name : {item.name} {item.surname}</li>
          <li className="contact-list-item">Phone :  {item.phone}</li>
          <li className="contact-list-item"> Email : {item.email}</li>
          <li className="contact-list-item buttons-div" >
            <button className="contact-list-btn" onClick={() => props.handleEdit(item)}>Edit</button>
            <button className="contact-list-btn delete" onClick={() => props.handleDelete(item.id)}>Delete</button>
          </li>
        </ul>
      ))}
      </div>
    </div>
  );
};

export default TodoList;
