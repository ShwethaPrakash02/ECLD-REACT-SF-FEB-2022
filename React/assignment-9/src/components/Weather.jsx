import React, { Component } from "react";
import "./Weather.css";
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      temp: "",
      wind:"",
      city:""
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=3d603b309bcf067a107d8d0d42943877&units=metric`
      )
      .then((result) =>{
        console.log(result)
        this.setState({
          temp: result.data.main.temp,
          wind: result.data.wind.speed,
          city: result.data.name
        })
      } )
      .catch((error) => console.log(error));
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div id="container">
          <input
            type="text"
            id="city"
            placeholder="City name"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick} id="btn">
            Search
          </button>
        </div>
        <div>
          <h1>{this.state.city}</h1>
          <p>Temperature:{this.state.temp}</p>
          <p>Wind:{this.state.wind}</p>
        </div>
      </>
    );
  }
}
