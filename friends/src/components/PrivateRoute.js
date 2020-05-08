import React from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);

        this.props.history.push("/protected");
      })
      .catch((err) => console.log("login axios post err", err));
  };
}

export default Login;
