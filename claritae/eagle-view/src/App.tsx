import React, { ComponentType, FC } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./pages/error/Error";

interface PrivateRouteProps {
  path: string;
  component: FC<any> | ComponentType;
}

function PrivateRoute(props: PrivateRouteProps) {
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
interface Props {}
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
