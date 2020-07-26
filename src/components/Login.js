import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../actions/index";
// import useForm from "react-hook-form";
//    "email": "eve.holt@reqres.in",
//"password": "cityslicka"
const Login = ({ getUser, isError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    getUser(user);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isError && <h1>login failed</h1>}
      <form onSubmit={onSubmit}>
        <label>email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)} name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};
Login.propTypes = {
  getUser: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isError: state.auth.isError,
});
export default connect(mapStateToProps, { getUser })(Login);
