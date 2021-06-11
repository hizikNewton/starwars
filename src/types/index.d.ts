declare namespace CustomRouter {
  interface Route {
    name: string;
    path: string;
    params?: string;
    exact?: boolean;
    comp: React.FunctionComponent<any>;
  }
}
