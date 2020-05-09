import React from "react";

const FriendCard = ({ newFriend }) => {
  return (
    <div className="friendCard">
      <p>name: {newFriend.name}</p>
      <p>age: {newFriend.age}</p>
      <p>eamil: {newFriend.email}</p>
    </div>
  );
};

export default FriendCard;
