import React, { useState } from "react";
import "./styles.css";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addformData, setAddformData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldvalue = event.target.value;

    const newFornData = { ...addformData };
    newFornData[fieldName] = fieldvalue;
    setAddformData(newFornData);
  };
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>phone number</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => (
            <tr>
              <td>contact.full name</td>
              <td>contact.full address</td>
              <td>contact.phone number</td>
              <td>contact.email</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2> add a contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="enter name ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="enter an address ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phone number"
          required="required"
          placeholder="enter a phone number ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="enter a email ..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
