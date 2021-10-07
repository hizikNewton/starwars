import React, { ComponentType, FC } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./pages/error/Error";

interface Props {
  path: string;
  component: FC<any> | ComponentType;
}

function PrivateRoute(props: Props) {
  const { component, ...rest } = props;
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}
const App = (props: Props) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <PrivateRoute path="/app" component={Layout} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
};

export default App;
