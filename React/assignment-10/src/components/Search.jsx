import React, { Component } from "react";
import "./Search.css";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      users: [],
      details: [],
      showDetails: false,
      showTable: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleClick = () => {
    axios
      .get("https://api.github.com/search/users?", {
        params: {
          q: this.state.input,
        },
      })
      .then((result) => {
        this.setState({
          showTable: true,
          users: result.data.items,
        });
      })
      .catch((error) => console.log(error));
  };
  handleDetails = (login) => {
    axios.get("https://api.github.com/users/" + login).then((result) => {
      this.setState({
        showDetails: true,
        details: result.data,
      }).catch((error) => console.log(error));
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div className="search-container">
          <div className="search-input-div">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </div>
          <button className="search-button" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div className="details-div">
          {this.state.showDetails && (
            <table>
              <tr>
                <th>Created Date</th>
                <th>Followers</th>
                <th>Public Repos</th>
              </tr>
              <tr>
                <td> {this.state.details.created_at}</td>
                <td> {this.state.details.followers}</td>
                <td> {this.state.details.public_repos}</td>
              </tr>
            </table>
          )}
        </div>
        <div>
          {this.state.showTable && (
            <table>
              <tr>
                <th>User</th>
                <th>Picture</th>
                <th>Details</th>
              </tr>

              {this.state.users.map((user) => {
                return (
                  <tr>
                    <td>{user.login}</td>
                    <td>
                      <img width="100px" height="100px" src={user.avatar_url} />
                    </td>
                    <td>
                      <button onClick={() => this.handleDetails(user.login)}>
                        More Info
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </>
    );
  }
}
