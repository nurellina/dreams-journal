import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import DreamsList from "./components/dreams-list.component";
import EditDream from "./components/edit-dream.component";
import CreateDream from "./components/create-dream.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={DreamsList} />
        <Route path="/edit/:id" component={EditDream} />
        <Route path="/create" component={CreateDream} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
