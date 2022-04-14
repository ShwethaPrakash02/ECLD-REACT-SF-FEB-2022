import React, { Component } from "react";

export const AuthContext = React.createContext();

export default class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      responseData: "",
    };
  }

  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth,
    });
  };
  setResponseData = (data) => {
    this.setState({
      responseData: data,
    });
  };
  render() {
    const { isAuth, responseData } = this.state;
    const { toggleAuth, setResponseData } = this;
    return (
      <AuthContext.Provider
        value={{ isAuth, responseData, toggleAuth, setResponseData }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
