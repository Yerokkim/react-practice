import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


const PrivateRoute = ({isAuth,component:Component},...rest) => {
    return (
       <Route
       {...rest}
       render={
props=>isAuth ? (<Component {...props}/>) :
(<Redirect to ={{pathname:"/"}}/>) 
       }
       >
     
       </Route>
    )
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };
  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  
  export default connect(mapStateToProps)(PrivateRoute);
