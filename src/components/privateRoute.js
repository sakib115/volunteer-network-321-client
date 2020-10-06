import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
const privateRoute = ({name, children, ...rest }) => {
    return (
            <Route
                {...rest}
                render={({ location }) => name ?
                    (children) :
                    ( <Redirect to={{ pathname: "/login", state: { from: location }}}/> )
                }
            />
    );
};

export default privateRoute;