import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);
    axios.post("/api/users/add", newUser).then((res) => console.log(res.data));
    this.setState({
      username: "",
    });
  }
  render() {
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="name"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="submit"
              className="btn btn-primary float-right"
            />
          </div>
        </form>
      </div>
    );
  }
}
