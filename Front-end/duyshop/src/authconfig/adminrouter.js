import { isAuthenticated } from "./localstroge";
import { Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from 'react'
const AdminRoute = (props) => {

  return (
    <Route
      render={() =>
        JSON.parse(localStorage.getItem('staff')).role === 'ROLE_MANAGER' ? (
            props.children
          ) : (
            <Redirect
            to={{
              pathname: "/signin"
            }}
          />
          )
      }
    />
  );
};
export default AdminRoute;
