import React from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };
}

export default Login;
