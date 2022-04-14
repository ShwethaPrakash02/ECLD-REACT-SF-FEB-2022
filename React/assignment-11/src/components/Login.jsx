import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { AuthContext } from "../context/AuthContextProvider";
import Navbar from "./Navbar";
import Details from './Details'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    const {setResponseData, toggleAuth} = this.context
    axios
      .post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({
          responseData: response.data.token,
          isAuth:toggleAuth()
        });

        setResponseData(this.state.responseData);

      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  render() {
    console.log(this.state);
    console.log(this.context);
if(this.state.responseData){
  return <Details/>
}
    return (
      <>
      <Navbar/>
        <div className="login-container">
          <h1>Login</h1>
          <label className="login-label" for="username">
            <b>Username</b>
          </label>
          <input
            className="form"
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            required
            onChange={this.handleChange}
          />
          <label className="login-label" for="password">
            <b>Password</b>
          </label>
          <input
            className="form"
            id="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button
            className="login-btn"
            onClick={this.handleLogin}
            type="submit"
          >
            Login
          </button>
        </div>
      </>
    );
  }
}
Login.contextType = AuthContext;
