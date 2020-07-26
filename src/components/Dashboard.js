import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../actions/index";

const Dashboard = (props) => {
  useEffect(() => {
    props.getAllUsers();
  }, []);
  return (
    <div>
      {props.allUser.map((x) => (
        <p key={x.id}>{x.email}</p>
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  allUser: state.auth.allUser,
});

export default connect(mapStateToProps, { getAllUsers })(Dashboard);
