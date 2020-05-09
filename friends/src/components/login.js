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

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            name="username"
            type="text"
            onChange={this.handleChanges}
            value={this.state.credentials.username}
          />
          <input
            name="password"
            type="text"
            onChange={this.handleChanges}
            value={this.state.credentials.password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
