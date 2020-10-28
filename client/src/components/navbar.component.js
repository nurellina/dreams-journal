import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar-container">
        <div class="header-container">
          <div class="header">
            <div class="logo">
              <h1>
                {" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  Dreams Catcher{" "}
                </Link>{" "}
              </h1>{" "}
            </div>
          </div>
        </div>
        <div class="menu-container">
          <div class="menu">
            <div class="menu-entries">
              {" "}
              <h3>
                {" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  entries
                </Link>{" "}
              </h3>{" "}
            </div>
            <div class="menu-create">
              <h3>
                <Link to="/create" style={{ textDecoration: "none" }}>
                  create entry
                </Link>{" "}
              </h3>{" "}
            </div>
            <div class="menu-author">
              <h3>
                {" "}
                <Link to="/user" style={{ textDecoration: "none" }}>
                  create author
                </Link>{" "}
              </h3>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
