import { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Page from "../components/Page";

const Hero = lazy(() => import("../pages/home/Hero"));

const Containers: CustomRouter.Route[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    comp: Hero,
  },
];

const RouterComp = ({
  container,
  routeProps,
}: {
  container: CustomRouter.Route;
  routeProps: any;
}) => {
  return <container.comp {...routeProps} />;
};

const Routes: FC = () => {
  return (
    <Router>
      <Route
        render={(props: any) => (
          <Page>
            <Suspense fallback={<span />}>
              <Switch location={props.location}>
                {Containers.map((container) => (
                  <Route
                    {...container}
                    key={container.name}
                    render={(routeProps) => (
                      <RouterComp
                        container={container}
                        routeProps={routeProps}
                      />
                    )}
                  />
                ))}
                <Redirect from="*" to="/404" />
              </Switch>
            </Suspense>
          </Page>
        )}
      />
    </Router>
  );
};

export default Routes;
