import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

const FriendForm = () => {
  const { newFriendForm, setNewFriendForm } = useState({
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
      <form>
        <input />
        <input />
        <input />
        <button>Add New Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
