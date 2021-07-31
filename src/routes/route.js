import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import useToken from "../hooks/useToken";


export default function MainRoute() {
    const token = useToken()
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
            <Route path="/login" component={Login}/>
            <ProtectedRoute path="/stock" isAuth={!!token} component={Home}/>
        </Switch>
    );
}

function ProtectedRoute({isAuth, component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component/>;
                } else {
                    return (
                        <Redirect
                            to={{pathname: "/login", state: {from: props.location}}}
                        />
                    );
                }
            }}
        />
    );
}