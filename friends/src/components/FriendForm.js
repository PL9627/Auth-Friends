import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

const FriendForm = () => {
  const [newFriendForm, setNewFriendForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChanges = (e) => {
    setNewFriendForm({
      ...newFriendForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", newFriendForm)
      .then((res) => {
        setNewFriendForm({
          ...newFriendForm,
          name: "",
          age: "",
          email: "",
        });
      })
      .catch((err) => console.log("FriendForm handleSubmit err", err));
  };

  return (
    <div className="friendForm">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleChanges}
          value={newFriendForm.name}
          placeholder="Type Friend's Name Here..."
        />
        <input
          name="age"
          type="text"
          onChange={handleChanges}
          value={newFriendForm.age}
          placeholder="Type Friend's Age Here..."
        />
        <input
          name="email"
          type="text"
          onChange={handleChanges}
          value={newFriendForm.email}
          placeholder="Type Friend's Email Here..."
        />
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
