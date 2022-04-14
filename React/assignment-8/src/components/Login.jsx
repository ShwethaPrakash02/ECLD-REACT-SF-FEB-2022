import React, { Component } from "react";
import Todo from "./Todo";
import "./Login.css";
import Signup from "./Signup";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: false,
      isSignup: false,
    };
  }
  handleSignup = () => {
    this.setState({
      isSignup: true,
    });
  };
  render() {
    if (this.state.isSignup) {
      return <Signup />;
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
    console.log(this.state);

    const getSingleUser = () => {
      if (localStorage.getItem("users")) {
        const localUsers = JSON.parse(localStorage.getItem("users"));
        console.log(localUsers, "localUsers");
        const singleUser = localUsers.find(
          (item) => item.username === this.state.username
        );
        console.log(singleUser, "singleUser");
        return singleUser;
      }
    };

    const inputValidation = () => {
      if (!this.state.username || !this.state.password) {
        alert("Please enter username and password");
        return false;
      }
      return true;
    };

    const handleLogin = () => {
      if (!inputValidation()) {
        return;
      }
      const singleUser = getSingleUser();

      if (singleUser.password === this.state.password) {
        this.setState({
          isLogged: true,
        });
      } else {
        alert("Please enter valid credentials");
      }
    };
    return this.state.isLogged ? (
      <Todo />
    ) : (
      <div className="login-container">
        <h1>Login</h1>
        <label className="login-label" for="username">
          <b>Username</b>
        </label>
        <input
          className="form"
          type="email"
          placeholder="Enter username"
          name="username"
          id="username"
          required
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <button className="login-btn" onClick={handleLogin} type="submit">
          Login
        </button>
        <div className="div-btn">
          Don't have an account?
          <button className="class-btn" onClick={this.handleSignup}>
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
