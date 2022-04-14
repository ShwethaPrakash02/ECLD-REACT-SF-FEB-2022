import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Login from './Login';
import Navbar from './Navbar';


export default class Details extends Component {
  render() {
    const {isAuth} = this.context
    if(!isAuth){
      return <Login/>
    }
    return (
      <div>
        <Navbar/>
        <h1>Login Details</h1>
        <p>You are logged in with token {this.context.responseData}</p>
      </div>
    );
  }
}
Details.contextType= AuthContext