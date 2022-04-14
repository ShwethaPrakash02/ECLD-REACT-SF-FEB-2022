import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import Search from "./Search";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
      axios.post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      }).then(response=>{
         this.setState({
             token: response.data.token
         })
      }).catch(error=>{
          window.alert(error.message)
      })
  };
  render() {
    if (this.state.token) {
      return <Search/>
    }

    console.log(this.state);

    return (
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
        <button className="login-btn" onClick={this.handleLogin} type="submit">
          Login
        </button>
      </div>
    );
  }
}
