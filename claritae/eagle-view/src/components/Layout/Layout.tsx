import React from "react";
import useStyles from "./styles";

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";

interface Props extends RouteComponentProps {}

const Layout = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <SideBar />
      </>
    </div>
  );
};

export default withRouter(Layout);
