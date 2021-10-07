import { Suspense } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Page from "../components/Page";
import { ComponentActions } from "../contexts/actions";
import { useAppState, useDispatch } from "../contexts/providers";
import { useRouterLocation } from "../contexts/providers/hooks";

const Containers: CustomRouter.Route[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    comp: Home,
  },]

const Routers = () => {
  const dispatch = useDispatch();
  const { components } = useAppState();
  const { mobileMenuVisible } = components;
  useRouterLocation(() => {
    if (mobileMenuVisible) {
      dispatch({
        type: ComponentActions.UpdateHeaderMobileMenuVisible,
        payload: {
          mobileMenuVisible: false,
        },
      });
    }
  });
  return (<Router>
     <Route
        render={(props: any) => (
          <Page>
            <Alert />
            <Header />
            <Suspense fallback={<span />}>
              <Switch location={props.location}>
                {Containers.map(container => (
                  <Route
                    {...container}
                    key={container.name}
                    render={routeProps => <RouterComp container={container} routeProps={routeProps} />}
                  />
                ))}
                <Redirect from="*" to="/404" />
              </Switch>
              {!(isMobile() && mobileMenuVisible) && <Footer />}
            </Suspense>
          </Page>
        )}
  </Router>);
};

export default Routers;
