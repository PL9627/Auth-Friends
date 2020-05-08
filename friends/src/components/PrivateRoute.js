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
}

export default Login;
