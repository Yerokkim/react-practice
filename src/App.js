import React from "react";
// import PostList from "./PostList";
import Login from "./components/Login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        App
        <Login />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
