import { Drawer, List } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import classNames from "classnames";

// styles
import useStyles from "./styles";
import { useLayoutState } from "../../context/providers/LayoutProvider";
import { useTheme } from "@material-ui/core/styles";
import { RouteComponentProps, withRouter } from "react-router";
import { SideBarNavs } from "./sidebarNavigations";
import SidebarLink from "./components/SidebarLink";

interface Props extends RouteComponentProps {}

const SideBar = ({ location }: Props) => {
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
    >
      <div className={classes.toolbar} />
      <List>
        {SideBarNavs.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            label={link.label}
            type={link.type ?? ""}
            icon={link.icon}
            children={link.children}
            link={link.link}
            nested={link.nested ?? false}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default withRouter(SideBar);
