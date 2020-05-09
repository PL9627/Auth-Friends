import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

const Login = (props) => {
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setLoginCred({
      ...loginCred,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", loginCred)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);

        props.history.push("/friends");
      })
      .catch((err) => console.log("login axios post err", err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          name="username"
          type="text"
          onChange={handleChanges}
          value={loginCred.username}
        />
        <input
          name="password"
          type="text"
          onChange={handleChanges}
          value={loginCred.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
