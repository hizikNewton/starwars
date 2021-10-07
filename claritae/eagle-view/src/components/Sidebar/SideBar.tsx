import { Drawer } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import classNames from "classnames";

// styles
import useStyles from "./styles";
import { useLayoutState } from "../../context/providers/LayoutProvider";
import { useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router";

interface Props {}

const SideBar = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { isSidebarOpened } = useLayoutState();

  const [isPermanent, setPermanent] = useState(true);

  const handleWindowWidthChange = () => {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  };

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    ></Drawer>
  );
};

export default withRouter(SideBar);
