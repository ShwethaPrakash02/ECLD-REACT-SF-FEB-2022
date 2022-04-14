import React, { Component } from "react";
import "./Navbar.css";
import { ThemeContext } from "../context/ThemeContextProvider";

export default class Navbar extends Component {
  render() {
    const { toggleTheme, isThemed } = this.context;
    console.log(this.context);
    return (
      <div class="topnav">
        <a style={{ float: "right" }} onClick={toggleTheme} href="#">
          {isThemed ? "Dark Mode" : "Light Mode"}
        </a>
      </div>
    );
  }
}
Navbar.contextType = ThemeContext;
