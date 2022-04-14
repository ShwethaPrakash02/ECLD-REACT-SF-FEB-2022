import React, { Component } from "react";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContextProvider";

export default class Navbar extends Component {
  render() {
    const { toggleAuth, isAuth } = this.context;
    console.log(this.context);
    return (
      <div class="topnav">
        <a style={{ float: "right" }} onClick={toggleAuth} href="#about">
          {isAuth ? "Log Out" : "Login"}
        </a>
      </div>
    );
  }
}
Navbar.contextType = AuthContext;
