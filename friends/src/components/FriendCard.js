import React from "react";

const FriendCard = ({ friends }) => {
  return (
    <div className="friendCard">
      <p>name: {friends.name}</p>
      <p>age: {friends.age}</p>
      <p>email: {friends.email}</p>
    </div>
  );
};

export default FriendCard;
