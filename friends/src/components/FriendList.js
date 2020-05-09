import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";
import FriendForm from "./FriendForm";
import FriendCard from "./FriendCard";

const FriendList = () => {
  const { newFriendList, setNewFriendList } = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setNewFriendList(res.data);
      })
      .catch((err) => console.log("FriendList useEffect err", err));
  });

  return (
    <div className="friendList">
      <div>
        {newFriendList.map((friends) => {
          <div key={friends.id}>
            <FriendCard newFriend={friends} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default FriendList;
