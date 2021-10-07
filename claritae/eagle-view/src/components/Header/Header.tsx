import { AppBar } from "@material-ui/core";
import useStyles from "./styles";
import React from "react";

interface Props {
  history: any;
}

const Header = (props: Props) => {
  const classes = useStyles();
  return <AppBar position="fixed" className={classes.appBar}></AppBar>;
};

export default Header;
