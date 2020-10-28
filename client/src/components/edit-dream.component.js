import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class EditDream extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      type: "dream",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/dreams/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          type: response.data.type,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/users/")
      .then((response) => {
        this.setState({ users: response.data.map((user) => user.username) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const dream = {
      username: this.state.username,
      description: this.state.description,
      type: this.state.type,
      date: this.state.date,
    };

    console.log(dream);

    axios
      .post("/api/dreams/update/" + this.props.match.params.id, dream)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <select
              ref="userInput"
              required
              className="form-control"
              placeholder="Type"
              value={this.state.type}
              onChange={this.onChangeType}
            >
              <option value="scary">scary</option>
              <option value="happy">happy</option>
              <option value="strange">strange</option>
              <option value="nightmare">nightmare</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              required
              className="form-control"
              placeholder="Description"
              rows="4"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <select
              ref="userInput"
              required
              className="form-control"
              placeholder="author"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                dateFormat="MMMM d, yyyy"
              />
            </div>
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
