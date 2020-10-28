import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dream = (props) => (
  <div class="dream-entry-container">
    <div class="dream-entry">
      <div class="dream-header">
        {" "}
        {props.dream.date.substring(0, 10)}, {props.dream.type},{" "}
        {props.dream.username}{" "}
      </div>
      <div class="dream-body">{props.dream.description}</div>
      <div class="buttons-container">
        <Link
          to={"/edit/" + props.dream._id}
          style={{ textDecoration: "none" }}
        >
          edit &nbsp;{" "}
        </Link>{" "}
        |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteDream(props.dream._id);
          }}
        >
          &nbsp; delete
        </a>
      </div>
    </div>
  </div>
);

export default class DreamsList extends Component {
  constructor(props) {
    super(props);
    this.deleteDream = this.deleteDream.bind(this);
    this.state = { dreams: [] };
  }
  componentDidMount() {
    axios
      .get("/api/dreams/")
      .then((response) => {
        this.setState({ dreams: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteDream(id) {
    axios.delete("/api/dreams/" + id).then((res) => console.log(res.data));
    this.setState({
      dreams: this.state.dreams.filter((el) => el._id !== id),
    });
  }
  dreamList() {
    return this.state.dreams.map((currentdream) => {
      return (
        <Dream
          dream={currentdream}
          deleteDream={this.deleteDream}
          key={currentdream._id}
        />
      );
    });
  }
  render() {
    return <div>{this.dreamList()}</div>;
  }
}
