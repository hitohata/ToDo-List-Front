import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Divider, Drawer, List, ListSubheader } from "@material-ui/core";

import SidebarTitle from "layouts/components/Sidebar/components/SidebarTitle";
import ListMenu from "./components/ListMenu";

interface IProps {
  onClose: () => void;
  open: boolean;
  variant: "persistent" | "temporary";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      [theme.breakpoints.up("lg")]: {
        marginTop: 64,
        height: "calc(100% - 64px)",
      },
    },
    root: {
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    list: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Sidebar: React.FC<IProps> = props => {
  const classes = useStyles();
  const { open, variant, onClose } = props;

  return (
    <Drawer
      anchor="left"
      classes={ { paper: classes.drawer } }
      onClose={ onClose }
      open={ open }
      variant={ variant }
    >
      <SidebarTitle />
      <div className={ classes.root }>
        <Divider className={ classes.divider } />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={ classes.list }
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu
            </ListSubheader>
          }
        >
          <ListMenu displayLetter={ "Top" } linkAddr={ "top-page" } />
          <ListMenu displayLetter={ "My Task" } linkAddr={ "my-task" } />
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
