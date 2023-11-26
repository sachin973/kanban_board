import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kanban from "./view/pages/kanban";
import Login from "./view/auth/login";
import Register from "./view/auth/register";
import{ Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Toaster />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Kanban} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

