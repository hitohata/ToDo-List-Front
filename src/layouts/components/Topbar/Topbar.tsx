import React from "react";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import grey from "@material-ui/core/colors/grey";

interface IProps {
  onSidebarOpen: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      backgroundColor: grey[900],
    },
    flexGrow: {
      flexGrow: 1,
    },
    signOutButton: {
      marginLeft: theme.spacing(1),
    },
    title: {
      color: "white",
      textDecoration: "none",
      fontFamily: "Times New Roman",
      padding: "0px 50px",
    },
  }),
);

const Topbar: React.SFC<IProps> = props => {
  const classes = useStyles();

  return (
    <AppBar className={ classes.root }>
      <Toolbar>
        <Typography variant="h4">
          <p className={ classes.title }>
            Todo List
          </p>
        </Typography>
        <div className={ classes.flexGrow } />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={ props.onSidebarOpen }>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
