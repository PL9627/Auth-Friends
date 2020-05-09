import React from "react";

const FriendCard = ({ newFriend }) => {
  return (
    <div>
      <p>name: {newFriend.name}</p>
      <p>age: {newFriend.age}</p>
      <p>eamil: {newFriend.email}</p>
    </div>
  );
};

export default FriendCard;
