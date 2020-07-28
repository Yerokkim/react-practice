import React from "react";
// import PostList from "./PostList";
import Login from "./components/Login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/Dashboard";
import LastName from "./components/LastName";
import Nav from "./components/Nav";
import PrivateRoute from "./PrivateRoute";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/lastname" component={LastName} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
