import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import { Typography } from "../Wrapper/Wrapper";
import {
  NotificationsNone as NotificationsIcon,
  Search as SearchIcon,
  MoreVert,
} from "@material-ui/icons";
import classNames from "classnames";

interface Props {
  history: any;
}

const Header = (props: Props) => {
  const classes = useStyles();
  const isNotificationsUnread = true;
  const notifications = [1, 2, 3, 4];
  var [isSearchOpen, setSearchOpen] = useState(false);
  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.logotype}
          variant="h6"
          size="md"
          color=""
          weight="medium"
        >
          {"Dashboard"}
        </Typography>

        <div className={classes.grow} />
        <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color="error"
          >
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <Avatar
          alt="person"
          src="assets/profilePic.jpg"
          className={classes.avatar}
        />
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          className={classes.headerMenuButton}
        >
          <MoreVert classes={{ root: classes.headerIcon }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
