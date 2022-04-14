import React, { Component } from "react";
import Todo from "./Todo";
import './Login.css'
const defaultUsername = "admin@gmail.com";
const defaultPassword = "admin";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: false,
    };
  }
  render() {
    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
    console.log(this.state);
    const handleLogin = () => {
      if (
        this.state.username === defaultUsername &&
        this.state.password === defaultPassword
      ) {
        this.setState({
          isLogged: true,
        });
      } else {
        alert("Provide correct credentials");
      }
    };
    return this.state.isLogged ? (
      <Todo />
    ) : (
      <div className="login-container">
        <h1>Login Form</h1>
        <label for="username">
          <b>Username</b>
        </label>

        <input className="form"
          type="email"
          placeholder="Enter e-mail"
          name="username"
          id="username"
          required
          onChange={handleChange}
        />
        <label for="password">
          <b>Password</b>
        </label>
        <input className="form"
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handleChange}
        />
        <button className="login-btn" onClick={handleLogin} type="submit">
          Login
        </button>
      </div>
    );
  }
}
