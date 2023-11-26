import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kanban from "./view/pages/kanban";
import Login from "./view/auth/login";
import Register from "./view/auth/register";
import { Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Toaster />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/kanban" exact component={Kanban} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
