import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import "./Forms.css";
import Navbar from "./Navbar";

export default class Forms extends Component {
  render() {
    console.log(this.context);
    const { isThemed } = this.context;
    return (
      <div className={isThemed ? "div-light" : "div-dark"}>
        <Navbar />
        <div className="signup">
          <h2>Form</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="div">
              <input
                className="input"
                type="text"
                placeholder="Full name"
                name="name"
                required
              />
            </div>
            <div className="div">
              <input className="input" placeholder="age" name="age" required />
            </div>

            <div className="div">
              <input
                className="input"
                placeholder="email(username)"
                name="username"
                required
              />
            </div>
            <div className="div">
              <input
                className="input"
                type="password"
                placeholder="password"
                name="password"
                required
              />
            </div>
            <div className="div">
              <input
                className="input"
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                required
              />
            </div>

            <div className="submit-div">
              <input className="submit-input" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Forms.contextType = ThemeContext;
