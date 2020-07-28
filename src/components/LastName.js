import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../actions/index";

const LastName = (props) => {
  useEffect(() => {
    props.getAllUsers();
  }, []);
  return (
    <div>
      {props.allUser.map((x) => (
        <p key={x.id}>{x.last_name}</p>
      ))}
    </div>
  );
};

LastName.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  allUser: state.auth.allUser,
});

export default connect(mapStateToProps, { getAllUsers })(LastName);
