import React, { Component } from "react";
import Login from "./Login";
import "./Signup.css";

const users = []

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      select: "",
      info: "",
      checkbox: false,
      isRedirect:false,
      username: "",
      password: "",
      confirmPassword: "",
      
      
    };
  }
  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === "checkbox" ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    users.push(this.state)
    if (this.state.password === this.state.confirmPassword) {
      localStorage.setItem("users", JSON.stringify(users))
      alert(`${this.state.name} Registered Successfully!!!`);
    } else {
      alert("Password does not match");
    }
      
    
    this.setState({
      name: "",
      age: "",
      select: "",
      info: "",
      checkbox: false,
      username: "",
      password: "",
      confirmPassword: "",
      isRedirect: true
    });

    console.log(this.state, "state");
  };
  handleRedirect = () => {
    this.setState({
      isRedirect: true,
    });
  };
  render() {
    if (this.state.isRedirect) {
      return <Login />;
    }
    console.log(this.state.checkbox, "checkbox");
    return (
      <div className="signup">
        <h2>Sign Up</h2>
        <h5>Please fill in this form to create an account!</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="div">
            <input
              className="input"
              type="text"
              placeholder="Full name"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              required
            />
          </div>
          <div className="div">
            <input
              className="input"
              placeholder="age"
              onChange={this.handleChange}
              name="age"
              value={this.state.age}
              required
            />
          </div>
          <div className="div">
            <select
              className="input"
              name="select"
              value={this.state.select}
              onChange={this.handleChange}
              required
            >
              <option value="">Department</option>
              <option>Marketing</option>
              <option>HR</option>
              <option>Finance</option>
              <option>IT</option>
            </select>
          </div>
          <div className="marital-div">
            <label>Marital status</label>
            <input
              type="checkbox"
              name="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleChange}
            />
          </div>
          <div className="div">
            <textarea
              className="input"
              placeholder="address"
              name="info"
              value={this.state.info}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="div">
            <input
              className="input"
              placeholder="email(username)"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              required
            />
          </div>
          <div className="div">
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              required
            />
          </div>
          <div className="div">
            <input
              className="input"
              type="password"
              placeholder="confirm password"
              onChange={this.handleChange}
              name="confirmPassword"
              value={this.state.confirmPassword}
              required
            />
          </div>

          <div className="submit-div">
            <input className="submit-input" type="submit" value="Submit" />
          </div>
        </form>
        <div className="div-log">
            Already a member? 
          <button className="click-btn" onClick={this.handleRedirect}>Log in</button>
        </div>
      </div>
    );
  }
}
